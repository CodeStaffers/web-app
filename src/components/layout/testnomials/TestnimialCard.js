import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { FaQuoteRight } from "react-icons/fa";
function TestnimialCard({ content, authorName, authorStatus, author }) {
  return (
    <>
      <div className="tesnomialCard">
        <div className="tesnomialContent">
          <FaQuoteRight className="testnomialQoute2" />
          {documentToReactComponents(content)}
        </div>
        <div className="testnomialuserDetail">
          <div className="testnomialImage">
            <img src={author.fields.file.url} alt="logo" />
          </div>
          <div className="testnomialUser">
            <h6>{authorName}</h6>
            <p>{authorStatus}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestnimialCard;
