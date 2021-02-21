import React from "react";
import "./styles.scss";

const Header = () => {
  const scrollTo = (e) => {
    e.preventDefault();
    document
      .querySelector(e.target.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__links">
          <li className="nav__item">
            <p className="nav__logo">
              <span>Lukas</span>Volk
            </p>
          </li>
          <li className="nav__item">
            <a onClick={scrollTo} className="nav__link" href="#projects">
              Projects
            </a>
          </li>
        </ul>
      </nav>

      <div className="header__container">
        <h1 className="header__title">Front-end Developer</h1>
        <h4 className="header__text">
          Hi my name is Lukas and I am freelance front-end developer who is also
          comfortable working on the backend
        </h4>
        <div className="admin-buttons">
          <button
            onClick={() => window.open("https://github.com/LukasV3")}
            className="admin-button"
          >
            <i className="fab fa-github-square"></i> Github
          </button>
          <button className="admin-button">
            <i className="fab fa-linkedin"></i> LinkedIn
          </button>
          <button
            onClick={() =>
              window.open(
                "mailto:lukasvolk0@gmail.com?subject=Subject&body=Body%20goes%20here"
              )
            }
            className="admin-button"
          >
            <i className="fas fa-envelope-square"></i>
            Email
          </button>
          {/* <button className="admin-button">
            <i className="far fa-newspaper"></i> CV
          </button> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
