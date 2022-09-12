import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";

function ServiceDetailFeature({ brandCard, title }) {
  return (
    <>
      <div className="sFeatureContainer">
        <div className="sFeatuteTitle">
          <h3>{title} </h3>
        </div>

        <div className="sFeatureWrapper">
          {brandCard &&
            brandCard.map((item, index) => {
              return (
                <div className="sFeatureCard" key={index}>
                  <div className="sFeatureImage">
                    <img src={item.fields.image.fields.file.url} alt="icon" />
                  </div>
                  <div className="sFeatureTitleSummary">
                    {documentToReactComponents(item.fields.content)}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default ServiceDetailFeature;
