import React, { useState, useEffect, useRef } from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import "./webUser.css";
import { useSelector } from "react-redux";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import "./styleTop.css";

function WebUser() {
  const [swiper, setSwiper] = useState();
  const [slide, setSlide] = useState(4);

  const [data, setData] = useState([]);
  const pageData = useSelector((state) => {
    return state.brand.brand;
  });

  const getPageData = async () => {
    const d = await pageData;
    setData(d);
  };

  useEffect(() => {
    getPageData();
    // eslint-disable-next-line
  }, []);

  const prevRef = useRef();
  const nextRef = useRef();

  React.useEffect(() => {
    if (swiper) {
      swiper.params.navigation.prevEl = prevRef.current;
      swiper.params.navigation.nextEl = nextRef.current;
      swiper.navigation.init();
      swiper.navigation.update();
    }
  }, [swiper]);

  useEffect(() => {
    function resizeWindow() {
      const width = window.innerWidth;
      if (width <= 815 && width >= 660) {
        setSlide(3);
      } else if (width <= 660 && width >= 425) {
        setSlide(2);
      } else if (width <= 425) {
        setSlide(1);
      } else {
        setSlide(4);
      }
    }

    window.addEventListener("resize", resizeWindow);

    // remove listner
    return () => window.removeEventListener("resize", resizeWindow);
  }, []);

  const { title, media, topClient } = data;

  return (
    <>
      <section className="webUserContainer">
        <div className="wrapper">
          <div className="webUserWrapper">
            <div className="webUserTitle">
              <span>{topClient}</span>
              {documentToReactComponents(title)}
            </div>

            <div className="webUserComp">
              <Swiper
                slidesPerView={slide}
                spaceBetween={30}
                slidesPerGroup={slide}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                  clickable: true,
                }}
                autoplay={{
                  delay: 4000,
                  disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                navigation={{
                  prevEl: prevRef?.current,
                  nextEl: nextRef?.current,
                }}
                updateOnWindowResize
                observer
                observeParents
                initialSlide={4}
                onSwiper={setSwiper}
                className="myTopSwiper"
              >
                {media &&
                  media.map((item, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <img src={item.fields.file.url} alt="comp" />
                      </SwiperSlide>
                    );
                  })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WebUser;
