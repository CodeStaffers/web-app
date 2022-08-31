import React from "react";
import "./content.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Button } from "../button/Button";
function Content({ page }) {
  const { homeBtnUrl } = page;

  return (
    <>
      <div className="content_section">
        <div className="content__title">
          {documentToReactComponents(page?.heading)}
        </div>

        <div className="content_sub_title">
          <p>{page?.name}</p>
        </div>

        <div className="start_project_content__div">
          <Button buttonStyle={"btn--primary"} url={homeBtnUrl}>
            Start a project &nbsp;
            <div className="btn_content_icon">
              <BsFillArrowRightCircleFill size={25} />
            </div>
          </Button>

          {/* <button
            className="start__project__btn"
            style={{
              backgroundColor: homeBtnBgColor,
              color: page.homeBtn && page.homeBtn.btnColor,
            }}
            onClick={() => (window.location.href = homeBtnUrl)}
          >
            {homeBtn}
          </button> */}
        </div>
      </div>
    </>
  );
}

export default Content;
