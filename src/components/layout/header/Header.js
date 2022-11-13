import React, { useState } from "react";
import "./header.css";
import { MenuItems } from "./MenuItems";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "../button/Button";
import { NavLink } from "react-router-dom";

function Header({ page }) {
  const [clicked, setClicked] = useState(false);
  const [scroll, setScroll] = useState(false);

  const onScrollChange = () => {
    if (window.scrollY >= 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  window.addEventListener("scroll", onScrollChange);
  const handleClick = () => {
    setClicked(!clicked);
  };

  // define btn click
  const onClick = () => {
    alert("Click");
    window.open(page.logoUrl, "_blank");
  };

  return (
    <>
      <nav className={scroll ? "NavbarContainer nav-bg" : "NavbarContainer"}>
        <div className="wrapper ">
          <div className="NavbarItems">
            <div className="navbar-logo">
              <NavLink to="/">
                <img src={page.logo && page.logo.fields.file.url} alt="logo" />
              </NavLink>
            </div>

            <div className="right-header">
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

              <div className="header-btn">
                <Button
                  buttonSize="btn--medium"
                  btnHeader="header-btn-none"
                  onClick={onClick}
                >
                  Get Your Website Audit For Free
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
