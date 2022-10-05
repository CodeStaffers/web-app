import React, { useEffect, useState } from "react";
import "./content.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Button } from "../button/Button";
import { useSelector } from "react-redux";

function Content({ page }) {
  const [data, setData] = useState([]);
  const pageData = useSelector((state) => {
    return state.page.page;
  });

  const getPageData = async () => {
    const d = await pageData;
    setData(d);
  };

  useEffect(() => {
    getPageData();
    // eslint-disable-next-line
  }, []);

  const { homeBtnUrl, homeBtn, heading } = data;

  return (
    <>
      <section className="content_section">
        <div className="wrapper content__div">
          <div id="content_img1">
            <img src="/icon/php.png" alt="" />
          </div>
          <div id="content_img2">
            <img src="/icon/html.png" alt="" />
          </div>
          <div id="content_img3">
            <img src="/icon/css.png" alt="" />
          </div>
          <div id="content_img4">
            <img src="/icon/js.png" alt="" />
          </div>

          <div className="content_section_title">
            <div className="content__title">
              {documentToReactComponents(heading)}
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
