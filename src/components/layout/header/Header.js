import React, { useState } from "react";
import "./header.css";
import { MenuItems } from "./MenuItems";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { Button } from "../button/Button";

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
        <h1 className="navbar-logo">CodeStaffers</h1>
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
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
        <Button>Get Started</Button>
      </nav>
    </>
  );
}

export default Header;
