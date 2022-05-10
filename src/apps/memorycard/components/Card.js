import Amy from "../assets/Amy.png";
import Bender from "../assets/Bender.png";
import Farnsworth from "../assets/Farnsworth.png";
import Fry from "../assets/Fry.png";
import Hermes from "../assets/Hermes.png";
import Kif from "../assets/Kif.png";
import Leela from "../assets/Leela.png";
import Nibbler from "../assets/Nibbler.png";
import Scruffy from "../assets/Scruffy.png";
import Slurms from "../assets/Slurms.png";
import Zapp from "../assets/Zapp.png";
import Zoidberg from "../assets/Zoidberg.png";

const Card = (props) => {
  const assignImgSrc = () => {
    return props.character === "Amy"
      ? Amy
      : props.character === "Bender"
      ? Bender
      : props.character === "Farnsworth"
      ? Farnsworth
      : props.character === "Fry"
      ? Fry
      : props.character === "Hermes"
      ? Hermes
      : props.character === "Kif"
      ? Kif
      : props.character === "Leela"
      ? Leela
      : props.character === "Nibbler"
      ? Nibbler
      : props.character === "Scruffy"
      ? Scruffy
      : props.character === "Slurms"
      ? Slurms
      : props.character === "Zapp"
      ? Zapp
      : Zoidberg;
  };

  return (
    <div className="mc-card">
      <img
        src={assignImgSrc()}
        alt={props.character}
        id={props.id}
        className="card-img"
        onClick={() => props.handleClick(props.id)}
      />
    </div>
  );
};

export default Card;


  /* <img
src={assignImgSrc()}
alt={props.character}
className="card-img"
id={props.id}
onClick={() => props.handleClick(props.id, props.clickCount)}
value={props.value}
/> */

