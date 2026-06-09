import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Tech from "../components/Tech";
import Works from "../components/Works";
import Certificates from "../components/Certificates";
import Feedbacks from "../components/Feedbacks";
import Contact from "../components/Contact";

const MobileLanding = () => {
  return (
    <div className="bg-primary w-full overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Works />
      <Certificates />
      <Feedbacks />
      <Contact />
    </div>
  );
};

export default MobileLanding;
