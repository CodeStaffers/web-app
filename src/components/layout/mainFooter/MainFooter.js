import React from "react";
import "./mainFooter.css";
import { FcCallback, FcTreeStructure, FcMindMap } from "react-icons/fc";

function MainFooter() {
  return (
    <>
      <div className="mainFooter">
        <div className="mainFooter_nav">
          <div className="mainFooter_nav1">
            <div className="mainFooter_image">
              <img
                src="http://www.marveltheme.com/tf/react/appal/assets/images/logo/logo-2.png"
                alt=""
              />
            </div>

            <div className="mainFooter_content">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Perferendis neque magni officiis .
              </p>
            </div>

            <div className="mainFooter_icon">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOyCtPSy5vZ6NNKe6nmW5aEAWDfv2R3bV72g&usqp=CAU"
                alt=""
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOyCtPSy5vZ6NNKe6nmW5aEAWDfv2R3bV72g&usqp=CAU"
                alt=""
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOyCtPSy5vZ6NNKe6nmW5aEAWDfv2R3bV72g&usqp=CAU"
                alt=""
              />
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOyCtPSy5vZ6NNKe6nmW5aEAWDfv2R3bV72g&usqp=CAU"
                alt=""
              />
            </div>
          </div>

          <div className="mainFooterNav2">
            <div className="apps">
              <div className="appTitle">
                <h1>Apps</h1>
              </div>
              <div className="appList">
                <p>Privacy Policy</p>
              </div>
            </div>
          </div>

          <div className="mainFooterNav3">
            <div className="aboutUs">
              <div className="aboutTitle">
                <h1>About Us</h1>
              </div>
              <div className="aboutList">
                <p>Contact Us</p>
              </div>
            </div>
          </div>

          <div className="mainFooterNav4">
            <div className="service">
              <div className="serviceTitle">
                <h1>service</h1>
              </div>
              <div className="serviceList">
                <p>Pricing</p>
              </div>
            </div>
          </div>

          <div className="mainFooterNav5">
            <div className="address">
              <div className="addressTitle">
                <h1>Address</h1>
              </div>
              <div className="addressList">
                <div className="contactNumber">
                  <FcCallback />
                  <p>+3283028323</p>
                </div>
                <div className="website">
                  <FcTreeStructure />
                  <a href="">Www.Yourwebsite.Com</a>
                </div>
                <div className="location">
                  <FcMindMap />
                  <p>28 Green Tower, Street Name,New York City, USA</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainFooter;
