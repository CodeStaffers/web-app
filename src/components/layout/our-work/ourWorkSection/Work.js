import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import React from "react";
import { Link } from "react-router-dom";
import "./ourWork.style.css";

function Work({ page }) {
  const { ourWorkSectionTitle, ourWorkSection } = page;

  return (
    <>
      <section className="workSection">
        <div className="wrapper">
          <div className="ourWorkSectionTitle">
            <span>Our work</span>
            <h2>{ourWorkSectionTitle}</h2>
          </div>

          <div className="ourWorkSectionWrapper">
            {ourWorkSection &&
              ourWorkSection.map((item, index) => {
                return (
                  <div className="ourWorkSectionCard" key={index}>
                    <div>
                      <Link to={item.fields.url}>
                        <div className="ourWorkSectionImage">
                          <img
                            src={item.fields.featureImage.fields.file.url}
                            alt=""
                          />
                        </div>
                        <div className="ourWorkSectionSubtitle">
                          {documentToReactComponents(item.fields.summary)}
                        </div>
                      </Link>
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

export default Work;
