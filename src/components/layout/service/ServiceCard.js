import React from "react";
import { Link } from "react-router-dom";
function ServiceCard({ title, shortText, id, color, logo }) {
  let urlTitle = title.replace(/\s+|[,/]/g, "-");

  return (
    <>
      <div className="cardItem">
        <div className="innerCardItem">
          <Link
            to={`/service/${urlTitle}`}
            state={{ id: id, titlePage: title }}
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
              <h5>{title}</h5>
            </div>
            <div className="serviceSummary">
              <p>{shortText}</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ServiceCard;
