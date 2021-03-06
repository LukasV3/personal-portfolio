import React from "react";
import "./styles.scss";

const Header = () => {
  const scrollTo = (e) => {
    e.preventDefault();
    document
      .querySelector(e.target.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  };

  const goToPage = (e, url) => {
    e.preventDefault();
    window.open(url);
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
        <h1 className="header__title">Web Developer</h1>
        <h4 className="header__text">
          Hi, my name is Lukas, and I am a self-taught web developer based just outside of
          London.
        </h4>
        <div className="admin-buttons">
          <a
            onClick={(e) => goToPage(e, "https://github.com/LukasV3")}
            href="https://github.com/LukasV3"
            className="admin-button"
          >
            <i className="fab fa-github-square"></i> Github
          </a>
          <a
            onClick={(e) => goToPage(e, "https://www.linkedin.com/in/lukasvolk3/")}
            href="https://www.linkedin.com/in/lukasvolk3/"
            className="admin-button"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a
            onClick={(e) => goToPage(e, "mailto:lukasvolk0@gmail.com")}
            href="mailto:lukasvolk0@gmail.com"
            className="admin-button"
          >
            <i className="fas fa-envelope-square"></i>
            Email
          </a>
          <a
            onClick={(e) => goToPage(e, "pdf/lukas-volk-cv.pdf")}
            href="pdf/lukas-volk-cv.pdf"
            className="admin-button"
          >
            <i className="far fa-newspaper"></i>
            CV
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
