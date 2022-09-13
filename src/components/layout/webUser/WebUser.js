import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import "./webUser.css";
function WebUser({ topUser }) {
  console.log(topUser);

  const { title, media } = topUser;

  return (
    <>
      <div className="webUserContainer">
        <div className="webUserTitle">
          <span>Top Client</span>
          {documentToReactComponents(title)}
        </div>

        <div className="webUserComp">
          {media &&
            media.map((item, index) => {
              return <img src={item.fields.file.url} alt="comp" key={index} />;
            })}
        </div>
      </div>
    </>
  );
}

export default WebUser;
