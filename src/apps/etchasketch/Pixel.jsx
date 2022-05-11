function Pixel() {
  const handleHover = (e) => {
    e.target.className = "pixel-item filled";
  };

  return <div className="pixel-item" onMouseEnter={handleHover}></div>;
}

export default Pixel;
