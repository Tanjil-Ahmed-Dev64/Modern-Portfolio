
import React, { useState } from "react";
import "./Work.css";

const projects = [
  {
    id: "01",
    title: "UI/UX Design",
    category: "Design",
    image:
      "https://miro.medium.com/v2/1%2Acv35_bRrwnCso-rgWvuXEw.jpeg",
    description: "Modern and clean UI/UX design.",
    link: "#",
  },
  {
    id: "02",
    title: "Website Development",
    category: "Development",
    image:
      "https://www.morewebsolutions.com/images/2889112-ai.webp",
    description:
      "Responsive website built with modern technologies.",
    link: "#",
  },
  {
    id: "03",
    title: "Learning App",
    category: "Application",
    image:
      "https://cdn.dribbble.com/userupload/35575029/file/original-600349d258d9008ec2fc1912f7ae930f.png?resize=1600x1200",
    description:
      "Simple and engaging learning application.",
    link: "#",
  },
];

function LatestProject() {

  const [filter, setFilter] = useState("All");

  const categories = [
    "All",
    "Design",
    "Development",
    "Application",
  ];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(
          (item) => item.category === filter
        );

  return (
    <section className="latest-project" id="work">

      <div className="latest-header">

        <div className="latest-title">

          <span className="section-label">
            MY WORK
          </span>

          <h1>
            Latest <span>Projects</span>
          </h1>

          <p>
            Some of my recent work and creative projects.
          </p>

        </div>

        <div className="project-filter">

          {categories.map((category) => (

            <button
              key={category}
              className={
                filter === category ? "active" : ""
              }
              onClick={() => setFilter(category)}
            >
              {category}
            </button>

          ))}

        </div>

      </div>

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <article
            className="project-card"
            key={project.id}
          >
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
            />

            <div className="project-overlay">
              <span>
                {project.category}
              </span>
              <h2>
                {project.title}
              </h2>

              <p>
                {project.description}
              </p>

              <a
                href={project.link}
                className="view-project"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
                <span>→</span>
              </a>

            </div>

            <span className="project-number">
              {project.id}
            </span>

          </article>

        ))}

      </div>

    </section>
  );
}

export default LatestProject;
