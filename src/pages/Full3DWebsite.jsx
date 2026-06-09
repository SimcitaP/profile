import React from "react";
import {
  About, Contact, Experience, Feedbacks,
  Hero, Navbar, Tech, Works, StarsCanvas
} from "../components";
import Certificates from "../components/Certificates";

const Full3DWebsite = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />   {/* includes ComputersCanvas */}
      </div>

      <About />
      <Experience />
      <Tech />
      <Works />
      <Certificates />
      <Feedbacks />

      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default Full3DWebsite;
