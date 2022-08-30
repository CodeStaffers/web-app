import React from "react";
import "./testnomial.css";
import { settings } from "./responsiveCoursel";
import TestnimialCard from "./TestnimialCard";
import Slider from "react-slick";

function Testnomial({ testnomial }) {
  return (
    <div className="testnomialWrapper">
      <div className="user_loveUs">
        <h1>User Love Us</h1>
      </div>

      <Slider {...settings} className="testnomialCard">
        {testnomial &&
          testnomial.map((item, index) => {
            return (
              <TestnimialCard
                key={index}
                logo={item.fields.rating}
                summary={item.fields.content}
                author={item.fields.author}
              />
            );
          })}
      </Slider>

      {/* <div className="testnomialCard">
        {testnomial &&
          testnomial.map((item, index) => {
            return (
              <TestnimialCard
                key={index}
                logo={item.fields.rating}
                summary={item.fields.content}
                author={item.fields.author}
              />
            );
          })}
      </div> */}
    </div>
  );
}

export default Testnomial;
