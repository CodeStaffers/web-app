import React from "react";
import "./service.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function Service({ page }) {
  const {
    business_strategy,
    business_summary,
    businessUrl,
    marketingReporting,
    marketingSummary,
    marketingUrl,
    websiteDev,
    websiteSummary,
    websiteUrl,
    other1,
    other1Summary,
    other1Url,
    other2,
    other2Summary,
    other2Url,
    other3,
    other3Summary,
    other3Url,
  } = page.serviceCard ? page.serviceCard.fields : "";

  return (
    <>
      <div className="service">
        <div className="serviseTitle">
          <h1>Ours Services</h1>
        </div>

        <div className="serviceCardWrapper">
          <div className="cardItem">
            <a href={businessUrl} className="service_link">
              <div className="serviceLogo">
                <img
                  src={business_strategy && business_strategy.fields.file.url}
                  alt="cardLogo"
                />
              </div>
              <div className="serviceSummary">
                {documentToReactComponents(business_summary)}
              </div>
            </a>
          </div>

          <div className="cardItem">
            <a href={marketingUrl} className="service_link">
              <div className="serviceLogo">
                <img
                  src={marketingReporting && marketingReporting.fields.file.url}
                  alt="cardLogo"
                />
              </div>
              <div className="serviceSummary">
                {documentToReactComponents(marketingSummary)}
              </div>
            </a>
          </div>
          <div className="cardItem">
            <a href={websiteUrl} className="service_link">
              <div className="serviceLogo">
                <img
                  src={websiteDev && websiteDev.fields.file.url}
                  alt="cardLogo"
                />
              </div>
              <div className="serviceSummary">
                {documentToReactComponents(websiteSummary)}
              </div>
            </a>
          </div>
          <div className="cardItem">
            <a href={other1Url} className="service_link">
              <div className="serviceLogo">
                <img src={other1 && other1.fields.file.url} alt="cardLogo" />
              </div>
              <div className="serviceSummary">
                {documentToReactComponents(other1Summary)}
              </div>
            </a>
          </div>
          <div className="cardItem">
            <a href={other2Url} className="service_link">
              <div className="serviceLogo">
                <img src={other2 && other2.fields.file.url} alt="cardLogo" />
              </div>
              <div className="serviceSummary">
                {documentToReactComponents(other2Summary)}
              </div>
            </a>
          </div>
          <div className="cardItem">
            <a href={other3Url} className="service_link">
              <div className="serviceLogo">
                <img src={other3 && other3.fields.file.url} alt="cardLogo" />
              </div>
              <div className="serviceSummary">
                {documentToReactComponents(other3Summary)}
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
