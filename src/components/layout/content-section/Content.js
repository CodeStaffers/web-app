import React from "react";
import "./content.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Button } from "../button/Button";
function Content({ page }) {
  const { homeBtnUrl, homeBtn } = page;

  return (
    <>
      <section className="content_section">
        <div className="wrapper">
          <div className="content_section_title">
            <div className="content__title">
              {documentToReactComponents(page?.heading)}
            </div>

            <div className="content_sub_title">
              <p>{page?.name}</p>
            </div>

            <div className="start_project_content__div">
              <Button buttonSize="btn--large" url={homeBtnUrl}>
                {homeBtn} &nbsp;
                <div className="btn_content_icon">
                  <BsFillArrowRightCircleFill size={20} />
                </div>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Content;
