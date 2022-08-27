import React from "react";
import "./testnomial.css";
import "react-multi-carousel/lib/styles.css";
import TestnimialCard from "./TestnimialCard";

function Testnomial({ page }) {
  const {
    ratingImage1,
    ratingImage2,
    ratingImage3,
    authorImage1,
    authorImage2,
    authorImage3,
    summary1,
    summary2,
    summary3,
  } = page.testnomials ? page.testnomials.fields : "";

  return (
    <div className="testnomialWrapper">
      <div className="user_loveUs">
        <h1>User Love Us</h1>
      </div>

      <div className="testnomialCard">
        <TestnimialCard
          logo={ratingImage1}
          summary={summary1}
          author={authorImage1}
        />
        <TestnimialCard
          logo={ratingImage2}
          summary={summary2}
          author={authorImage2}
        />
        <TestnimialCard
          logo={ratingImage3}
          summary={summary3}
          author={authorImage3}
        />
      </div>
    </div>
  );
}

export default Testnomial;
