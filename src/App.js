import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Dashboard from "./components/Dashboard";
import Battleship from "./pages/Battleship";
import EtchaSketch from "./pages/EtchaSketch";
import MemoryCard from "./pages/MemoryCard";
import PictureSearch from "./pages/PictureSearch";
import RockPaperScissors from "./pages/RockPaperScissors";
import TicTacToe from "./pages/TicTacToe";

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
            <Route path="/rock-paper-scissors" element={<RockPaperScissors />} />
            <Route path="/tic-tac-toe" element={<TicTacToe />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
