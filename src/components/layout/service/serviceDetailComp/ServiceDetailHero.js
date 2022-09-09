import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
function ServiceHeroHero({ summary, image, content }) {
  return (
    <>
      <div className="sHeroContainer">
        <div className="sHeroCard">
          <div className="sHeroTitle">
            {documentToReactComponents(summary)}
            {/* <h3>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, ex.
            </h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
              vel mollitia accusantium eos illo architecto ab exercitationem
              sequi neque nihil? Lorem ipsum, dolor sit amet consectetur
              adipisicing elit. Suscipit vel mollitia accusantium eos illo
            </p> */}
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
    </>
  );
}

export default ServiceHeroHero;
