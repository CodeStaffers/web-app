import React from "react";
import { Button } from "../button/Button";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import "./ourWork.styles.css";
import { Link } from "react-router-dom";

function OurWork({ page }) {
  console.log(page);
  return (
    <>
      <div
        className="ourwork"
        style={{
          backgroundColor: page.background ? page.background : "white",
        }}
      >
        <div className="ourwork-heading">
          {documentToReactComponents(page.heading)}
          <Link to={page.buttonLink}>
            <Button buttonSize="btn--large">{page.buttonText}</Button>
          </Link>
        </div>
        <div className="ourwork-imagebox">
          <img src={page.bannerImage.fields.file.url} alt="banner" />
        </div>
      </div>
    </>
  );
}

export default OurWork;
