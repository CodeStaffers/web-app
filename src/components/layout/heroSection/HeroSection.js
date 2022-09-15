import React from "react";
import "./heroSection.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { Button } from "../button/Button";

function Section({ heroSection }) {
  return (
    <>
      <section className="section__body">
        <div className="wrapper">
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
      </section>
    </>
  );
}

export default Section;
