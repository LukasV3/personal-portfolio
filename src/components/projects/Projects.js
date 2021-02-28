import React, { useEffect } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./styles.scss";

const Projects = () => {
  useEffect(() => {
    const allProjects = document.querySelectorAll(".project");

    const revealProject = function (entries, observer) {
      const [entry] = entries;

      if (!entry.isIntersecting) return;

      entry.target.classList.remove("project--hidden");
      observer.unobserve(entry.target);
    };

    const projectObserver = new IntersectionObserver(revealProject, {
      root: null,
      threshold: 0.15,
    });

    allProjects.forEach(function (project) {
      projectObserver.observe(project);
      project.classList.add("project--hidden");
    });
  });

  const goToPage = (e, url) => {
    e.preventDefault();
    window.open(url);
  };

  return (
    <section className="projects" id="projects">
      <h3 className="projects__title">Projects</h3>
      <div className="projects__container">
        {/* MOVIEBASE APP */}
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
              <a
                onClick={(e) =>
                  goToPage(e, "https://silly-stonebraker-764eca.netlify.app")
                }
                href="https://silly-stonebraker-764eca.netlify.app"
                className="project__button"
              >
                <i className="fas fa-desktop"></i> Live Preview
              </a>
              <a
                onClick={(e) => goToPage(e, "https://github.com/LukasV3/moviebase-app")}
                href="https://github.com/LukasV3/moviebase-app"
                className="project__button"
              >
                <i className="fas fa-code"></i> Code
              </a>
            </div>
            <h4 className="project__title">Technologies Used</h4>
            <div className="project__description--grid-1">
              <p>
                <i className="fas fa-circle"></i> HTML5
              </p>
              <p>
                <i className="fas fa-circle"></i> Sass
              </p>
              <p>
                <i className="fas fa-circle"></i> CSS3
              </p>
              <p>
                <i className="fas fa-circle"></i> Redux Thunk
              </p>
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
                <i className="fas fa-circle"></i> Axios
              </p>
            </div>
          </div>
          <div className="project--col-2">
            <h4 className="project__title">Overview</h4>
            <p className="project__description">
              Moviebase is an app that acts as a base for keeping track of all the films
              you plan to watch and those you finally see. It
              <span className="project__text--highlight"> consumes the TMDb API </span>
              and allows users to search through a myriad of different films that they can
              then mark accordingly.
            </p>
            <h4 className="project__title">Project Difficulties</h4>
            <p className="project__description">
              When I was building out the app making it responsive was somewhat of an
              afterthought. As a result when the time came to make it mobile friendly it
              became very difficult, as many of the styles and much of the logic was
              solely built with larger viewports in mind.
            </p>
            <h4 className="project__title">What I Learned</h4>
            <p className="project__description">
              Going forward I now always try to code using a{" "}
              <span className="project__text--highlight">mobile first approach</span>. I
              not only save a lot of time but also find that it's easier to add more
              features to my screen as the total space increases, rather than do the
              opposite.
            </p>
            <h4 className="project__title">Notable Features</h4>
            <div className="project__description--grid-2">
              <p>
                <i className="fas fa-circle"></i> To improve performance and reduce the
                number of server calls I have implemented a
                <span className="project__text--highlight"> debounce</span> which delays
                API calls by 0.5s.
              </p>
              <p>
                <i className="fas fa-circle"></i> The add to watchlist/watched buttons are
                <span className="project__text--highlight"> rendered dynamically </span>
                depending on whether the movie has already been added to either array in
                the <span className="project__text--highlight">Redux store</span>.
              </p>
              <p>
                <i className="fas fa-circle"></i> Made use of
                <span className="project__text--highlight"> React Portal </span>to render
                modal which can be accessed by clicking on a film on either the watchlist
                or watched pages (as shown in image 3).
              </p>
            </div>
          </div>
        </div>
        <div className="projects__line"></div>

        {/* CRYPTOGIC SITE */}
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
              <a
                onClick={(e) => goToPage(e, "https://elastic-minsky-050ab8.netlify.app")}
                href="https://elastic-minsky-050ab8.netlify.app"
                className="project__button"
              >
                <i className="fas fa-desktop"></i> Live Preview
              </a>
              <a
                onClick={(e) =>
                  goToPage(e, "https://github.com/LukasV3/cryptogic-landing-page")
                }
                href="https://github.com/LukasV3/cryptogic-landing-page"
                className="project__button"
              >
                <i className="fas fa-code"></i> Code
              </a>
            </div>
            <h4 className="project__title">Technologies Used</h4>
            <div className="project__description--grid-1">
              <p>
                <i className="fas fa-circle"></i> HTML5
              </p>
              <p>
                <i className="fas fa-circle"></i> Sass
              </p>
              <p>
                <i className="fas fa-circle"></i> CSS3
              </p>
              <p>
                <i className="fas fa-circle"></i> React
              </p>
            </div>
          </div>
          <div className="project--col-2">
            <h4 className="project__title">Overview</h4>
            <p className="project__description">
              Cryptogic is a fictional cryptocurrency marketplace that I have built a
              landing page for. With the market being extremely volatile and many fears
              growing around its potential for hacking, consumers on the whole are still
              sticking with safer alternatives. The goal of this site is to change this
              misconception.
              {/* Cryptocurrency investments are currently viewed by the
              mainstream as being based on speculation.  */}
              {/*               
              to build a site that was simple and
              easy to navigate With it being a relatively new technology and many of the
              market leaders suffering hacks potential consumers are often scared by its
              risks which is ultimately preventing its full ascension into mainstream
              finance. that many consumers struggle to grasp growing fears of hacking and
              I wanted to build a site that juxtaposes this misconcenption. The site is
              therefore simple by design and very easy to navigate to help enstil trust
              with the user. */}
            </p>
            <h4 className="project__title">My Solution</h4>
            <p className="project__description">
              The site I've built is simple and easy to navigate by design. The colours I
              chose, dark blue and green, were chosen as they are relatively positive
              colours that lend themselves towards trust and dependability.
            </p>
            <h4 className="project__title">Notable Features</h4>
            <div className="project__description--grid-2">
              <p>
                <i className="fas fa-circle"></i> I made use of the{" "}
                <span className="project__text--highlight">
                  Intersecting Observer API
                </span>{" "}
                to render sections of the site gradually.
              </p>
              <p>
                <i className="fas fa-circle"></i> The site has a
                <span className="project__text--highlight"> carousel </span> which can be
                toggled to view testimonials from other users.
              </p>
            </div>
          </div>
        </div>
        <div className="projects__line"></div>

        {/* GAME OF THRONES APP */}
        <div className="project">
          <div className="project--col-1">
            <h3 className="project__name">Game of Thrones Interactive Map</h3>
            <div className="project__image">
              <Carousel
                showArrows={true}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
              >
                <img src="../img/got-main.jpeg" alt="app" />
                <img src="../img/got-highlight.jpeg" alt="app" />
                <img src="../img/got-search.jpeg" alt="app" />
                <img src="../img/got-detail.jpeg" alt="app" />
              </Carousel>
            </div>
            <div className="project__buttons">
              <a
                onClick={(e) =>
                  goToPage(e, "https://game-of-thrones-interactive.herokuapp.com/")
                }
                href="https://game-of-thrones-interactive.herokuapp.com/"
                className="project__button"
              >
                <i className="fas fa-desktop"></i> Live Preview
              </a>
              <a
                onClick={(e) =>
                  goToPage(
                    e,
                    "https://github.com/LukasV3/game-of-thrones-interactive-map"
                  )
                }
                href="https://github.com/LukasV3/game-of-thrones-interactive-map"
                className="project__button"
              >
                <i className="fas fa-code"></i> Code
              </a>
            </div>
            <h4 className="project__title">Technologies Used</h4>
            <div className="project__description--grid-1">
              <p>
                <i className="fas fa-circle"></i> HTML5
              </p>
              <p>
                <i className="fas fa-circle"></i> Sass
              </p>
              <p>
                <i className="fas fa-circle"></i> CSS3
              </p>
              <p>
                <i className="fas fa-circle"></i> Leaflet
              </p>
              <p>
                <i className="fas fa-circle"></i> React
              </p>
              <p>
                <i className="fas fa-circle"></i> Node.js
              </p>
              <p>
                <i className="fas fa-circle"></i> Express
              </p>
              <p>
                <i className="fas fa-circle"></i> MongoDB
              </p>
            </div>
          </div>
          <div className="project--col-2">
            <h4 className="project__title">Overview</h4>
            <p className="project__description">
              This project is an interactive map based on the popular TV series Game of
              Thrones built using React, Leaflet, Node.js, and MongoDB.
            </p>
            {/* <h4 className="project__title">My Solution</h4>
            <p className="project__description">
              The site I've built is simple and easy to navigate by design. The colours I
              chose, dark blue and green, were chosen as they are relatively positive
              colours that lend themselves towards trust and dependability, virtues that
              seem to be lacking in the crypto world.
            </p> */}
            <h4 className="project__title">Notable Features</h4>
            <div className="project__description--grid-2">
              <p>
                <i className="fas fa-circle"></i>
                Users can click on parts of the map to find out more infomation about a
                particular kingdom.
              </p>
              <p>
                <i className="fas fa-circle"></i> Users can search for a kingdom and with
                the help of <span className="project__text--highlight">fuse.js</span> a
                fuzzy search the data will be completed to help accomodate for typos.
              </p>
              <p>
                <i className="fas fa-circle"></i>
                Implemented a<span className="project__text--highlight">
                  {" "}
                  debounce
                </span>{" "}
                to delay API calls by 0.5s.
              </p>
            </div>
          </div>
        </div>
        <div className="projects__line"></div>

        {/* PORTFOLIO SITE */}
        <div className="project">
          <div className="project--col-1">
            <h3 className="project__name">Personal Portfolio</h3>
            <div className="project__image">
              <Carousel
                showArrows={true}
                showThumbs={false}
                infiniteLoop={true}
                autoPlay={true}
              >
                <img src="../img/portfolio-header.png" alt="app" />
                <img src="../img/portfolio-project.png" alt="app" />
              </Carousel>
            </div>
            <div className="project__buttons">
              <a href="#blank" className="project__button--disabled">
                <i className="fas fa-desktop"></i> Live Preview
              </a>
              <a
                onClick={(e) =>
                  goToPage(e, "https://github.com/LukasV3/personal-portfolio")
                }
                href="https://github.com/LukasV3/personal-portfolio"
                className="project__button"
              >
                <i className="fas fa-code"></i> Code
              </a>
            </div>
            <h4 className="project__title">Technologies Used</h4>
            <div className="project__description--grid-1">
              <p>
                <i className="fas fa-circle"></i> HTML5
              </p>
              <p>
                <i className="fas fa-circle"></i> CSS3
              </p>
              <p>
                <i className="fas fa-circle"></i> Sass
              </p>
              <p>
                <i className="fas fa-circle"></i> React
              </p>
            </div>
          </div>
          <div className="project--col-2">
            <h4 className="project__title">Overview</h4>
            <p className="project__description">
              Simple portfolio site built by me using
              <span className="project__text--highlight"> React</span> and styled using
              <span className="project__text--highlight"> Sass</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
