import { useEffect, useState } from "react";
import Pixel from "./Pixel";

function SketchPad(props) {
  const [boxArr, setBoxArr] = useState([]);

  useEffect(() => {
    const curBoxArr = []
    for (let i = 0; i < props.pixels; i++) {
      curBoxArr.push(i);
    }
    setBoxArr(curBoxArr)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <div className="sketch-pad">
      {boxArr.map((item) => {
        return <Pixel key={item} />;
      })}
    </div>
  );
}

export default SketchPad;
