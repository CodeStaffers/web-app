import React from "react";

import "./footer.css";
function Footer({ page }) {
  return (
    <>
      <div
        className="footer"
        style={{ backgroundColor: page.footer && page.footer.bgColor }}
      >
        <div className="left__footer">
          <div className="footer__left__card">
            <div className="footer__left__card__title">
              <h1>{page.footer && page.footer.left.title}.</h1>
            </div>
            <div className="left__footer__card__desc">
              <p>{page.footer && page.footer.left.subTitle}</p>
            </div>
            <div className="left__footer__image">
              <img src={page.footer && page.footer.left.image} alt="" />
            </div>
          </div>
        </div>
        <div className="right__footer">
          <div className="right__footerCard">
            {page.footer &&
              page.footer.right.map((item, index) => {
                return (
                  <div
                    className="right__design"
                    key={index}
                    style={{ backgroundColor: item.bgColor, color: item.color }}
                  >
                    <div className="right__image">
                      <img src={item.logo} alt="" />
                    </div>

                    <div className="right__title">
                      <h1>{item.title}</h1>
                    </div>

                    <div className="right__desc">
                      <p>{item.subTitle && item.subTitle}</p>
                    </div>

                    <div className="right__arrow">
                      <span>{item.icon} </span>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
