import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function ServiceCard({ title, logo, summary, url }) {
  return (
    <>
      <div className="cardItem">
        <a href={url} className="service_link">
          <div className="serviceLogo">
            <img src={logo && logo.fields.file.url} alt="cardLogo" />
          </div>
          <div className="serviceCardTitle" style={{ color: "black" }}>
            <h3>{title}</h3>
          </div>
          <div className="serviceSummary">
            {documentToReactComponents(summary)}
          </div>
        </a>
      </div>
    </>
  );
}

export default ServiceCard;
