import React from "react";
import { Button } from "../../button/Button";
import "./serviceIndex.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "react-router-dom";
function ServiceIndex({ serviceData, serviceIndexContent }) {
  const { summary, media, btnUrl, titleBtn } = serviceIndexContent;
  return (
    <div className="service__index__container">
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

      <div className="serviceIndexSection">
        <div className="toggle_section">
          {serviceData &&
            serviceData.map((item, index) => {
              return (
                <div
                  className="service_index_card_section"
                  key={index}
                  style={{
                    flexDirection: item.fields.direction
                      ? "row"
                      : "row-reverse",
                  }}
                >
                  <div className="service_index_content_section__body">
                    <div className="service_index_content_tag">
                      <h1>{item.fields.title}</h1>
                      {documentToReactComponents(item.fields.description)}
                    </div>
                    <div className="service_index_content_btn">
                      <Link
                        to={`/service/detail/${item.sys.id}/${item.fields.title}`}
                      >
                        <Button cName={"btn--medium"}>Show more</Button>
                      </Link>
                    </div>
                  </div>
                  <div className="service_index_section_image">
                    <img
                      src={
                        item.fields.featureImage &&
                        item.fields.featureImage.fields.file.url
                      }
                      alt="section_logo"
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default ServiceIndex;
