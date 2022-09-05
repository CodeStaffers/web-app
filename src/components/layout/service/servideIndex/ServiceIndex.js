import React from "react";
import { Button } from "../../button/Button";
import "./serviceIndex.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function ServiceIndex({ heroSection, serviceIndexContent }) {
  console.log(serviceIndexContent);

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
          {heroSection &&
            heroSection.map((item, index) => {
              return (
                <div
                  className="card_section"
                  key={index}
                  style={{
                    flexDirection: item.fields.direction
                      ? "row"
                      : "row-reverse",
                  }}
                >
                  <div className="content_section__body">
                    <div className="content_tag">
                      {documentToReactComponents(item.fields.content)}
                    </div>
                    <div className="content_btn">
                      <Button cName={"btn--medium"}>
                        {item.fields.titleBtn}
                      </Button>

                      <a
                        href={item.fields.featureUrl}
                        className="content_see_all"
                        style={{ color: "black" }}
                      >
                        {item.fields.featureTitle}
                      </a>
                    </div>
                  </div>
                  <div className="section_image">
                    <img
                      src={
                        item.fields.contentImage &&
                        item.fields.contentImage.fields.file.url
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
