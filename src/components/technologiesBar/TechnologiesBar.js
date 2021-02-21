import React from "react";
import "./styles.scss";

const TechnologiesBar = () => {
  return (
    <section className="technolgies-bar">
      <div className="technolgies-bar__container">
        <img src="../img/html5-logo.png" alt="HTML5 icon" />
        <img src="../img/css3-logo.png" alt="CSS3 icon" />
        <img src="../img/sass-logo.png" alt="Sass icon" />
        <img src="../img/js-logo.png" alt="Javascript icon" />
        <img src="../img/react-logo.png" alt="React icon" />
        <img src="../img/redux-logo.png" alt="Redux icon" />
        <img src="../img/nodejs-logo.png" alt="NodeJS icon" />
        <img src="../img/git-logo.png" alt="Git icon" />
        <img src="../img/github-logo.png" alt="Github icon" />
      </div>
    </section>
  );
};

export default TechnologiesBar;
