import React, { useState, useEffect } from "react";
import "./serviceDetail.css";
import { useLocation } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { Button } from "../../button/Button";
import Testnomial from "../../testnomials/Testnomial";
import ServiceDetailHero from "../serviceDetailComp/ServiceDetailHero";
import ServiceDetailFeature from "../serviceDetailComp/ServiceDetailFeature";

function ServiceDetail({ serviceData, testnomial, serviceDetailPage }) {
  const location = useLocation();
  const { id, titlePage } = location.state;
  const [data, setData] = useState([]);

  console.log(serviceDetailPage);

  const { brandCard, content, image, summary, title } = serviceDetailPage;

  useEffect(() => {
    const findDataById =
      serviceData && serviceData.filter((item) => id === item.sys.id);
    setData(findDataById);
    window.scrollTo(0, 0, {
      behavior: "smooth",
    });
    // eslint-disable-next-line
  }, []);

  const { description, featureImage } = data[0] ? data[0].fields : "";

  return (
    <>
      <div className="sDetailContainer">
        {/* Description */}
        <div className="sDetailWrapper">
          <div className="sDetailItem">
            <div className="sDetailSummary">
              <h1>{titlePage}</h1>
              {documentToReactComponents(description)}
            </div>
            <div className="sDetailBtn">
              <br />
              <Button buttonSize="btn--medium" btnInline="btn-inline">
                Hi i am here
              </Button>
            </div>
          </div>

          <div className="sDetailImage">
            <img src={featureImage && featureImage.fields.file.url} alt="img" />
          </div>
        </div>
        {/* end */}

        <ServiceDetailHero summary={summary} image={image} content={content} />

        <ServiceDetailFeature brandCard={brandCard} title={title} />

        <Testnomial testnomial={testnomial} />
      </div>
    </>
  );
}

export default ServiceDetail;
