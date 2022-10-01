import React from "react";
import "./about.styles.css";
import { FcNext } from "react-icons/fc";
import Divider from "../../Divider";
function About() {
  return (
    <>
      <section className="aboutSection about_container ">
        <div className="wrapper aboutWrapperDoc">
          <div className="aboutTitle aboutWrapper">
            <div className="aboutTitle1">
              <h1>
                We build bridges between
                <span>companies and customers</span>
              </h1>
            </div>
            <div className="aboutTitle2">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum
                expedita reprehenderit debitis ducimus non odit dignissimos qui!
                Vel, cumque necessitatibus.
              </p>
            </div>
          </div>

          <div className="aboutBg">
            <img
              src="https://images03.nicepage.com/c461c07a441a5d220e8feb1a/a6f4fa926896598d9b5a2e42/dmin.jpg"
              alt="bg"
            />
          </div>

          <div className="aboutWrapper">
            <Divider color="red" padding="5px" height="10px" />
          </div>

          <div className="aboutSummary aboutWrapper">
            <div className="summaryTitle">
              <h2>Together we are strong</h2>
            </div>
            <div className="summaryPara">
              <h5>
                Our Crew is always getting bigger, but we all work towards one
                goal to make access not only possible but inevitable for teams
                everywhere.
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam,
                dolor reiciendis. Aperiam iste repellat, pariatur, minima fugit
                sapiente dolore cum itaque aliquid consectetur nostrum voluptas
                laborum dolor similique maxime. Porro perspiciatis nostrum
                necessitatibus, aliquid ut, nesciunt quae possimus, enim neque
                deserunt fugiat unde placeat aspernatur eius architecto
                accusantium dolores expedita. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Consequatur odit natus alias
                inventore iusto reiciendis voluptatum vel aspernatur in iure
                consequuntur exercitationem fuga earum, ratione magni, quos
                velit, debitis expedita!
              </p>
            </div>
          </div>

          <div className="aboutTeam aboutWrapper">
            <div className="team1">
              <h2>Join our team</h2>
            </div>
            <div className="team2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
                temporibus eveniet, asperiores distinctio atque corrupti.
              </p>
              <a href="http">
                See open position <FcNext />
              </a>
            </div>
          </div>

          <div className="aboutAssit ">
            <div className="assist1 aboutWrapper">
              <h2>Have a question?Our team is happy to assist you</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloribus eos pariatur optio nemo maiores perspiciatis?
              </p>

              <hr style={{ marginTop: "2.5em" }} />

              <div className="AboutBtn">
                <button>
                  Contact Us &nbsp; <FcNext />
                </button>

                <div>
                  Or call{" "}
                  <span style={{ textDecoration: "underline" }}>
                    +9132323232
                  </span>
                </div>
              </div>
            </div>
            <div className="assist2">
              <img src="./bg-about.jpeg" alt="bg" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
