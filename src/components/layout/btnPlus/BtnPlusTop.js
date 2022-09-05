import React, { useState } from "react";
import "./btnPlus.css";
import { BsArrowUpShort } from "react-icons/bs";

function BtnPlusTop() {
  const [showBtn, setShowBtn] = useState(false);

  const moveTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  function updateDom() {
    const { scrollTop } = document.documentElement;
    if (scrollTop >= 30) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  }
  window.addEventListener("scroll", updateDom);

  return (
    <>
      {showBtn ? (
        <div
          className="btnTopPlus"
          onClick={() => {
            moveTop();
          }}
        >
          <BsArrowUpShort className="btnTopPlusIcon" size={40} />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default BtnPlusTop;
