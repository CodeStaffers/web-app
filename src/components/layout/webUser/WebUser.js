import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import "./webUser.css";
function WebUser({ topUser }) {
  const { title, media } = topUser;

  return (
    <>
      <section className="webUserContainer">
        <div className="wrapper">
          <div className="webUserWrapper">
            <div className="webUserTitle">
              <span>Top Client</span>
              {documentToReactComponents(title)}
            </div>

            <div className="webUserComp">
              {media &&
                media.map((item, index) => {
                  return (
                    <img src={item.fields.file.url} alt="comp" key={index} />
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WebUser;
