
import React from "react";
import "./Skills.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
} from "react-icons/fa";

const technicalSkills = [
  {
    name: "HTML",
    percentage: 90,
    icon: <FaHtml5 />,
    className: "html-icon",
  },
  {
    name: "CSS",
    percentage: 85,
    icon: <FaCss3Alt />,
    className: "css-icon",
  },
  {
    name: "JavaScript",
    percentage: 75,
    icon: <FaJs />,
    className: "js-icon",
  },
  {
    name: "React",
    percentage: 80,
    icon: <FaReact />,
    className: "react-icon",
  },
 
];

const professionalSkills = [
  {
    name: "Problem Solving",
    percentage: 85,
  },
  {
    name: "Creativity",
    percentage: 90,
  },
  {
    name: "Communication",
    percentage: 75,
  },
  {
    name: "Teamwork",
    percentage: 80,
  },
];

function Skills() {
  return (
    <section className="skill-container" id="skills">

      {/* =================================
          TITLE
      ================================= */}

      <div className="skill-title">
        <span className="skill-label">MY EXPERTISE</span>

        <h1>
          My <span>Skills</span>
        </h1>
      </div>


      {/* =================================
          MAIN WRAPPER
      ================================= */}

      <div className="wrapper">

        {/* =================================
            TECHNICAL SKILLS
        ================================= */}

        <div className="technical-skills">

          <h2 className="section-heading">
            Technical Skills
          </h2>

          <div className="technical-list">

            {technicalSkills.map((skill) => (

              <div className="skill-info" key={skill.name}>

                <div className="skill-name">

                  <span className={`skill-icon ${skill.className}`}>
                    {skill.icon}
                  </span>

                  <h3>
                    {skill.name}
                  </h3>

                </div>


                <div className="progress-container">

                  <div
                    className="progress-bar"
                    style={{
                      "--progress": `${skill.percentage}%`,
                    }}
                  />

                </div>


                <span className="percentage">
                  {skill.percentage}%
                </span>

              </div>

            ))}

          </div>

        </div>


        {/* =================================
            PROFESSIONAL SKILLS
        ================================= */}

        <div className="professional-skills">

          <h2 className="section-heading">
            Professional Skills
          </h2>

          <div className="professional-grid">

            {professionalSkills.map((skill) => (

              <div
                className="professional-item"
                key={skill.name}
              >

                <div className="circle">

                  <svg
                    className="circle-svg"
                    viewBox="0 0 120 120"
                  >

                    <circle
                      className="circle-bg"
                      cx="60"
                      cy="60"
                      r="52"
                    />

                    <circle
                      className="circle-progress"
                      cx="60"
                      cy="60"
                      r="52"
                      style={{
                        "--progress": skill.percentage,
                      }}
                    />

                  </svg>


                  <span className="circle-percentage">
                    {skill.percentage}%
                  </span>

                </div>

                <h3>
                  {skill.name}
                </h3>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Skills;

