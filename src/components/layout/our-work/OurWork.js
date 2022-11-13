import React, { useState, useEffect } from "react";
import { Button } from "../button/Button";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "./ourWork.styles.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function OurWork() {
  const [data, setData] = useState([]);

  const pageData = useSelector((state) => {
    return state.ourWork.ourWork;
  });

  const getPageData = async () => {
    const d = await pageData;
    setData(d);
  };

  useEffect(() => {
    window.scrollTo(0, 0, {
      behavior: "smooth",
    });
    getPageData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <section
        className="ourwork"
        style={{
          backgroundColor: data.background ? data.background : "white",
        }}
      >
        <div className="wrapper">
          <div className="ourwork-heading">
            {documentToReactComponents(data.heading ? data.heading : "")}
            <Link to={data.buttonLink ? data.buttonLink : ""}>
              <Button buttonSize="btn--large">
                {data.buttonText ? data.buttonText : ""}
              </Button>
            </Link>
          </div>
          <div className="rectangleWrapper">
            <div className="rectangle_ring">
              <img src="/image/ring.png" alt="ring" />
            </div>
            <div className="ourwork-imagebox">
              <img
                src={data.bannerImage ? data.bannerImage.fields.file.url : ""}
                alt="banner"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurWork;
