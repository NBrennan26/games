import { useState, useEffect } from "react";
import { db } from "./Firestore";
import uniqid from "uniqid";

const Leaderboard = (props) => {
  const [selectData, setSelectData] = useState([]);
  const [curBoard, setCurBoard] = useState("all");
  let allData = props.leaderData;

  useEffect(() => {
    props.getScores(db);
    buildLeaderboard("all");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Take selected image and filter matching leaderData, then sort by time and set selectData
  const buildLeaderboard = (val) => {
    setCurBoard(val);
    if (val === "all") {
      allData.sort((a, b) => {
        return a.time - b.time;
      });
      setSelectData(allData);
    } else {
      const filteredData = allData.filter((item) => {
        return item.image === val;
      });
      filteredData.sort((a, b) => {
        return a.time - b.time;
      });
      setSelectData(filteredData);
    }
  };

  const setBtnStyle = (val) => {
    if (val === curBoard) {
      return {
        background: "#f1faee",
      };
    } else {
      return {
        background: "#e63946",
      };
    }
  };

  return (
    <div className="ps-main-comp" id="ps-score-sec">
      <div id="ps-board-container">
        <div id="ps-board-nav">
          <button
            className="ps-score-btn"
            style={setBtnStyle("poppy")}
            onClick={() => {
              buildLeaderboard("poppy");
            }}
          >
            {" "}
            Poppy
          </button>
          <button
            className="ps-score-btn"
            style={setBtnStyle("corn")}
            onClick={() => {
              buildLeaderboard("corn");
            }}
          >
            Corn
          </button>
          <button
            className="ps-score-btn"
            style={setBtnStyle("squirrel")}
            onClick={() => {
              buildLeaderboard("squirrel");
            }}
          >
            Squirrel
          </button>
          <button
            className="ps-score-btn"
            style={setBtnStyle("hay")}
            onClick={() => {
              buildLeaderboard("hay");
            }}
          >
            Hay
          </button>
          <button
            className="ps-score-btn"
            style={setBtnStyle("all")}
            onClick={() => {
              buildLeaderboard("all");
            }}
          >
            All
          </button>
        </div>
        <div id="ps-board-display">
          <ul id="ps-leader-list">
            {selectData.map((item) => {
              return (
                <li key={uniqid()} className="ps-ldr-list-item">
                  <span>{item.name}</span>
                  <span>{item.image}</span>
                  <span>{item.time} sec</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
