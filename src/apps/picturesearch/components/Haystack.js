import { useEffect } from "react";

const Haystack = (props) => {
  useEffect(() => {
    props.establishCurrentImg("hay");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="ps-main-comp" id="hay-sec">
      <span className="ps-img-info">
        Find the <b>Needle</b> in the haystack
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
        id="hay"
        src={props.curImgSrc}
        alt="hay"
        onClick={(e) => props.handleClick(e)}
      />
    </div>
  );
};

export default Haystack;
