import React, { useState, useEffect } from "react";
import "./mainFooter.css";
import { FcCallback, FcTreeStructure, FcMindMap } from "react-icons/fc";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BsFacebook, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function MainFooter() {
  const [data, setData] = useState([]);
  const pageData = useSelector((state) => {
    return state.footer.footer;
  });

  const getPageData = async () => {
    const d = await pageData;
    setData(d);
  };

  useEffect(() => {
    getPageData();
    // eslint-disable-next-line
  }, []);

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
  } = data;

  return (
    <>
      <div className="mainFooter">
        <div className="wrapper">
          <div className="mainFooter_nav">
            <div className="mainFooter_nav1">
              <div className="mainFooter_image">
                <NavLink to="/">
                  <img src={logo && logo.fields.file.url} alt="" />
                </NavLink>
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
                    <BsInstagram size={25} className="pinterestIcon" />
                  </a>
                </div>
                <div className="mainFooterIcon ">
                  <a href={linkdnUrl}>
                    <BsLinkedin size={25} className="linkdnIcon" />
                  </a>
                </div>
              </div>
            </div>
            {/* 
            <div className="mainFooterNav3">
              <div className="aboutUs">
                <div className="footerTitle">
                  <h4>About Us</h4>
                </div>
                <div className="footerList">
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
            </div> */}

            <div className="mainFooterNav4">
              <div className="service">
                <div className="footerTitle">
                  <h4>services</h4>
                </div>
                <div className="footerList">
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
                <div className="footerTitle">
                  <h4>Address</h4>
                </div>
                <div className="footerList">
                  <div className="contactFooter">
                    <FcCallback size={20} />
                    <p>{phone}</p>
                  </div>
                  <div className="contactFooter">
                    <FcTreeStructure size={20} />
                    <a href={website}>{website}</a>
                  </div>
                  <div className="contactFooter">
                    <FcMindMap size={20} />
                    <p>{address}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mainFooter_copyright">
            <p>
              Copyright © 2022 all rights reserved{" "}
              <strong>Elite Web Solutions</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainFooter;
