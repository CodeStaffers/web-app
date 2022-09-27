import React, { useEffect, useState } from "react";
import "./heroSection.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { Button } from "../button/Button";
import { useSelector } from "react-redux";

function Section({ heroSection }) {
  const [data, setData] = useState([]);
  const pageData = useSelector((state) => {
    return state.heroSection.heroSection;
  });

  const getPageData = async () => {
    const d = await pageData;
    setData(d);
  };

  useEffect(() => {
    getPageData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <section className="section__body">
        <div className="wrapper">
          <div className="toggle_section">
            {data &&
              data.map((item, index) => {
                return (
                  <div
                    className="card_section"
                    key={index}
                    style={{
                      flexDirection: item.fields.direction
                        ? "row"
                        : "row-reverse",
                    }}
                  >
                    <div className="content_section__body">
                      <div className="content_tag">
                        {documentToReactComponents(item.fields.content)}
                      </div>
                      <div className="content_btn">
                        <Button cName={"btn--medium"}>
                          {item.fields.titleBtn}
                        </Button>

                        <a
                          href={item.fields.featureUrl}
                          className="content_see_all"
                          style={{ color: "black" }}
                        >
                          {item.fields.featureTitle}
                        </a>
                      </div>
                    </div>
                    <div className="section_image">
                      <img
                        src={
                          item.fields.contentImage &&
                          item.fields.contentImage.fields.file.url
                        }
                        alt="section_logo"
                      />
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

export default Section;
