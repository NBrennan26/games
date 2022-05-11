import { useEffect } from "react";

const Squirrels = (props) => {
  useEffect(() => {
    props.establishCurrentImg("squirrel");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ps-main-comp" id="squirrel-sec">
      <span className="ps-img-info">
        A <b>Mouse</b> is blending in among some squirrels
      </span>
      <button
        className="ps-start-btn"
        style={props.btnStyle}
        onClick={() => {
          props.handleStartClick();
        }}
      >
        Start The Search
      </button>
      <img
        className="ps-search-img"
        id="squirrel"
        src={props.curImgSrc}
        alt="squirrel"
        onClick={(e) => props.handleClick(e)}
      />
    </div>
  );
};

export default Squirrels;
