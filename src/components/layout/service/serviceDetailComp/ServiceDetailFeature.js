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
                <div className="sFeatureCard">
                  <div className="sFeatureImage">
                    <img src={item.fields.image.fields.file.url} alt="icon" />
                  </div>
                  <div className="sFeatureTitleSummary">
                    {documentToReactComponents(item.fields.content)}
                    {/* <h4>Use A/B testing to improve message</h4>
                    <p>
                      optimise user messages with subject line,content and
                      revenue contribution A/B testing.
                    </p> */}
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
