import React, { useState, useEffect } from "react";
import "./serviceDetail.css";
import { useParams } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { Button } from "../../button/Button";
import Testnomial from "../../testnomials/Testnomial";
import ServiceDetailHero from "../serviceDetailComp/ServiceDetailHero";
import ServiceDetailFeature from "../serviceDetailComp/ServiceDetailFeature";

function ServiceDetail({ serviceData, testnomial }) {
  const { id, shortTitle } = useParams();
  const [data, setData] = useState([]);

  useEffect(() => {
    const findDataById =
      serviceData && serviceData.filter((item) => id === item.sys.id);
    setData(findDataById);
    window.scrollTo(0, 0, {
      behavior: "smooth",
    });
  }, []);

  const { description, featureImage } = data[0] ? data[0].fields : "";

  return (
    <>
      <div className="sDetailContainer">
        {/* Description */}
        <div className="sDetailWrapper">
          <div className="sDetailItem">
            <div className="sDetailSummary">
              <h1>{shortTitle}</h1>
              {documentToReactComponents(description)}
            </div>
            <div className="sDetailBtn">
              <br />
              <Button buttonSize="btn--medium">Hi i am here</Button>
            </div>
          </div>

          <div className="sDetailImage">
            <img src={featureImage && featureImage.fields.file.url} alt="img" />
          </div>
        </div>
        {/* end */}

        <ServiceDetailHero />

        <ServiceDetailFeature />

        <Testnomial testnomial={testnomial} />
      </div>
    </>
  );
}

export default ServiceDetail;
