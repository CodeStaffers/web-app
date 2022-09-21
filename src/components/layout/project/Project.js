import React from "react";
import "./project.css";
import ProjectCard from "./ProjectCard";

function Project({ project }) {
  return (
    <section className="projectContainer">
      <div className="wrapper">
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
              project.slice(3).map((item, index) => {
                let urlTitle = item.fields.title.replace(/\s+|[,/]/g, "-");
                return (
                  <ProjectCard item={item} urlTitle={urlTitle} key={index} />
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
