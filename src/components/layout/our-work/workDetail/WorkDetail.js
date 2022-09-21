import React, { useEffect } from "react";
import "./workDetail.css";
import { Link, useLocation } from "react-router-dom";
import { FaQuoteRight } from "react-icons/fa";
function WorkDetail({ ourWorkDetail }) {
  console.log(ourWorkDetail);

  const location = useLocation();
  const { titlePage, id } = location.state;
  console.log("id of ", id);
  useEffect(() => {
    window.scrollTo(0, 0, {
      behavior: "smooth",
    });
  }, []);

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
                <h2>CreativeQ Finance App</h2>
                <p>Mobile app - design, code, Testing</p>
              </div>

              <div className="workDetailImage"></div>
            </div>

            <div className="workDetailClientInfo">
              <h6>Client information</h6>

              <div className="clientInfo">
                <div className="clientLogo">
                  <img src="/image/logo.png" alt="logo" />
                </div>
                <div className="clientDetails">
                  <h5>CreativeQ</h5>
                  <a href="###">creativeq.com</a>
                </div>
              </div>

              <div className="clientContent">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Reiciendis distinctio ad voluptatem fugit libero consequuntur
                  temporibus provident veritatis architecto suscipit!
                </p>
              </div>
            </div>

            <div className="clientSummary">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              temporibus eligendi in fuga aspernatur ea accusamus exercitationem
              praesentium soluta blanditiis.
              <br />
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad,
              soluta? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Architecto quo omnis, sapiente laudantium recusandae nihil sit.
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse
              vitae debitis deserunt obcaecati consectetur, et labore cum illo!
            </div>

            <div className="clientFeedback">
              <h3>Client Feedback</h3>

              <div className="clientFeedbackCard">
                <div className="clientCardUser">
                  <div className="clientCardContent">
                    <FaQuoteRight className="clientCardQoute" />
                    <h4>Amazing</h4>
                    <p>
                      Thanks you very much for your random number generator i
                      use it all the time. I have a monthly drawing on my
                      site,so I use it to pick the two winners
                      <br />
                      <br />
                      so,thank you i see you are visiting Georgia.Have a great
                      time!
                    </p>
                  </div>
                  <div className="clientCardUserDetails">
                    <div className="testnomialImage">
                      <img src="/image/user.jpeg" alt="logo" />
                    </div>
                    <div className="testnomialUser">
                      <h6>skylar Dokdis</h6>
                      <p>CEO of Unicharm</p>
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
