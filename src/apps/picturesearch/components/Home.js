const Home = () => {
  return (
    <div className="main-comp" id="home-sec">
      Welcome!
      <br />
      This is a Search and Find game
      <br />
      The object is to find the hidden images as quickly as possible
      <br />
      Compete for the best times on the Leaderboard
      <p></p>
      To play, simply click the start button to begin the search
      <br />
      Once you've found the item you're looking for, click on it and select it
      from the dropdown menu
      <br />
      Once you find all the hidden items, your time will be revealed and you
      will have the opportunity to submit your time along with your initials
      <p></p>
      <p></p>
      <p></p>
      <p>
        All images are by{" "}
        <a href="https://thedudolf.blogspot.com/" target="blank">
          Gergely Dudás
        </a>
        <br />
        Please check out his website. He's got a bunch more puzzles and other
        great content too
      </p>
    </div>
  );
};

export default Home;
