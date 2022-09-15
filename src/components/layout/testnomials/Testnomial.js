import React from "react";
import "./testnomial.css";
import { FaQuoteRight } from "react-icons/fa";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

// import TestnimialCard from "./TestnimialCard";

function Testnomial({ testnomial }) {
  return (
    <>
      <section className="testnomialContainer">
        <div className="wrapper">
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
            <div className="tesnomialCard">
              <div className="tesnomialContent">
                <FaQuoteRight className="testnomialQoute2" />
                <h4>Amazing</h4>
                <p>
                  Thanks you very much for your random number generator i use it
                  all the time. I have a monthly drawing on my site,so I use it
                  to pick the two winners
                  <br />
                  <br />
                  so,thank you i see you are visiting Georgia.Have a great time!
                </p>
              </div>
              <div className="testnomialuserDetail">
                <div className="testnomialImage">
                  <img src="/image/user.jpeg" alt="logo" />
                </div>
                <div className="testnomialUser">
                  <h6>skylar Dokdis</h6>
                  <p>CEO of Unicharm</p>
                </div>
              </div>
            </div>
            <div className="tesnomialCard">
              <div className="tesnomialContent">
                <FaQuoteRight className="testnomialQoute2" />
                <h4>Amazing</h4>
                <p>
                  Thanks you very much for your random number generator i use it
                  all the time. I have a monthly drawing on my site,so I use it
                  to pick the two winners
                  <br />
                  <br />
                  so,thank you i see you are visiting Georgia.Have a great time!
                </p>
              </div>
              <div className="testnomialuserDetail">
                <div className="testnomialImage">
                  <img src="/image/user.jpeg" alt="logo" />
                </div>
                <div className="testnomialUser">
                  <h6>skylar Dokdis</h6>
                  <p>CEO of Unicharm</p>
                </div>
              </div>
            </div>
            <div className="tesnomialCard">
              <div className="tesnomialContent">
                <FaQuoteRight className="testnomialQoute2" />
                <h4>Amazing</h4>
                <p>
                  Thanks you very much for your random number generator i use it
                  all the time. I have a monthly drawing on my site,so I use it
                  to pick the two winners
                  <br />
                  <br />
                  so,thank you i see you are visiting Georgia.Have a great time!
                </p>
              </div>
              <div className="testnomialuserDetail">
                <div className="testnomialImage">
                  <img src="/image/user.jpeg" alt="logo" />
                </div>
                <div className="testnomialUser">
                  <h6>skylar Dokdis</h6>
                  <p>CEO of Unicharm</p>
                </div>
              </div>
            </div>
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
