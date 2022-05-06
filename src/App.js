import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Battleship from "./apps/battleship/Battleship";
import EtchaSketch from "./apps/etchasketch/EtchaSketch";
import MemoryCard from "./apps/memorycard/MemoryCard";
import PictureSearch from "./apps/picturesearch/PictureSearch";
import RockPaperScissors from "./apps/rockpaperscissors/RockPaperScissors";
import TicTacToe from "./apps/tictactoe/TicTacToe";

function App() {
  return (
    <>
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/battleship" element={<Battleship />} />
            <Route path="/etchasketch" element={<EtchaSketch />} />
            <Route path="/memory-card" element={<MemoryCard />} />
            <Route path="/picture-search" element={<PictureSearch />} />
            <Route
              path="/rock-paper-scissors"
              element={<RockPaperScissors />}
            />
            <Route path="/tic-tac-toe" element={<TicTacToe />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
