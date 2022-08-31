import React, { useState, useEffect } from "react";
import "./testnomial.css";

import Carousel from "./Carousel";

import TestnimialCard from "./TestnimialCard";

function Testnomial({ testnomial }) {
  const MobileView = 700;
  const TabletView = 1224;

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeHandler = () => {
      setWidth(window.innerWidth);
      console.log(window.innerWidth);
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  });

  const DesktopComponent = ({ no }) => {
    return (
      <Carousel show={no}>
        {/* <div className="testnomialCard"> */}
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
        {/* </div>{" "} */}
      </Carousel>
    );
  };
  const TabletComponent = ({ no }) => {
    return (
      <Carousel show={no}>
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
      </Carousel>
    );
  };
  const MobileComponent = ({ no }) => {
    return (
      <Carousel show={no}>
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
      </Carousel>
    );
  };

  return (
    <div className="testnomialWrapper">
      <div className="user_loveUs">
        <h1>User Love Us</h1>
      </div>

      {/* start */}

      <div
        style={{
          maxWidth: 1500,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: 64,
        }}
      >
        {width <= MobileView ? (
          <MobileComponent no={1} />
        ) : width >= MobileView && width <= TabletView ? (
          <TabletComponent no={2} />
        ) : (
          <DesktopComponent no={3} />
        )}
      </div>

      {/* end */}
    </div>
  );
}

export default Testnomial;
