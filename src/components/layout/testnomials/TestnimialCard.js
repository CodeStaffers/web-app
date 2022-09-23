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
          {/* <h4>Amazing</h4>

          <p>
            Thanks you very much for your random number generator i use it all
            the time. I have a monthly drawing on my site,so I use it to pick
            the two winners
            <br />
            <br />
            so,thank you i see you are visiting Georgia.Have a great time!
          </p> */}
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
