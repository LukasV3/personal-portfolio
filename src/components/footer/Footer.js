import React from "react";
import "./styles.scss";

const Footer = () => {
  const goToPage = (e, url) => {
    e.preventDefault();
    window.open(url);
  };

  return (
    <footer className="footer">
      <h3 className="footer__title">Thank You!</h3>
      <p className="footer__text">
        Feel free to get in touch. You can find all my links below.
      </p>
      <div className="admin-buttons">
        <a
          onClick={(e) => goToPage(e, "https://github.com/LukasV3")}
          href="https://github.com/LukasV3"
          className="admin-button"
        >
          <i className="fab fa-github-square"></i> Github
        </a>
        <a
          onClick={(e) => goToPage(e, "https://github.com/LukasV3")}
          href="https://github.com/LukasV3"
          className="admin-button"
        >
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a
          onClick={(e) => goToPage(e, "mailto:lukasvolk0@gmail.com")}
          href="mailto:lukasvolk0@gmail.com"
          className="admin-button"
        >
          <i className="fas fa-envelope-square"></i> Email
        </a>
        {/* <a className="admin-button">
          <i className="far fa-newspaper"></i> CV
        </a> */}
      </div>
    </footer>
  );
};

export default Footer;
