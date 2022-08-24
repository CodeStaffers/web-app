import React from "react";
import "./rating.css";

function Rating() {
  return (
    <>
      <div className="rating">
        <div className="experience__rating">
          <div className="digits">
            <h1>10+</h1>
          </div>
          <div className="title__rating">
            <p>Years of experience</p>
          </div>
        </div>

        <div className="satisfied__rating">
          <div className="digits">
            <h1>80+</h1>
          </div>
          <div className="title__rating">
            <p>Satisfied Clients</p>
          </div>
        </div>

        <div className="success__rating">
          <div className="digits">
            <h1>98%</h1>
          </div>
          <div className="title__rating">
            <p>Success Projects</p>
          </div>
        </div>

        <div className="Award__rating">
          <div className="digits">
            <h1>48+</h1>
          </div>
          <div className="title__rating">
            <p>Award Gained</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rating;
