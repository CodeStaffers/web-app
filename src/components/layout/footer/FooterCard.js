import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function FooterCard({ logo, content, url, arrow, className, arrowClass }) {
  return (
    <>
      <div
        className={`right__design right_visual ${className} `}
        onClick={() => (window.location.href = url)}
      >
        <div className="right__image ">
          <img src={logo && logo.fields.file.url} alt="" />
        </div>
        <div className="right__desc">{documentToReactComponents(content)}</div>

        <div className={`right__arrow ${arrowClass}`}>
          <span>{arrow}</span>
        </div>
      </div>
    </>
  );
}

export default FooterCard;
