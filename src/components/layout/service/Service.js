import React from "react";
import "./service.css";
import ServiceCard from "./ServiceCard";

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
          <ServiceCard
            logo={business_strategy}
            summary={business_summary}
            url={businessUrl}
          />
          <ServiceCard
            logo={marketingReporting}
            summary={marketingSummary}
            url={marketingUrl}
          />
          <ServiceCard
            logo={websiteDev}
            summary={websiteSummary}
            url={websiteUrl}
          />
          <ServiceCard logo={other1} summary={other1Summary} url={other1Url} />
          <ServiceCard logo={other2} summary={other2Summary} url={other2Url} />
          <ServiceCard logo={other3} summary={other3Summary} url={other3Url} />
        </div>
      </div>
    </>
  );
}

export default Service;
