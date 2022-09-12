import React from "react";
import "./project.css";
import ProjectCard from "./ProjectCard";

function Project({ project }) {
  return (
    <div className="projectContainer">
      <div className="projectWrapper">
        <div className="projectTitle">
          <span>Our project</span>
          <h2>Some of our recent works</h2>
          <p>
            There are many variations of passages of Lorem Ipsum available,{" "}
            <br /> but the majority have suffered alteration.
          </p>
        </div>

        <div className="projectCardWrapper">
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
