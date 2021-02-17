import React from "react";
import "./styles.scss";

const Projects = () => {
  return (
    <section className="projects">
      <h3 className="projects__title">Projects</h3>
      <div className="projects__container">
        <div className="project">
          <div className="project--col-1">
            <h3 className="project__name">Moviebase App</h3>
            <div className="project__image"></div>
            <div className="project__buttons">
              <button className="project__button">
                <i className="fas fa-desktop"></i> Live Preview
              </button>
              <button className="project__button">
                <i className="fas fa-code"></i> Code
              </button>
            </div>
            <h4 className="project__title">Technologies Used</h4>
            <div className="project__description--grid">
              <p>
                <i className="fas fa-circle"></i> React
              </p>
              <p>
                <i className="fas fa-circle"></i> Redux
              </p>
              <p>
                <i className="fas fa-circle"></i> CSS3
              </p>
              <p>
                <i className="fas fa-circle"></i> Sass
              </p>
            </div>
          </div>
          <div className="project--col-2">
            <h4 className="project__title">Overview</h4>
            <p className="project__description">
              onreiog jreqjho ;erqjireg.ragn jrgjsfgnf djgfsfg kfdjjg dfl g dfkgnfldgf
              kngknflgn ksfn;gg rea;rigj r grie g erjl ee groger a/io3
            </p>
            <h4 className="project__title">My Solution</h4>
            <p className="project__description">
              onreiog jreqjho ;erqjireg.ragn jrgjsfgnf djgfsfg kfdjjg dfl g dfkgnfldgf
              kngknflgn ksfn;gg rea;rigj r grie g erjl ee groger a/io3
            </p>
            <h4 className="project__title">Notable Features</h4>
            <p className="project__description">
              onreiog jreqjho ;erqjireg.ragn jrgjsfgnf djgfsfg kfdjjg dfl g dfkgnfldgf
              kngknflgn ksfn;gg rea;rigj r grie g erjl ee groger a/io3
            </p>
          </div>
        </div>
        <div className="projects__line"></div>
        <div className="project">
          <div className="project--col-1">
            <h3 className="project__name">Cryptogic Landing Page</h3>
            <div className="project__image"></div>
            <div className="project__buttons">
              <button className="project__button">
                <i className="fas fa-desktop"></i> Live Preview
              </button>
              <button className="project__button">
                <i className="fas fa-code"></i> Code
              </button>
            </div>
            <h4 className="project__title">Technologies Used</h4>
            <div className="project__description--grid">
              <p>
                <i className="fas fa-circle"></i> React
              </p>
              <p>
                <i className="fas fa-circle"></i> Redux
              </p>
              <p>
                <i className="fas fa-circle"></i> CSS3
              </p>
              <p>
                <i className="fas fa-circle"></i> Sass
              </p>
            </div>
          </div>
          <div className="project--col-2">
            <h4 className="project__title">Overview</h4>
            <p className="project__description">
              onreiog jreqjho ;erqjireg.ragn jrgjsfgnf djgfsfg kfdjjg dfl g dfkgnfldgf
              kngknflgn ksfn;gg rea;rigj r grie g erjl ee groger a/io3
            </p>
            <h4 className="project__title">My Solution</h4>
            <p className="project__description">
              onreiog jreqjho ;erqjireg.ragn jrgjsfgnf djgfsfg kfdjjg dfl g dfkgnfldgf
              kngknflgn ksfn;gg rea;rigj r grie g erjl ee groger a/io3
            </p>
            <h4 className="project__title">Notable Features</h4>
            <p className="project__description">
              onreiog jreqjho ;erqjireg.ragn jrgjsfgnf djgfsfg kfdjjg dfl g dfkgnfldgf
              kngknflgn ksfn;gg rea;rigj r grie g erjl ee groger a/io3
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
