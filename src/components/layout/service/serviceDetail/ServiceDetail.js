import React, { useState, useEffect } from "react";
import "./serviceDetail.css";
import { useLocation } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { useSelector } from "react-redux";
import ServiceDetailHero from "../serviceDetailComp/ServiceDetailHero";

import ServiceDetailFeature from "../serviceDetailComp/ServiceDetailFeature";
import { Button } from "../../button/Button";

function ServiceDetail({ serviceData }) {
  const location = useLocation();

  // var { id, titlePage } = location.state;

  let { id, titlePage } =
    location.state === null
      ? JSON.parse(localStorage.getItem("data"))
      : location.state;
  // console.log(location.state);

  const [data, setData] = useState([]);
  const pageData = useSelector((state) => {
    return state.servicePage.servicePage;
  });

  const getPageData = async () => {
    const d = await pageData;
    // console.log(d);
    setData(d);
  };

  useEffect(() => {
    window.scrollTo(0, 0, {
      behavior: "smooth",
    });
    getPageData();
    localStorage.setItem(
      "data",
      JSON.stringify({
        id: id,
        titlePage: titlePage,
      })
    );
    // eslint-disable-next-line
  }, []);

  const findDataById =
    data && data.filter((item) => id === item.fields.uniqueField);

  const {
    description,
    featureImage,
    relatedInoformationCard,
    relatedImage,
    relatedSummary,
    relatedContent,
    relatedTitle,
  } = findDataById[0] ? findDataById[0].fields : "";

  return (
    <>
      <section className="sDetailContainer">
        <div className="wrapper">
          <div className="sDetailWrapper">
            <div className="sDetailItem">
              <div className="sDetailSummary">
                <h2>{titlePage}</h2>
                {documentToReactComponents(description)}
              </div>
              <div className="sDetailBtn">
                <br />
                <Button buttonSize="btn--medium" btnInline="btn-inline">
                  go to details
                </Button>
              </div>
            </div>

            <div className="sDetailImage">
              <img
                src={featureImage && featureImage.fields.file.url}
                alt="img"
              />
            </div>
          </div>
        </div>
      </section>
      (
      <ServiceDetailHero
        summary={relatedSummary}
        image={relatedImage}
        content={relatedContent}
      />
      <ServiceDetailFeature
        data={relatedInoformationCard}
        title={relatedTitle}
      />
    </>
  );
}

export default ServiceDetail;
