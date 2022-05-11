import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { collection, getDocs, doc, setDoc } from "firebase/firestore";
import { db } from "./Firestore";
import uniqid from "uniqid";
import Home from "./Home";
import NotFound from "./NotFound";
import Leaderboard from "./Leaderboard";
import PoppyField from "./PoppyField";
import Haystack from "./Haystack";
import Squirrels from "./Squirrels";
import CornField from "./CornField";
import DropMenu from "./DropMenu";
import PopUp from "./PopUp";
import blank from "../assets//images/blank.jpg";
import corn from "../assets//images/corn.png";
import hay from "../assets//images/hay.jpg";
import poppy from "../assets//images/poppy.png";
import squirrel from "../assets//images/squirrel.png";

function PageMain() {
  const [itemLocations, setItemLocations] = useState([]);
  const [leaderData, setLeaderData] = useState([]);
  const [currentImg, setCurrentImg] = useState("");
  const [curImgSrc, setCurImgSrc] = useState(blank);
  const [currentTgt, setCurrentTgt] = useState([]);
  const [startTime, setStartTime] = useState(0);
  const [userTime, setUserTime] = useState(0);
  const [userInitials, setUserInitials] = useState("");
  const [tgtCount, setTgtCount] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [absoluteX, setAbsoluteX] = useState(0);
  const [absoluteY, setAbsoluteY] = useState(0);
  const [selectedItem, setSelectedItem] = useState("");
  const [foundList, setFoundList] = useState([]);
  const [dropMenuStyle, setDropMenuStyle] = useState({
    display: "none",
    position: "absolute",
    top: 0,
    left: 0,
  });
  const [btnStyle, setBtnStyle] = useState({
    display: "block",
  });
  const [popUpStyle, setPopUpStyle] = useState({
    display: "none",
    position: "absolute",
    top: "60%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  });

  // Pull item coordinates from Firestore
  async function getCoords(db) {
    const coordCol = collection(db, "tgtCoords");
    const coordSnapshot = await getDocs(coordCol);
    const coordList = coordSnapshot.docs.map((doc) => doc.data());
    setItemLocations(coordList);
  }

  // Call getCoords (if not already set)
  useEffect(() => {
    if (itemLocations.length < 1) {
      getCoords(db);
    }
  });

  // Pull scores from Firestore
  async function getScores(db) {
    const scores = collection(db, "leaderboard");
    const scoreSnapshot = await getDocs(scores);
    const leaderList = scoreSnapshot.docs.map((doc) => doc.data());
    setLeaderData(leaderList);
  }

  useEffect(() => {
    getScores(db);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [popUpStyle]);

  // Set Image and which Items are in the image upon loading
  const establishCurrentImg = (img) => {
    setCurrentImg(img);
    establishSearchParams();
    resetSearch();
  };

  // Set search conditions based on current page
  const establishSearchParams = () => {
    if (currentImg === "corn") {
      setCurrentTgt(["hamster", "pear"]);
      setTgtCount(2);
    } else if (currentImg === "hay") {
      setCurrentTgt(["needle"]);
      setTgtCount(1);
    } else if (currentImg === "poppy") {
      setCurrentTgt(["crab"]);
      setTgtCount(1);
    } else if (currentImg === "squirrel") {
      setCurrentTgt(["mouse"]);
      setTgtCount(1);
    } else {
      setCurrentTgt([]);
      setTgtCount(0);
    }
  };

  // Reset Search data to allow for better reloading
  const resetSearch = () => {
    setCurImgSrc(blank);
    setBtnStyle({
      display: "block",
    });
    setFoundList([]);
    setSelectedItem("");
    setDropMenuStyle({
      display: "none",
      position: "absolute",
      top: 0,
      left: 0,
    });
    setPopUpStyle({
      ...popUpStyle,
      display: "none",
    });
    setUserTime(0);
  };

  // Display Image and Hide Button on click
  const handleStartClick = () => {
    if (currentImg === "corn") {
      setCurImgSrc(corn);
      setBtnStyle({
        display: "none",
      });
    } else if (currentImg === "hay") {
      setCurImgSrc(hay);
      setBtnStyle({
        display: "none",
      });
    } else if (currentImg === "poppy") {
      setCurImgSrc(poppy);
      setBtnStyle({
        display: "none",
      });
    } else if (currentImg === "squirrel") {
      setCurImgSrc(squirrel);
      setBtnStyle({
        display: "none",
      });
    }
    setStartTime(Date.now());
  };

  // Set current mouse position on image
  const setCoords = (e) => {
    if (e.target.x > 0) {
      setCurrentX(e.pageX - e.target.x);
      setAbsoluteX(e.pageX);
    } else {
      setCurrentX(e.pageX);
      setAbsoluteX(e.pageX);
    }
    setCurrentY(e.pageY - e.target.y);
    setAbsoluteY(e.pageY - 30);
  };

  // On click, Place/Remove DropMenu Adjacent to Mouse
  useEffect(() => {
    if (currentX !== 0) {
      if (
        dropMenuStyle.display === "none" &&
        curImgSrc !== "/static/media/blank.f9074fff.jpg" &&
        userTime === 0
      ) {
        if (currentX <= 600) {
          /* Left */ setDropMenuStyle({
            display: "block",
            position: "absolute",
            top: absoluteY,
            left: absoluteX + 20,
          });
        } else if (currentX > 600) {
          /* Right */ setDropMenuStyle({
            display: "block",
            position: "absolute",
            top: absoluteY,
            left: absoluteX - 150,
          });
        }
      } else if (dropMenuStyle.display === "block") {
        setDropMenuStyle({
          display: "none",
          position: "absolute",
          top: 0,
          left: 0,
        });
        setSelectedItem("");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentX, currentY]);

  // On Click, set mouse coordinates and affirm image params
  const handleClick = (e) => {
    setCoords(e);
    setCurrentImg(e.target.id);
    establishSearchParams();
  };

  // Set SelectedItem to the item selected in DropMenu
  const handleSelectItem = (e) => {
    setSelectedItem(e.target.value);
  };

  // When selectedItem changes, execute checkItemLocation
  useEffect(() => {
    checkItemLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedItem]);

  // Go through tgt array looking for target that matches selection from dropMenu. Filter all data from firestore and keep only data that matches selected item. Execute verifyLocation. Remove dropMenu and reset selectedItem
  const checkItemLocation = () => {
    const mappedTgts = currentTgt.map((tgt) => {
      if (tgt === selectedItem) {
        const matchingItem = itemLocations.filter((item) => {
          return item.name === selectedItem;
        });
        verifyLocation(matchingItem[0]);
        return matchingItem[0];
      }
      return tgt;
    });
    // Reset selection
    setSelectedItem("");
    setDropMenuStyle({
      display: "none",
      position: "absolute",
      top: 0,
      left: 0,
    });
    return mappedTgts;
  };

  // Destructure itemData, check against mouse data to determine if item was located/clicked
  const verifyLocation = function (itemData) {
    const { xMin, xMax, yMin, yMax } = itemData;
    if (
      currentX >= xMin &&
      currentX <= xMax &&
      currentY >= yMin &&
      currentY <= yMax
    ) {
      checkAllFound(itemData);
    }
  };

  // Destructure Name from itemData. If selected Item is already found, do nothing. If it hasn't been found yet, add it to foundList. Check if all items are found. If yes, begin win logic. If not, continue
  const checkAllFound = function (itemData) {
    const { name } = itemData;
    if (!foundList.includes(name)) {
      setFoundList((item) => [...item, name]);
      if (foundList.length === tgtCount - 1) {
        handleAllFound();
      }
    }
  };

  // Get/Set time, display PopUp, blackout image
  const handleAllFound = function () {
    let endTime = Date.now();
    let runTime = ((endTime - startTime) / 1000).toFixed(1);
    setUserTime(runTime);
    setPopUpStyle({
      ...popUpStyle,
      display: "block",
    });
  };

  // Set initials based on user input
  const handleUserInitials = (e) => {
    setUserInitials(e.target.value);
  };

  // Hide popup, prompt firestore write
  const handleSubmitUser = () => {
    setPopUpStyle({
      ...popUpStyle,
      display: "none",
    });
    commitData();
  };

  // Write current values to Firestore
  async function commitData() {
    await setDoc(doc(db, "leaderboard", uniqid()), {
      image: currentImg,
      name: userInitials,
      time: userTime,
    });
  }

  return (
    <div>
      <DropMenu
        dropMenuStyle={dropMenuStyle}
        selectedItem={selectedItem}
        handleSelectItem={handleSelectItem}
      />
      <PopUp
        popUpStyle={popUpStyle}
        userTime={userTime}
        userInitials={userInitials}
        handleUserInitials={handleUserInitials}
        handleSubmitUser={handleSubmitUser}
      />
      <div className="main-comp">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/poppy"
            element={
              <PoppyField
                handleClick={handleClick}
                handleStartClick={handleStartClick}
                establishCurrentImg={establishCurrentImg}
                curImgSrc={curImgSrc}
                btnStyle={btnStyle}
              />
            }
          />
          <Route
            path="/hay"
            element={
              <Haystack
                handleClick={handleClick}
                handleStartClick={handleStartClick}
                establishCurrentImg={establishCurrentImg}
                curImgSrc={curImgSrc}
                btnStyle={btnStyle}
              />
            }
          />
          <Route
            path="/squirrel"
            element={
              <Squirrels
                handleClick={handleClick}
                handleStartClick={handleStartClick}
                establishCurrentImg={establishCurrentImg}
                curImgSrc={curImgSrc}
                btnStyle={btnStyle}
              />
            }
          />
          <Route
            path="/corn"
            element={
              <CornField
                handleClick={handleClick}
                handleStartClick={handleStartClick}
                establishCurrentImg={establishCurrentImg}
                curImgSrc={curImgSrc}
                btnStyle={btnStyle}
              />
            }
          />
          <Route
            path="/scores"
            element={
              <Leaderboard getScores={getScores} leaderData={leaderData} />
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default PageMain;
