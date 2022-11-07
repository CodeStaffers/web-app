import React from "react";
import "./pricing.css";
import { TiTick } from "react-icons/ti";
// TiTick

function Pricing() {
  return (
    <section className="pricingContainer">
      <div className="wrapper">
        <div className="pricingWrapper">
          <div className="pricingTitle">
            <h2>Monthly service plan</h2>
          </div>

          <div className="threeDiv">
            <div className="growth">
              <div className="divider1">
                <h3>$450/mo</h3>
                <h5>
                  <b>GROWTH</b>
                </h5>
                <p>
                  Hosting, Maintance, Support,Google, Analytics, & SEO Reporting
                </p>
              </div>
              <div className="pricing__tag">
                <div>
                  <TiTick color={"white"} className="tick" />
                  <p>Managed Hosting</p>
                </div>
                <div>
                  <TiTick color={"white"} className="tick" />

                  <p>SSL Implementation</p>
                </div>
                <div>
                  <TiTick color={"white"} className="tick" />
                  <p>Daily Site Backups</p>
                </div>
              </div>
            </div>

            <div className="bussiness">
              <div className="divider1">
                <h3>$175/mo</h3>
                <h5>
                  <b>BUSSINESS</b>
                </h5>
                <p>Hosting, Maintance, Support</p>
              </div>
              <div className="pricing__tag">
                <div>
                  <TiTick color={"white"} className="tick" />

                  <p>Managed Hosting</p>
                </div>
                <div>
                  <TiTick color={"white"} className="tick" />

                  <p>SSL Implementation</p>
                </div>
                <div>
                  <TiTick color={"white"} className="tick" />

                  <p>Daily Site Backups</p>
                </div>
              </div>
            </div>

            <div className="essentials">
              <div className="divider1">
                <h3>$65+/mo</h3>
                <h5>
                  <b>ESSENTIALS</b>
                </h5>
                <p>Hosting, Maintance Only</p>
              </div>
              <div className="pricing__tag">
                <div>
                  <TiTick color={"white"} className="tick" />

                  <p>Managed Hosting</p>
                </div>
                <div>
                  <TiTick color={"white"} className="tick" />

                  <p>SSL Implementation</p>
                </div>
                <div>
                  <TiTick color={"white"} className="tick" />

                  <p>Daily Site Backups</p>
                </div>
              </div>
            </div>
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
