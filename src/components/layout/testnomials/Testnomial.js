import React from "react";
import "./testnomial.css";

import TestnimialCard from "./TestnimialCard";

function Testnomial({ testnomial }) {
  return (
    <div className="testnomialWrapper">
      <div className="user_loveUs">
        <h1>User Love Us</h1>
      </div>

      <div className="testnomialCard">
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
      </div>
    </div>
  );
}

export default Testnomial;
