import React, { useEffect } from "react";
import "./about.styles.css";
import { FcNext } from "react-icons/fc";
import Divider from "../../Divider";

import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function About({ about }) {
  const {
    title,
    contactUrl,
    description,
    happybgColor,
    media,
    mobileNo,
    summary,
    teamHappyDesc,
    teamHappyTitle,
    teamSummary,
    teamTitle,
    teamUrl,
    titleStrong,
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
          <div className="aboutTitlePage aboutWrapper">
            <div className="aboutTitle1">
              {documentToReactComponents(title)}
            </div>
            <div className="aboutTitle2">
              {documentToReactComponents(summary)}
            </div>
          </div>

          <div className="aboutBg">
            <img src={media.fields.file.url} alt="bg" />
          </div>

          <div className="aboutWrapper">
            <Divider color="red" padding="5px" height="10px" />
          </div>

          <div className="aboutSummary aboutWrapper">
            <div className="summaryTitle">
              <h2>{titleStrong}</h2>
            </div>
            <div className="summaryPara">
              {documentToReactComponents(description)}
            </div>
          </div>

          <div className="aboutTeam aboutWrapper">
            <div className="team1">
              <h2>{teamTitle}</h2>
            </div>
            <div className="team2">
              {documentToReactComponents(teamSummary)}
              <a href={teamUrl}>
                See open position <FcNext />
              </a>
            </div>
          </div>

          <div className="aboutAssit" style={{ backgroundColor: happybgColor }}>
            <div className="assist1 aboutWrapper">
              <h2>{teamHappyTitle}</h2>
              <p>{teamHappyDesc}</p>

              <hr style={{ marginTop: "2.5em" }} />

              <div className="AboutBtn">
                <button onClick={() => console.log(contactUrl)}>
                  Contact Us &nbsp; <FcNext />
                </button>

                <div>
                  Or call{" "}
                  <span
                    style={{ textDecoration: "underline", cursor: "pointer" }}
                  >
                    +91 {mobileNo}
                  </span>
                </div>
              </div>
            </div>
            <div className="assist2">
              <img src="./bg-about.jpeg" alt="bg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
