import React, { useState, useEffect } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import "./webUser.css";
import { useSelector } from "react-redux";

function WebUser({ topUser }) {
  const [data, setData] = useState([]);
  const pageData = useSelector((state) => {
    return state.brand.brand;
  });

  const getPageData = async () => {
    const d = await pageData;
    console.log(d);
    setData(d);
  };

  useEffect(() => {
    getPageData();
    // eslint-disable-next-line
  }, []);

  const { title, media } = data;

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
