import React from "react";
import "./content.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function Content({ page }) {
  return (
    <>
      <div className="content_section">
        <div className="content__title">
          {/* <h1>
            Creative Digital <span style={{ color: "tomato" }}>agency</span>
            <br />
            for mindful brands :)
          </h1> */}
          <h1>{documentToReactComponents(page.heading)}</h1>
          <h2>{page.name}</h2>
        </div>

        <div className="content_sub_title">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            <br />
            alias blanditiis
          </p>
        </div>

        <div className="start_project_content__btn">
          <button className="start__project__btn">
            Start a project &nbsp;
            <div className="btn_content_icon">
              <BsFillArrowRightCircleFill size={25} />
            </div>
          </button>
        </div>
      </div>
    </>
  );
}

export default Content;
