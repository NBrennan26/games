import { useEffect } from "react";

const CornField = (props) => {
  useEffect(() => {
    props.establishCurrentImg("corn");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="main-comp" id="corn-sec">
      <span className="img-info">
        Locate the <b>Hamster</b> and the <b>Pear</b> hidden in the corn
      </span>
      <button
        style={props.btnStyle}
        onClick={() => {
          props.handleStartClick();
        }}
      >
        Start The Search
      </button>
      <img
        className="search-img"
        id="corn"
        src={props.curImgSrc}
        alt="corn"
        onClick={(e) => props.handleClick(e)}
      />
    </div>
  );
};

export default CornField;
