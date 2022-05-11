import React from "react";

const PopUp = (props) => {
  return (
    <div id="drop-menu" style={props.popUpStyle}>
      <div id="popup-box">
        <form id="popup-form" onChange={props.handleUserInitials}>
          <label>
            {" "}
            <b>Well Done!</b> <br /> <br />
            Please Submit your Initials to log your time <br /> (
            {props.userTime} seconds) <br />
            <br />
            <input type="text" placeholder="AAA" maxLength="3"></input>
          </label>
          <button onClick={props.handleSubmitUser} type="button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopUp;
