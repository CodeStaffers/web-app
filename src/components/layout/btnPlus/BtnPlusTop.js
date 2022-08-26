import React from "react";
import "./btnPlus.css";
import { BsFillArrowUpCircleFill } from "react-icons/bs";

function BtnPlusTop() {
  const moveTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div
        className="btnTopPlus"
        onClick={() => {
          moveTop();
        }}
      >
        <BsFillArrowUpCircleFill size={40} />
      </div>
    </>
  );
}

export default BtnPlusTop;
