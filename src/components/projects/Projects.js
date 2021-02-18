import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./styles.scss";

const Projects = () => {
  return (
    <section className="projects">
      <h3 className="projects__title">Projects</h3>
      <div className="projects__container">
        <div className="project">
          <div className="project--col-1">
            <h3 className="project__name">Moviebase App</h3>
            <div className="project__image">
              <Carousel
                showArrows={true}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
              >
                <img src="../img/moviebase-watchlist.png" alt="app" />
                <img src="../img/moviebase-search.png" alt="app" />
                <img src="../img/moviebase-modal.png" alt="app" />
              </Carousel>
            </div>
            <div className="project__buttons">
              <button className="project__button">
                <i className="fas fa-desktop"></i> Live Preview
              </button>
              <button
                onClick={() => window.open("https://github.com/LukasV3/moviebase-app")}
                className="project__button"
              >
                <i className="fas fa-code"></i> Code
              </button>
            </div>
            <h4 className="project__title">Technologies Used</h4>
            <div className="project__description--grid-1">
              <p>
                <i className="fas fa-circle"></i> React
              </p>
              <p>
                <i className="fas fa-circle"></i> React Router
              </p>
              <p>
                <i className="fas fa-circle"></i> Redux
              </p>
              <p>
                <i className="fas fa-circle"></i> Redux Thunk
              </p>
              <p>
                <i className="fas fa-circle"></i> Sass
              </p>
            </div>
          </div>
          <div className="project--col-2">
            <h4 className="project__title">Overview</h4>
            <p className="project__description">
              Moviebase is an app that acts as a base for keeping track of all the films
              you plan to watch and those you finally see. It
              <span className="project__text--highlight">
                consumes the movie database API
              </span>
              and allows users to search through a myraiad of different films that they
              can then mark accordingly.
            </p>
            <h4 className="project__title">Project Difficulties</h4>
            <p className="project__description">
              At the start of this project I made the mistake of.. When I was building out
              the app in the beginning making it responsive was somewhat of an
              afterthought. As a result when the time came to make it mobile friendly it
              became extremely challanging, as many of the styles and much of the logic
              was solely built with larger viewports in mind.
            </p>
            <h4 className="project__title">What I Learned</h4>
            <p className="project__description">Going forward I now always try to code</p>
            <h4 className="project__title">Features</h4>
            <div className="project__description--grid-2">
              <p>
                <i className="fas fa-circle"></i> To improve performance and reduce the
                number of server calls I have implemented a
                <span className="project__text--highlight"> debounce</span> which delays
                API calls by 0.5s. The removal of the search button also calls for a
                cleaner UI and more intuitive user experience.
              </p>
              <p>
                <i className="fas fa-circle"></i> The add to watchlist/watched buttons are
                <span className="project__text--highlight"> rendered dynamically </span>
                depending on whether the movie has already been added to either list in
                the <span className="project__text--highlight">redux store</span>.
              </p>
            </div>
          </div>
        </div>
        <div className="projects__line"></div>
        <div className="project">
          <div className="project--col-1">
            <h3 className="project__name">Cryptogic Landing Page</h3>
            <div className="project__image">
              <Carousel
                showArrows={true}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
              >
                <img src="../img/cryptogic-header.png" alt="app" />
                <img src="../img/cryptogic-features.png" alt="app" />
                <img src="../img/cryptogic-testimonials.png" alt="app" />
                <img src="../img/cryptogic-footer.png" alt="app" />
              </Carousel>
            </div>
            <div className="project__buttons">
              <button className="project__button">
                <i className="fas fa-desktop"></i> Live Preview
              </button>
              <button
                onClick={() =>
                  window.open("https://github.com/LukasV3/cryptogic-landing-page")
                }
                className="project__button"
              >
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
