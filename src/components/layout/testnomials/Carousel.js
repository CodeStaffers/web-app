import React, { useEffect, useState } from "react";
import "./carousel.css";

// import { FcNext, FcPrevious } from "react-icons/fc";

import { BsArrowRight, BsArrowLeft } from "react-icons/bs";

const Carousel = (props) => {
  const { children, show, space } = props;

  const [spaceDigit, setSpaceDigit] = useState(0);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [length, setLength] = useState(children.length);

  const [touchPosition, setTouchPosition] = useState(null);

  // Set the length to match current children from props
  useEffect(() => {
    setLength(children.length);
  }, [children]);

  const next = () => {
    if (currentIndex < length - show) {
      setSpaceDigit(space);
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const prev = () => {
    if (currentIndex > 0) {
      setSpaceDigit(0);
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX;
    setTouchPosition(touchDown);
  };

  const handleTouchMove = (e) => {
    const touchDown = touchPosition;

    if (touchDown === null) {
      return;
    }

    const currentTouch = e.touches[0].clientX;
    const diff = touchDown - currentTouch;

    if (diff > 5) {
      next();
    }

    if (diff < -5) {
      prev();
    }

    setTouchPosition(null);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-wrapper">
        {/* You can alwas change the content of the button to other things */}
        {(currentIndex > 0 && (
          <BsArrowLeft onClick={prev} className="left-arrow" />
        )) ||
          (currentIndex < length - show && (
            <BsArrowRight onClick={next} className="right-arrow" />
          ))}
        <div
          className="carousel-content-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
        >
          <div
            className={`carousel-content show-${show}`}
            style={{
              transform: `translateX(-${
                currentIndex * (100 / show) + spaceDigit
              }%)`,
            }}
          >
            {children}
          </div>
        </div>
        {/* You can alwas change the content of the button to other things */}
        {}
      </div>
    </div>
  );
};

export default Carousel;
