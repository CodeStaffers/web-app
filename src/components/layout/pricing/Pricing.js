import React, { useEffect } from "react";
import "./pricing.styles.css";
import { TiTick } from "react-icons/ti";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
function Pricing({ plan, price }) {
  const { subTitle, title } = price;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="pricingContainer">
      <div className="wrapper">
        <div className="pricingWrapper">
          <div className="pricingTitle">
            <h2>{title}</h2>
          </div>
          <div className="pricingSub">
            <h4>{subTitle}</h4>
          </div>

          <div className="threeDiv">
            {plan &&
              plan.map((item, index) => {
                const { priceTag, title } = item.fields;
                return (
                  <>
                    <div className="growth" key={index}>
                      <div className="divider1">
                        {documentToReactComponents(title)}
                      </div>
                      <div className="pricing__tag">
                        {priceTag &&
                          priceTag.map((tags, index) => {
                            const { tag } = tags.fields;
                            return (
                              <div key={index} className="tag__con">
                                <TiTick color={"white"} className="tick" />
                                <p>{tag}</p>
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  </>
                );
              })}
          </div>

          <div className="pricingBtn">
            <button className="pricingBtn1">Get a quote</button>
            <button className="pricingBtn2">i'm an agency</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
