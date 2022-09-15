import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "./serviceHero.css";
function ServiceHeroHero({ summary, image, content }) {
  return (
    <>
      <section className="sHeroContainer">
        <div className="wrapper">
          <div className="sHeroCard">
            <div className="sHeroTitle">
              {documentToReactComponents(summary)}
            </div>
          </div>

          <div className="sHeroItem">
            <div className="sHeroImage">
              <img src={image && image.fields.file.url} alt="img" />
            </div>
            <div className="sHeroItemList">
              <div className="sListItem">
                {documentToReactComponents(content)}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ServiceHeroHero;
