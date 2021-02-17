import React from "react";
import "./styles.scss";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav__links">
          <li className="nav__item">
            <p className="nav__logo">Lukas Volk</p>
          </li>
          <li className="nav__item">
            <a className="nav__link" href="/">
              Projects
            </a>
          </li>
        </ul>
      </nav>

      <div className="header__container">
        <h1 className="header__title">Front-end Developer</h1>
        <h4 className="header__text">
          ri oregn lnsoid lrngi slfnirg rig or rltyj tyj etyj etyjj jy jy ys sdid ngs dg
          gsrg r sg gher tkewr sgrg srg rgs rg sgr
        </h4>
        <div className="admin-buttons">
          <button className="admin-button">
            <i className="fab fa-github-square"></i> Github
          </button>
          <button className="admin-button">
            <i className="fab fa-linkedin"></i> LinkedIn
          </button>
          <button className="admin-button">
            <i className="fas fa-envelope-square"></i> Email
          </button>
          <button className="admin-button">
            <i className="far fa-newspaper"></i> Resume
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
