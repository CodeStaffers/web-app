import React from "react";
import "./project.css";

function Project() {
  return (
    <div className="project__container">
      <div className="project__wrapper">
        <div className="our__project">
          <span className="our__project__subtitle">Our project</span>
        </div>
        <div className="our__project__title">
          <h2>Some of our Recent Works</h2>
        </div>
        <div className="project__summary">
          <p>
            There are many variations of passages of Lorem Ipsum available,{" "}
            <br /> but the majority have suffered alteration.
          </p>
        </div>

        <div className="project__card__wrapper">
          <div className="project__card">
            <div className="project__image">
              <img
                src="http://imroz.rainbowit.net/assets/images/portfolio/portfolio-5.jpg"
                alt="project"
              />
            </div>

            <div className="project__card__title__subtitle">
              <div className="project__card__title">
                <p>Development</p>
                <h1>Web Design</h1>
              </div>
              <div className="project__card__summary">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
                  culpa.
                </p>
              </div>
            </div>
          </div>
          <div className="project__card">
            <div className="project__image">
              <img
                src="http://imroz.rainbowit.net/assets/images/portfolio/portfolio-6.jpg"
                alt="project"
              />
            </div>

            <div className="project__card__title__subtitle">
              <div className="project__card__title">
                <p>Development</p>
                <h1>Web Design</h1>
              </div>
              <div className="project__card__summary">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
                  culpa.
                </p>
              </div>
            </div>
          </div>
          <div className="project__card">
            <div className="project__image">
              <img
                src="http://imroz.rainbowit.net/assets/images/portfolio/portfolio-8.jpg"
                alt="project"
              />
            </div>

            <div className="project__card__title__subtitle">
              <div className="project__card__title">
                <p>Development</p>
                <h1>Web Design</h1>
              </div>
              <div className="project__card__summary">
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum,
                  culpa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
