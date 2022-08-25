import React from "react";
import "./funFact.css";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import CountUp from "react-countup";

function FunFact({ page }) {
  const { funFactAllReview, funFactReview, funFactTitle } = page;

  return (
    <>
      <div className="funFact">
        <div className="funFact_card">
          <div className="funFact_title">
            {documentToReactComponents(funFactTitle && funFactTitle)}
          </div>

          <div className="funFact_reviews">
            {funFactReview &&
              funFactReview.map((review, index) => {
                return (
                  <div className="funFact_review_items">
                    <div className="review_title">
                      <h1>
                        <CountUp end={review.ratSelf} duration={3} />
                        M+
                      </h1>
                    </div>
                    <div className="review_comments">
                      <p>{review.text}</p>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="funFact_all_review">
            <a
              href="#"
              style={{ color: funFactAllReview && funFactAllReview.color }}
            >
              {funFactAllReview && funFactAllReview.title}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default FunFact;
