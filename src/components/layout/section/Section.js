import React from "react";
import "./section.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function Section({ page }) {
  const {
    sectionBtn,
    sectionDirection,
    sectionFeature,
    sectionHome,
    sectionImage,
  } = page;

  return (
    <>
      <div className="section__body">
        <div className="toggle_section">
          <div
            className="card_section"
            style={{
              flexDirection: sectionDirection ? "row" : "row-reverse",
            }}
          >
            <div className="content_section__body">
              <div className="content_tag">
                {sectionHome && documentToReactComponents(sectionHome)}
              </div>
              <div className="content_btn">
                <button
                  className="btn_try"
                  style={{
                    backgroundColor: sectionBtn && sectionBtn.bgColor,
                    color: sectionBtn && sectionBtn.color,
                  }}
                >
                  {sectionBtn && sectionBtn.title}
                </button>
                <a
                  href="#"
                  className="content_see_all"
                  style={{ color: sectionFeature && sectionFeature.color }}
                >
                  {sectionFeature && sectionFeature.title}
                </a>
              </div>
            </div>
            <div className="section_image">
              <img
                src={sectionImage && sectionImage.fields.file.url}
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
