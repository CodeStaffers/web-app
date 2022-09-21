import React from "react";
import { Button } from "../button/Button";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "./ourWork.styles.css";
import { Link } from "react-router-dom";

function OurWork({ page }) {
  return (
    <>
      <section
        className="ourwork"
        style={{
          backgroundColor: page.background ? page.background : "white",
        }}
      >
        <div className="wrapper">
          <div className="ourwork-heading">
            {documentToReactComponents(page.heading)}
            <Link to={page.buttonLink}>
              <Button buttonSize="btn--large">{page.buttonText}</Button>
            </Link>
          </div>
          <div className="rectangleWrapper">
            <div className="rectangle_ring">
              <img src="/image/ring.png" alt="ring" />
            </div>
            <div className="ourwork-imagebox">
              <img src={page.bannerImage.fields.file.url} alt="banner" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default OurWork;
