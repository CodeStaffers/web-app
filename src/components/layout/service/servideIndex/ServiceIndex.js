import React, { useEffect, useState } from "react";
import { Button } from "../../button/Button";
import "./serviceIndex.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useSelector } from "react-redux";

function ServiceIndex() {
  const [data, setData] = useState([]);
  const pageData = useSelector((state) => {
    return state.serviceIndex.serviceIndex;
  });

  const getPageData = async () => {
    const d = await pageData;
    setData(d);
  };

  useEffect(() => {
    window.scrollTo(0, 0, {
      behavior: "smooth",
    });

    getPageData();
    // eslint-disable-next-line
  }, []);
  const { summary, btnUrl, titleBtn } = data;

  // click method

  return (
    <section className="service__index__container">
      <div className="wrapper">
        <div className="service__index__wrapper">
          <div className="serviceIndexContent">
            <div className="service_index_titile">
              {documentToReactComponents(summary)}
            </div>
            <div className="service__index__btn">
              <Button url={btnUrl} onClick={btnUrl}>
                <a href={btnUrl} target="_blank" rel="noreferrer">
                  {" "}
                  {titleBtn}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServiceIndex;
