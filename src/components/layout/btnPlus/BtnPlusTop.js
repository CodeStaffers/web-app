import React, { useState } from "react";
import "./btnPlus.css";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

function BtnPlusTop() {
  const [showBtn, setShowBtn] = useState(false);

  const moveTop = () => {
    window.scrollTo(0, 0);
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
          <BsFillArrowUpCircleFill size={40} />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default BtnPlusTop;