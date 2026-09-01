import React from "react";
import "./Hero.css";

import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";

import profile from "../../assets/profile.jpg";

function Hero() {

  // =========================
  // SCROLL TO ABOUT SECTION
  // =========================
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");

    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="hero-container" id="hero">

      {/* =========================
          LEFT CONTENT
      ========================= */}
      <div className="hero-left">

        <div className="hero-content">

          <p className="hero-greeting">
            Hello, It's Me
          </p>

          <h1 className="hero-name">
            Tanjil Ahmed
          </h1>

          <h2 className="hero-role">
            And I'm a{" "}
            <span>Web Developer</span>
          </h2>

          <p className="hero-description">
            I'm a passionate web developer with experience in
            creating modern, responsive and user-friendly websites.
            I specialize in frontend development, website design,
            and building smooth digital experiences.
          </p>

        </div>


        {/* =========================
            SOCIAL ICONS
        ========================= */}
        <div className="social-icons">

          <a
            href="#"
            className="social-btn"
            aria-label="Facebook"
          >
            <FaFacebook />
          </a>

          <a
            href="#"
            className="social-btn"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>

          <a
            href="#"
            className="social-btn"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>

          <a
            href="#"
            className="social-btn"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

        </div>


        {/* =========================
            ABOUT BUTTON
        ========================= */}
        <button
          className="about-btn"
          onClick={scrollToAbout}
        >
          More About Me
        </button>

      </div>


      {/* =========================
          RIGHT IMAGE
      ========================= */}
      <div className="hero-right">

        <div className="profile-wrapper">

          <div className="profile-glow"></div>

          <div className="main-image">
            <img
              src={profile}
              alt="Tanjil Ahmed"
            />
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
