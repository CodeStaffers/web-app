import React from "react";
import { Link } from "react-router-dom";
function ServiceCard({ title, shortText, id, color, logo }) {
  title = title.replaceAll(" ", "-");

  return (
    <>
      <div className="cardItem">
        <Link
          to={`/services/${title}`}
          state={{ id: id }}
          className="service_link"
        >
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
            <p>{shortText}</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ServiceCard;
