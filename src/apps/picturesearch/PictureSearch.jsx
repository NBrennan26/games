import { useEffect } from "react";
import "./ps.css";
import NavBar from "./components/NavBar";
import PageMain from "./components/PageMain";

function PictureSearch() {
  useEffect(() => {
    document.title = "Games | Picture Search";
  }, []);

  return (
    <>
      <NavBar />
      <PageMain />
    </>
  );
}

export default PictureSearch;
