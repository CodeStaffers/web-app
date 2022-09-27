import React, { useState, useEffect } from "react";
import "./testnomial.css";
import { FaQuoteRight } from "react-icons/fa";

import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import TestnimialCard from "./TestnimialCard";
import { useSelector } from "react-redux";

function Testnomial({ testnomial }) {
  const [data, setData] = useState([]);
  const pageData = useSelector((state) => {
    return state.testinomial.testinomial;
  });

  const getPageData = async () => {
    const d = await pageData;
    setData(d);
  };

  useEffect(() => {
    getPageData();
    // eslint-disable-next-line
  }, []);

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
            {data &&
              data.map((item, index) => {
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
