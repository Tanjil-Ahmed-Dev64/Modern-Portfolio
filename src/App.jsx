
import React from "react";

import { BrowserRouter } from "react-router-dom";

import Navbar from "./Component/Navbar/Navbar";
import Hero from "./Component/Hero/Hero";
import About from "./Component/About/About";
import Service from "./Component/Services/Services";
import Skills from "./Component/Skills/Skills";
import Work from "./Component/Work/Work";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="service">
          <Service />
        </section>

        <section id="skill">
          <Skills />
        </section>

        <section id="work">
          <Work />
        </section>

        <section id="footer">
          <Footer />
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;
