import { useEffect } from "react";
import "./mc.css";
import GameContainer from "./components/GameContainer";

function MemoryCard() {
  useEffect(() => {
    document.title = "Games | Memory Card";
  }, []);

  return (
    <div>
      <GameContainer />
    </div>
  );
}

export default MemoryCard;
