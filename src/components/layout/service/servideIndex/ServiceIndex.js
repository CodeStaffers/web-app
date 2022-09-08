import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../button/Button";
import "./serviceIndex.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import ReactMarkdown from "react-markdown";

function ServiceIndex({ serviceData, serviceIndexContent }) {
  console.log(serviceData);
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
                      <ReactMarkdown escapeHtml={false}>
                        {item.fields.shortDesc}
                      </ReactMarkdown>
                    </div>
                    <div className="service_index_content_btn">
                      <Link
                        to={`/services/${item.fields.title.replaceAll(
                          " ",
                          "-"
                        )}`}
                        state={{ id: item.sys.id }}
                      >
                        <Button cName={"btn--medium"}>Read more</Button>
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
