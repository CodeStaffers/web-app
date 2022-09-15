import React, { useState, useEffect } from "react";
import "./serviceDetail.css";
import { useLocation } from "react-router-dom";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { Button } from "../../button/Button";

function ServiceDetail({ serviceData }) {
  const location = useLocation();
  const { id, titlePage } = location.state;
  const [data, setData] = useState([]);

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
    </>
  );
}

export default ServiceDetail;
