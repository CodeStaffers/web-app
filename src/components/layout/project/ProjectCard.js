import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function ProjectCard({ title, subtitle, summary, image }) {
  return (
    <>
      <div className="project__card">
        <div className="project__image">
          <img src={image} alt="project" />
        </div>

        <div className="project__card__title__subtitle">
          <div className="project__card__title">
            <p>{subtitle}</p>
            <h1>{title}</h1>
          </div>
          <div className="project__card__summary">
            {documentToReactComponents(summary)}
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectCard;
