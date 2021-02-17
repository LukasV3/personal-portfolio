import React from "react";
import "./styles.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <h3 className="footer__title">Thank You</h3>
      <p className="footer__text">
        Ereh tohk te'orho trhk'rterteh yre yrejyre yre yj rej reyj rth htprh rtkh r;hlgd
        /d,gklh /h
      </p>
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
    </footer>
  );
};

export default Footer;
