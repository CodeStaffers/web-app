import React, { useState, useEffect } from "react";
import "./testnomial.css";
import Carousel from "./Carousel";

import TestnimialCard from "./TestnimialCard";

function Testnomial({ testnomial }) {
  const MobileView = 600;
  const TabletView = 960;

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const resizeHandler = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  });

  const DesktopComponent = ({ no }) => {
    return (
      <Carousel show={no} space={3}>
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

  const TabletComponent = ({ no }) => {
    return (
      <Carousel show={no} space={6}>
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
      <Carousel show={no} space={1}>
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
        <h2>User loves us</h2>
      </div>

      {/* start */}

      <div
        style={{
          maxWidth: 1500,
          marginLeft: "auto",
          marginRight: "auto",
          marginTop: "-3em",
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
