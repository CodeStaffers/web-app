import React from "react";
import "./project.css";
import ProjectCard from "./ProjectCard";

function Project({ project }) {
  return (
    <div className="project__container">
      <div className="project__wrapper">
        <div className="our__project">
          <span className="our__project__subtitle">Our project</span>
        </div>
        <div className="our__project__title">
          <h2>Some of our recent works</h2>
        </div>

        <div className="project__summary">
          <p>
            There are many variations of passages of Lorem Ipsum available,{" "}
            <br /> but the majority have suffered alteration.
          </p>
        </div>

        <div className="project__card__wrapper">
          {project &&
            project.map((item, index) => {
              const { title, subTitle, summary, media } = item.fields;

              return (
                <ProjectCard
                  key={index}
                  title={title}
                  subtitle={subTitle}
                  summary={summary}
                  media={media}
                  image={media.fields.file.url}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default Project;
