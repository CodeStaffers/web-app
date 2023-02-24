import React, { useState } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Link } from "react-router-dom";
import { Button } from "../button/Button";

function ProjectCard({ item, urlTitle }) {
  const [model, setModel] = useState(false);

  const handleModel = () => {
    setModel(!model);
    console.log("handle");
  };

  const bodyStyle = {
    position: "absolute",
    width: "100vw",
    height: "100vh",
    background: "#2fff",
    zIndex: 100,
  };
  return (
    <>
      {model ? (
        <div className="ourProjectCard" onClick={handleModel}>
          <div className="ourProjectCardInner">
            <div className="ourProjectImage">
              <img src={item.fields.featureImage.fields.file.url} alt="" />
            </div>
            <div className="ourProjectSubtitle">
              {documentToReactComponents(item.fields.summary)}
            </div>

            <div className="ourWorkTags">
              {item.fields &&
                item.fields.tagSlug.map((tag, index) => {
                  const { slug, title } = tag ? tag.fields : "";

                  return (
                    <Button buttonSize="btn--medium" key={index}>
                      <Link
                        to={`/${slug}`}
                        state={{ item: item.fields }}
                        key={index}
                      >
                        {title}
                      </Link>
                    </Button>
                  );
                })}
            </div>
          </div>
        </div>
      ) : (
        <>
          <div style={bodyStyle}>
            <span
              style={{
                width: "50px",

                cursor: "pointer",
              }}
              onClick={() => handleModel(false)}
            >
              X
            </span>
            <div
              className="ourProjectCard"
              onClick={handleModel}
              style={{ margin: "0 auto" }}
            >
              <div className="ourProjectCardInner">
                <div className="ourProjectImage">
                  <img src={item.fields.featureImage.fields.file.url} alt="" />
                </div>
                <div className="ourProjectSubtitle">
                  {documentToReactComponents(item.fields.summary)}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ProjectCard;
