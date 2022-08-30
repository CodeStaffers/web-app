import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function ServiceCard({ title, summary, url, color, logo }) {
  return (
    <>
      <div className="cardItem">
        <a href={url} className="service_link">
          <div className="serviceLogo">
            <img
              style={{ color: color }}
              src={logo && logo.fields.file.url}
              alt="cardLogo"
            />
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
