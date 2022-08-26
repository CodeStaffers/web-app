import React from "react";
import "./mainFooter.css";
import { FcCallback, FcTreeStructure, FcMindMap } from "react-icons/fc";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BsFacebook, BsTwitter, BsPinterest, BsLinkedin } from "react-icons/bs";

function MainFooter({ page }) {
  const {
    logo,
    summary,
    facebookUrl,
    linkdnUrl,
    pinterestUrl,
    twitterUrl,
    apps,
    aboutUs,
    service,
    phone,
    address,
    website,
  } = page.mainFooter ? page.mainFooter.fields : "";

  return (
    <>
      <div className="mainFooter">
        <div className="mainFooter_nav">
          <div className="mainFooter_nav1">
            <div className="mainFooter_image">
              <img src={logo && logo.fields.file.url} alt="" />
            </div>

            <div
              className="mainFooter_content"
              style={{ color: "black", fontWeight: "bold" }}
            >
              {documentToReactComponents(summary)}
            </div>

            <div className="mainFooter_icon">
              <div className="mainFooterIcon ">
                <a href={facebookUrl}>
                  <BsFacebook size={25} className="faceBookIcon" />
                </a>
              </div>
              <div className="mainFooterIcon ">
                <a href={twitterUrl}>
                  <BsTwitter size={25} className="twitterIcon" />
                </a>
              </div>
              <div className="mainFooterIcon ">
                <a href={pinterestUrl}>
                  <BsPinterest size={25} className="pinterestIcon" />
                </a>
              </div>
              <div className="mainFooterIcon ">
                <a href={linkdnUrl}>
                  <BsLinkedin size={25} className="linkdnIcon" />
                </a>
              </div>
            </div>
          </div>

          <div className="mainFooterNav2">
            <div className="apps">
              <div className="appTitle">
                <h1>Apps</h1>
              </div>
              <div className="appList">
                {apps &&
                  apps.apps.map((item, index) => {
                    return (
                      <p key={index}>
                        <a
                          className="mainFooter_nav_hover"
                          href={item.url}
                          style={{
                            color: apps.color,
                            fontWeight: "500",
                            cursor: "pointer",
                            textDecoration: "none",
                          }}
                        >
                          {item.text}
                        </a>
                      </p>
                    );
                  })}
              </div>
            </div>
          </div>

          <div className="mainFooterNav3">
            <div className="aboutUs">
              <div className="aboutTitle">
                <h1>About Us</h1>
              </div>
              <div className="aboutList">
                {aboutUs &&
                  aboutUs.about.map((item, index) => {
                    return (
                      <p key={index}>
                        <a
                          className="mainFooter_nav_hover"
                          href={item.url}
                          style={{
                            color: apps.color,
                            fontWeight: "500",
                            cursor: "pointer",
                            textDecoration: "none",
                          }}
                        >
                          {item.text}
                        </a>
                      </p>
                    );
                  })}
              </div>
            </div>
          </div>

          <div className="mainFooterNav4">
            <div className="service">
              <div className="serviceTitle">
                <h1>service</h1>
              </div>
              <div className="serviceList">
                {service &&
                  service.service.map((item, index) => {
                    return (
                      <p key={index}>
                        <a
                          className="mainFooter_nav_hover"
                          href={item.url}
                          style={{
                            color: apps.color,
                            fontWeight: "500",
                            cursor: "pointer",
                            textDecoration: "none",
                          }}
                        >
                          {item.text}
                        </a>
                      </p>
                    );
                  })}
              </div>
            </div>
          </div>

          <div className="mainFooterNav5">
            <div className="address">
              <div className="addressTitle">
                <h1>Address</h1>
              </div>
              <div className="addressList">
                <div className="contactNumber">
                  <FcCallback size={20} />
                  <p>+91 {phone}</p>
                </div>
                <div className="website">
                  <FcTreeStructure size={20} />
                  <a href={website} style={{ color: "black" }}>
                    {website}
                  </a>
                </div>
                <div className="locationUrl">
                  <FcMindMap size={20} />
                  <p>{address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainFooter;
