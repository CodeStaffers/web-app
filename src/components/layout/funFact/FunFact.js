import React from "react";
import "./funFact.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import CountUp from "react-countup";

function FunFact({ page }) {
  const {
    downlaodTitle,
    download,
    postiveReviewTitle,
    postiveCount,
    activeTitle,
    active,
    funFactTitle,
  } = page;

  return (
    <>
      <div className="funFact">
        <div className="funFact_card">
          <div className="funFact_title">
            {documentToReactComponents(funFactTitle && funFactTitle)}
          </div>

          <div className="funFact_reviews">
            <div className="funFact_review_items">
              <div className="review_title">
                <h1>
                  <CountUp end={download} duration={3} />
                  M+
                </h1>
              </div>
              <div className="review_comments">
                <p>{downlaodTitle}</p>
              </div>
            </div>

            <div className="funFact_review_items">
              <div className="review_title">
                <h1>
                  <CountUp end={active} duration={3} />
                  M+
                </h1>
              </div>
              <div className="review_comments">
                <p>{activeTitle}</p>
              </div>
            </div>
            <div className="funFact_review_items">
              <div className="review_title">
                <h1>
                  <CountUp end={postiveCount} duration={3} />
                  M+
                </h1>
              </div>
              <div className="review_comments">
                <p>{postiveReviewTitle}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FunFact;
