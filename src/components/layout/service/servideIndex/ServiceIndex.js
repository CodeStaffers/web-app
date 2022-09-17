import React, { useEffect } from "react";
import { Button } from "../../button/Button";
import "./serviceIndex.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function ServiceIndex({ serviceIndexContent }) {
  const { summary, media, btnUrl, titleBtn } = serviceIndexContent;

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
