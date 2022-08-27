import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function TestnimialCard({ logo, summary, author }) {
  return (
    <>
      <div className="testnomialCardItems">
        <div className="star_image">
          <img src={logo && logo.fields.file.url} alt="rating" />
        </div>
        <div className="testnomialSummary">
          {documentToReactComponents(summary)}{" "}
        </div>

        <div className="testnomialAuthor">
          <img src={author && author.fields.file.url} alt="author" />
        </div>
      </div>
    </>
  );
}

export default TestnimialCard;
