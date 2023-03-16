import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../button/Button";
import "./serviceIndexSection.css";
import ReactMarkdown from "react-markdown";
import { useSelector } from "react-redux";

function ServiceIndex() {
  const [data, setData] = useState([]);
  const pageData = useSelector((state) => {
    return state.serviceList.serviceList;
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
    <section className="service__index__section__container">
      <div className="wrapper">
        <div className="serviceIndexSection">
          <div className="toggle_section">
            {data &&
              data.map((item, index) => {
                let urlTitle = item.fields.title.replace(/\s+|[,/]/g, "-");
                // item.fields.direction
                // index % 2 !== 1
                return (
                  <div
                    className="service_index_card_section"
                    key={index}
                    style={{
                      flexDirection: index % 2 !== 1 ? "row" : "row-reverse",
                    }}
                  >
                    <div className="service_index_content_section__body">
                      <div className="service_index_content_tag">
                        <ReactMarkdown escapeHtml={false}>
                          {item.fields.shortDesc}
                        </ReactMarkdown>
                      </div>
                      <div className="service_index_content_btn">
                        <Button
                          buttonSize="btn--medium"
                          // url={`/services/${urlTitle}`}
                        >
                          <Link to={`/services/${urlTitle}`}>read more</Link>
                        </Button>
                      </div>
                    </div>
                    <div className="service_index_section_image">
                      <img
                        src={
                          item.fields.featureImage &&
                          item.fields.featureImage.fields.file.url
                        }
                        alt="section_logo"
                      />
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceIndex;
