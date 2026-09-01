
import React from "react";
import "./Services.css";

function Service() {

  const services = [
    {
      icon: "</>",
      title: "UI/UX Design",
      description:
        "I create clean, intuitive, and user-focused interfaces that provide a smooth and engaging experience across different devices.",
    },
    {
      icon: "</>",
      title: "Web Development",
      description:
        "I build modern, responsive, and high-performance websites using clean and maintainable code with a strong focus on functionality.",
    },
    {
      icon: "</>",
      title: "Responsive Design",
      description:
        "I develop websites that adapt beautifully to desktops, tablets, and mobile devices while maintaining a consistent user experience.",
    },
  ];

  return (
    <section className="service-container" id="service">

      <div className="service-header">
        <span className="service-small-title">
          WHAT I DO
        </span>
        <h1>
          My <span>Services</span>
        </h1>
        <p>
          I provide modern web solutions designed to create
          engaging, responsive, and user-friendly digital experiences.
        </p>

      </div>


      <div className="services-main">

        {services.map((service, index) => (
          <article
            className="service-card"
            key={index}
          >

            {/* Icon */}

            <div className="code-icon">
              {service.icon}
            </div>


            {/* Number */}

            <span className="card-number">
              0{index + 1}
            </span>


            {/* Title */}

            <h2>
              {service.title}
            </h2>


            {/* Description */}

            <p>
              {service.description}
            </p>


            {/* Button */}

            <button className="learn-btn">
              Learn More
              <span>→</span>
            </button>

          </article>

        ))}

      </div>

    </section>
  );
}

export default Service;
