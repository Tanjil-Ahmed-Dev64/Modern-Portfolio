import React, { useRef, useState } from "react";
import "./Footer.css";

import {
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";
import emailjs from "@emailjs/browser";


function Footer() {
  const form = useRef();

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setSending(true);
    setStatus("Sending...");

    emailjs
      .sendForm(
        "service_q2ulgpm",
        "template_qiijenb",
        form.current,
        "YOUR_EMAILJS_PUBLIC_KEY"
      )
      .then(() => {
        setStatus("Message sent successfully! ✓");

        form.current.reset();

        setSending(false);

        setTimeout(() => {
          setStatus("");
        }, 4000);
      })
      .catch((error) => {
        console.error("EMAILJS ERROR:", error);

        setStatus(
          `Failed: ${error.text || "Something went wrong. Please try again."}`
        );

        setSending(false);
      });
  };

  return (
    <footer className="footer-container" id="contact">

      <div className="footer-left">

        <span className="footer-label">
          GET IN TOUCH
        </span>

        <h1>
          Contact <span>Me</span>
        </h1>

        <div className="left-para">

          <h4>
            Let's Work Together
          </h4>

          <p>
            Have a project in mind or want to discuss an idea?
            Feel free to send me a message. I’m always open to
            discussing new projects, creative ideas, and
            opportunities.
          </p>

          <div className="social-icons">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://wa.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

          </div>

        </div>

      </div>

      <div className="footer-right">

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >

          <div className="input-box">

            <input
              className="mini"
              type="text"
              name="name"
              placeholder="Enter Your Name"
              autoComplete="name"
              required
            />

            <input
              className="mini"
              type="email"
              name="email"
              placeholder="Enter Your Email"
              autoComplete="email"
              required
            />

            <input
              className="mini"
              type="text"
              name="subject"
              placeholder="Enter Your Subject"
              required
            />

            <textarea
              className="big"
              name="message"
              placeholder="Enter Your Message"
              required
            />

          </div>

          <button
            className="submit-btn"
            type="submit"
            disabled={sending}
          >
            {sending ? "Sending..." : "Send Message"}
          </button>



          {status && (
            <p
              className={`message-status ${
                status.startsWith("Failed")
                  ? "error"
                  : "success"
              }`}
            >
              {status}
            </p>
          )}

        </form>
      </div>
    </footer>
  );
}

export default Footer;
