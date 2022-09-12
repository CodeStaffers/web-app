import React, { useState } from "react";
import "./header.css";
import { MenuItems } from "./MenuItems";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "../button/Button";
import { NavLink } from "react-router-dom";

function Header() {
  const [clicked, setClicked] = useState(false);
  const [scroll, setScroll] = useState(false);

  const onScrollChange = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", onScrollChange);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <nav className={scroll ? "NavbarItems nav-bg " : "NavbarItems "}>
        <span className="navbar-logo">
          <NavLink to="/">
            <img src="/image/logo.png" alt="logo" />
          </NavLink>
        </span>
        <div className="menu-icons" onClick={handleClick}>
          {clicked ? (
            <AiOutlineClose className="mobile-icon" />
          ) : (
            <HiOutlineMenuAlt1 className="mobile-icon" />
          )}
        </div>

        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <NavLink to={item.url} className={item.cName}>
                  {item.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <Button buttonSize="btn--medium" btnHeader="header-btn-none">
          Get Started
        </Button>
      </nav>
    </>
  );
}

export default Header;
