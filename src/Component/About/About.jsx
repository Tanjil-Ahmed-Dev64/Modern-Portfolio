
import React from "react";
import "./About.css";
import profile from "../../assets/profile.jpg";

function About() {

  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skill");

    if (skillsSection) {
      skillsSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="about-container" id="about">

      <div className="about-image">

        <div className="about-image-glow"></div>

        <div className="about-image-border">
          <img
            src={profile}
            alt="Tanjil Ahmed"
          />
        </div>

      </div>


      <div className="about-para">

        <span className="about-small-title">
          ABOUT ME
        </span>

        <h1>
          About <span>Me</span>
        </h1>

        <h4>
          Full Stack Developer!
        </h4>

        <p>
          I’m a passionate web developer with over 3 years of
          experience specializing in modern, responsive, and
          high-performance web development. I combine clean code,
          creative design, and strong UI/UX principles to build
          websites that are visually engaging, intuitive, and
          user-focused.
        </p>

        <p>
          I stay up to date with the latest technologies and design
          trends, allowing me to deliver scalable and impactful
          digital experiences. For every project, I focus on
          understanding the client’s goals, target audience, and
          brand identity to create solutions that are both
          technically refined and strategically effective.
        </p>

        <button
          className="about-btn"
          onClick={scrollToSkills}
        >
          More About Me
          <span>→</span>
        </button>

      </div>

    </section>
  );
}

export default About;

