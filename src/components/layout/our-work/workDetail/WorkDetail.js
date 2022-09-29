import React, { useEffect, useState } from "react";
import "./workDetail.css";
import { Link, useLocation } from "react-router-dom";
import { FaQuoteRight } from "react-icons/fa";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper/core";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

function WorkDetail({ ourWorkDetailPage }) {
  const [workDetail, setWorkDetail] = useState([]);

  const location = useLocation();
  const { titlePage, id } = location.state;

  // console.log(id);

  const filterData = () => {
    const filterWork = ourWorkDetailPage.filter((item) => id === item.sys.id);
    setWorkDetail(filterWork[0].fields);
  };

  useEffect(() => {
    filterData();
    window.scrollTo(0, 0, {
      behavior: "smooth",
    });
    // eslint-disable-next-line
  }, []);

  // console.log(workDetail.clientInfo);
  return (
    <>
      <section className="workDetailContainer">
        <div className="wrapper">
          <div className="workDetailBetaWrapper">
            <div className="breadcombTitle">
              <p>
                <Link to="/our-works">Our Work</Link> /{" "}
                <span>{titlePage} </span>
              </p>
            </div>

            <div className="workDetailWrapper">
              <div className="workDetailTitle">
                <h2>{workDetail.title}</h2>
                <p>Mobile app - design, code, Testing</p>
              </div>

              <div className="workDetailImage">
                <Swiper
                  cssMode={true}
                  navigation={true}
                  pagination={true}
                  mousewheel={true}
                  keyboard={true}
                  loop={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  modules={[
                    Navigation,
                    Pagination,
                    Mousewheel,
                    Keyboard,
                    Autoplay,
                  ]}
                  className="mySwiperWork"
                >
                  {workDetail.clientInfo &&
                    workDetail.clientInfo.fields.media.map((img, index) => {
                      return (
                        <>
                          <SwiperSlide key={index}>
                            <img src={img.fields.file.url} alt="" />
                          </SwiperSlide>
                        </>
                      );
                    })}
                </Swiper>
              </div>
            </div>

            <div className="workDetailClientInfo">
              <h6>Client information</h6>

              <div className="clientInfo">
                <div className="clientLogo">
                  <img
                    src={
                      workDetail.clientInfo &&
                      workDetail.clientInfo.fields.clientLogo.fields.file.url
                    }
                    alt="logo"
                  />
                </div>
                <div className="clientDetails">
                  <h5>
                    {workDetail.clientInfo &&
                      workDetail.clientInfo.fields.clientName}
                  </h5>
                  <a
                    href={
                      workDetail.clientInfo &&
                      workDetail.clientInfo.fields.clientUrl
                    }
                  >
                    {workDetail.clientInfo &&
                      workDetail.clientInfo.fields.clientName}
                  </a>
                </div>
              </div>

              <div className="clientContent">
                <p>
                  {workDetail.clientInfo &&
                    workDetail.clientInfo.fields.clientContent}
                </p>
              </div>
            </div>

            <div className="clientSummary">
              {documentToReactComponents(
                workDetail.clientInfo &&
                  workDetail.clientInfo.fields.clientSummary
              )}
            </div>

            <div className="clientFeedback">
              <h3>Client Feedback</h3>

              <div className="clientFeedbackCard">
                <div className="clientCardUser">
                  <div className="clientCardContent">
                    <FaQuoteRight className="clientCardQoute" />
                    <h4>Amazing</h4>
                    {documentToReactComponents(
                      workDetail.clientInfo &&
                        workDetail.clientInfo.fields.clientFeedback
                    )}
                  </div>
                  <div className="clientCardUserDetails">
                    <div className="testnomialImage">
                      <img
                        src={
                          workDetail.clientInfo &&
                          workDetail.clientInfo.fields.clientFeedbackLogo.fields
                            .file.url
                        }
                        alt="logo"
                      />
                    </div>
                    <div className="testnomialUser">
                      <h6>
                        {workDetail.clientInfo &&
                          workDetail.clientInfo.fields.clientFeedbackName}
                      </h6>
                      <p>
                        {workDetail.clientInfo &&
                          workDetail.clientInfo.fields.clientFeedbackStatus}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default WorkDetail;
