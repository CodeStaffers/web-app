import React from "react";
import "./testnomial.css";
import { FaQuoteRight } from "react-icons/fa";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import TestnimialCard from "./TestnimialCard";

function Testnomial({ testnomial }) {
  console.log(testnomial);

  return (
    <>
      <section>
        <div className="wrapper testnomialContainer">
          <div className="testnomialTitleContainer">
            <div className="testnomialTitle">
              <h2>What they say about us</h2>
              <p>Our beloved customer testnomial about our service</p>
            </div>
            <div className="">
              <FaQuoteRight className="testnomialQoute" />
            </div>
          </div>

          <div className="testnomialCardWrapper">
            {testnomial &&
              testnomial.map((item, index) => {
                return (
                  <TestnimialCard
                    key={index}
                    content={item.fields.content}
                    authorName={item.fields.authorName}
                    authorStatus={item.fields.authorStatus}
                    author={item.fields.author}
                  />
                );
              })}
          </div>

          <div className="testnomialArrowBtn">
            <BsArrowLeftShort className="leftArrow" />
            <BsArrowRightShort className="leftArrow" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Testnomial;
