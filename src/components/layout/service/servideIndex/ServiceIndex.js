import React, { useEffect, useState } from "react";
import { Button } from "../../button/Button";
import "./serviceIndex.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useSelector } from "react-redux";

function ServiceIndex({ serviceIndexContent }) {
  const [data, setData] = useState([]);
  const pageData = useSelector((state) => {
    return state.serviceIndex.serviceIndex;
  });

  const getPageData = async () => {
    const d = await pageData;
    setData(d);
  };

  useEffect(() => {
    getPageData();
    // eslint-disable-next-line
  }, []);

  const { summary, media, btnUrl, titleBtn } = data;

  useEffect(() => {
    window.scrollTo(10, 0, {
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="service__index__container">
      <div className="wrapper">
        <div className="service__index__wrapper">
          <div className="serviceIndexContent">
            <div className="service_index_titile">
              {documentToReactComponents(summary)}
            </div>
            <div className="service__index__btn">
              <Button url={btnUrl}>{titleBtn}</Button>
            </div>
          </div>

          <div className="service__index__image">
            <img src={media && media.fields.file.url} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceIndex;
