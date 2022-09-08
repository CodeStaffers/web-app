import React from "react";
import "./contact.css";
import { Button } from "../button/Button";
function Contact() {
  return (
    <>
      <div className="contactContainer">
        <div className="contactTitle">
          <h1>Get In Touch With Us</h1>
          <div className="slider"></div>
          <p>Anything in your mind well be glad to assisst you.</p>
        </div>
        <div className="contactWrapper">
          <div className="contactImage">
            <img src="/image/contact.png" alt="con" />
          </div>
          <div className="contactForm">
            <form className="formControl">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="textName"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
              />

              <div className="twoForm">
                <input
                  type="number"
                  name="number"
                  placeholder="Your phone number"
                />
                <input type="text" name="subject" placeholder="Your Subject" />
              </div>

              <div className="textArea">
                <textarea name="message" placeholder="Write Your Message..." />
              </div>
              <div className="contactBtn">
                <Button buttonSize="btn--medium">SEND MESSAGE</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
