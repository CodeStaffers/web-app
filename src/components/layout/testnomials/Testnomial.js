import React from "react";
import "./testnomial.css";

import TestnimialCard from "./TestnimialCard";
import Slider from "react-slick";

function Testnomial({ testnomial }) {
  // make
  const settings = {
    dots: true,
    infinite: true,
    className: "center",
    speed: 500,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 681,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  // end

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
