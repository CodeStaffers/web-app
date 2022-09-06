import React from "react";
import { Link } from "react-router-dom";
function ServiceCard({ title, shortDesc, id, color, logo }) {
  return (
    <>
      <div className="cardItem">
        <Link to={`/service/detail/${id}/${title}`} className="service_link">
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
            <p>{shortDesc}</p>
          </div>
        </Link>
      </div>
    </>
  );
}

export default ServiceCard;
