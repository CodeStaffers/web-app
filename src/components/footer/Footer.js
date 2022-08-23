import React from "react";
import "./footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="left__footer">
          <div className="footer__left__card">
            <div className="footer__left__card__title">
              <h1>We're here to help.</h1>
            </div>
            <div className="left__footer__card__desc">
              <p>we're here to help you,refine. design and build.</p>
            </div>
            <div className="left__footer__image">
              <img
                src="https://cdn.pixabay.com/photo/2015/12/04/07/55/logodesign-1076200__340.png"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="right__footer">
          <div className="footerCard">
            <div className="visual__design">
              <div className="visual__image">
                <img src="" alt="" />
              </div>

              <div className="viusal__title">
                <h1>Visual Design</h1>
              </div>

              <div className="visual__desc">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  doloribus!
                </p>
              </div>

              <div className="visual__arrow">
                <span>➡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
