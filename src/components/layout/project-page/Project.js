import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import "./project.css";

function Project({ project }) {
  return (
    <>
      <section className="projectContainer">
        <div className="wrapper">
          <div className="projectTitle">
            <h1>{project.title}</h1>
          </div>

          <div className="projectDescription">
            {documentToReactComponents(project.description)}
          </div>
        </div>
      </section>
    </>
  );
}

export default Project;
