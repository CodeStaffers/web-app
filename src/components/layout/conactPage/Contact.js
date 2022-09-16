import React, { useRef } from "react";
import "./contact.css";
import { Button } from "../button/Button";
import emailjs from "@emailjs/browser";
function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.EMAIL_SERVICE_ID,
        process.env.EMAIL_TEMPLATE_ID,
        form.current,
        process.env.EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <section className="contactContainer">
        <div className="wrapper">
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
              <form ref={form} onSubmit={sendEmail} className="formControl">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  className="textName"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email Address"
                  required
                />

                <div className="twoForm">
                  <input
                    type="number"
                    name="user_phone"
                    placeholder="Your phone number"
                    required
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Your Subject"
                    required
                  />
                </div>

                <div className="textArea">
                  <textarea
                    name="message"
                    placeholder="Write Your Message..."
                    required
                  />
                </div>
                <div className="contactBtn">
                  <Button type="submit" buttonSize="btn--medium">
                    SEND MESSAGE
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
