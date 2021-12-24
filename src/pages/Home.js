import React from "react";
import Img from "../images/portfolio_image.png";

function Home() {
  const highlighted = () => {
    return <h2 className="quote-highlight">I thank the heavens</h2>;
  };

  return (
    <div className="container">
      <div className="hero">
        <div className="title">
          <h1 className="title-beginning">Full Stack</h1>
          <h1 className="title-middle">Web Dev</h1>
          <h1 className="title-end">eloper</h1>
        </div>

        <div className="quote">
          <h2>
            "A calm sea don't make a skilled sailer so {highlighted()} for the
            stormy weather"
          </h2>
        </div>

        <img className="image" src={Img} alt={Img} />
      </div>

      <div classname="projects-background"></div>
    </div>
  );
}

export default Home;
