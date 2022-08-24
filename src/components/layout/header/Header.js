import React from "react";
import "./header.css";
import { AiFillStar } from "react-icons/ai";
import { CgMenuRound } from "react-icons/cg";
function Header() {
  return (
    <>
      <div className="header__container">
        <nav>
          <ul className="nav">
            <li className="nav__items nav__logo">
              <img className="logo__nav" src="./image/logo.jpeg" alt="" />
            </li>
            <li className="nav__items home__item">
              <AiFillStar className="star__icon" />
              Home
              <AiFillStar className="star__icon" />
            </li>
            <li className="nav__items">
              <div className="header__menu">
                <div className="btn__menu__header">Menu </div>&nbsp;
                <div className="btn__icon">
                  <CgMenuRound size={30} background="black" />
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Header;
