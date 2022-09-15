import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function ProjectCard({ title, subtitle, summary, image }) {
  return (
    <>
      <div className="projectCard">
        <div className="projectImage">
          <img src={image} alt="project" />
        </div>

        <div className="projectSummary">
          <p>{subtitle}</p>
          <h3>{title}</h3>
          <div className="proContent">{documentToReactComponents(summary)}</div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
