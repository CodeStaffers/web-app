import React from "react";
import "./content.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function Content({ page }) {
  const { homeBtn, homeBtnBgColor, homeBtnUrl } = page;

  return (
    <>
      <div className="content_section">
        <div className="content__title">
          {/* <h1>
            Creative Digital <span style={{ color: "tomato" }}>agency</span>
            <br />
            for mindful brands :)
          </h1> */}
          <h1>{documentToReactComponents(page?.heading)}</h1>
        </div>

        <div className="content_sub_title">
          <p>{page?.name}</p>
        </div>

        <div className="start_project_content__div">
          <button
            className="start__project__btn"
            style={{
              backgroundColor: homeBtnBgColor,
              color: page.homeBtn && page.homeBtn.btnColor,
            }}
            onClick={() => (window.location.href = homeBtnUrl)}
          >
            {homeBtn}&nbsp;
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
