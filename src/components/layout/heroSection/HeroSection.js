import React from "react";
import "./heroSection.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Button } from "../button/Button";

function Section({ heroSection }) {
  console.log(heroSection);

  const {
    // btnUrl,
    content,
    contentImage,
    direction,
    featureTitle,
    featureUrl,
    // titleBtn,
  } = heroSection && heroSection[0].fields;

  return (
    <>
      <div className="section__body">
        <div className="toggle_section">
          <div
            className="card_section"
            style={{
              flexDirection: direction ? "row" : "row-reverse",
            }}
          >
            <div className="content_section__body">
              <div className="content_tag">
                {content && documentToReactComponents(content)}
              </div>
              <div className="content_btn">
                <Button cName={"hero_btn_try"}>Try It Free</Button>

                {/* <button
                  className="hero_btn_try"
                  style={{
                    backgroundColor: "maroon",
                    color: "white",
                  }}
                  onClick={() => (window.location.href = btnUrl)}
                >
                  {titleBtn && titleBtn}
                </button> */}
                <a
                  href={featureUrl}
                  className="content_see_all"
                  style={{ color: "black" }}
                >
                  {featureTitle && featureTitle}
                </a>
              </div>
            </div>
            <div className="section_image">
              <img
                src={contentImage && contentImage.fields.file.url}
                alt="section_logo"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
