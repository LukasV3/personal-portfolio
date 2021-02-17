import React from "react";
import "./styles.scss";

const TechnologiesBar = () => {
  return (
    <section className="technolgies-bar">
      <div className="technolgies-bar__container">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
          alt="react-icon"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
          alt="react-icon"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg"
          alt="react-icon"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
          alt="react-icon"
        />
        {/* <img src="../img/react-icon.png" alt="react-icon" /> */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          alt="react-icon"
        />
        <img src="https://cdn.worldvectorlogo.com/logos/redux.svg" alt="react-icon" />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg"
          alt="react-icon"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Octicons-logo-github.svg"
          alt="react-icon"
        />
        {/* <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg"
          alt="react-icon"
        /> */}
      </div>
    </section>
  );
};

export default TechnologiesBar;
