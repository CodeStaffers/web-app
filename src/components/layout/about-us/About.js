/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from "react";
import "./about.styles.css";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function About({ about }) {
  const {
    title,
    summary,
    sectionTitle,
    sectionSummary,
    rightImage,
    media,
    leftTitle,
    leftSummary,
  } = about;
  useEffect(() => {
    window.scrollTo(0, 0, {
      behavior: "smooth",
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <section className="aboutSection about_container ">
        <div className="wrapper aboutWrapperDoc">
          <div className="aboutTitleDiv">
            <div className="aboutTitle">
              <h1>{title}</h1>
            </div>

            <div className="aboutSections">
              <div className="aboutImages">
                <img
                  src={media.fields && media.fields.file.url}
                  alt="image2"
                  loading="lazy"
                />
              </div>
              <div className="aboutContent">
                <p>{documentToReactComponents(summary)}</p>
              </div>
            </div>
          </div>
          <div className="aboutSecondSection">
            <div className="aboutSecTitle">
              <h2>{sectionTitle}</h2>
              <p>{documentToReactComponents(sectionSummary)}</p>
            </div>

            <div className="aboutSectionWrapper">
              <div className="right">
                <div className="aboutRightImage">
                  <img src={rightImage.fields.file.url} alt="image1" />
                </div>
              </div>
              <div className="left">
                <div>
                  <h4>{leftTitle}</h4>
                </div>
                <div>
                  <p>{documentToReactComponents(leftSummary)}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
