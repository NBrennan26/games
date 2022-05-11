import { useEffect } from "react";

const PoppyField = (props) => {
  useEffect(() => {
    props.establishCurrentImg("poppy");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ps-main-comp" id="poppy-sec">
      <span className="ps-img-info">
        There is a <b>Crab</b> hidden in this field of Poppy
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
        id="poppy"
        src={props.curImgSrc}
        alt="poppy"
        onClick={(e) => props.handleClick(e)}
      />
    </div>
  );
};

export default PoppyField;
