import React, { useEffect, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (!section) return;

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setMenu(false);
  };

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-35% 0px -55% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setMenu(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="navbar-container">

      <button
        className="logo"
        onClick={() => scrollToSection("hero")}
        aria-label="Go to home"
      >
        <img src={logo} alt="Portfolio logo" />
      </button>

      <div className={`nav-menu ${menu ? "active" : ""}`}>

        <ul>

          <li>
            <button
              className={activeSection === "hero" ? "active-link" : ""}
              onClick={() => scrollToSection("hero")}
            >
              Home
            </button>
          </li>

          <li>
            <button
              className={activeSection === "about" ? "active-link" : ""}
              onClick={() => scrollToSection("about")}
            >
              About Me
            </button>
          </li>

          <li>
            <button
              className={activeSection === "service" ? "active-link" : ""}
              onClick={() => scrollToSection("service")}
            >
              Service
            </button>
          </li>

          <li>
            <button
              className={activeSection === "skill" ? "active-link" : ""}
              onClick={() => scrollToSection("skill")}
            >
              Skills
            </button>
          </li>

          <li>
            <button
              className={activeSection === "work" ? "active-link" : ""}
              onClick={() => scrollToSection("work")}
            >
              Portfolio
            </button>
          </li>

          <li>
            <button
              className={activeSection === "footer" ? "active-link" : ""}
              onClick={() => scrollToSection("footer")}
            >
              Contact
            </button>
          </li>

        </ul>
      </div>


      <button
        className="contact-btn"
        onClick={() => scrollToSection("footer")}
      >
        Connect With Me
      </button>


      <button
        className={`menu-btn ${menu ? "open" : ""}`}
        onClick={() => setMenu((prev) => !prev)}
        aria-label={menu ? "Close menu" : "Open menu"}
        aria-expanded={menu}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

    </nav>
  );
}

export default Navbar;
