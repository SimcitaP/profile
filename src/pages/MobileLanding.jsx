import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Tech from "../components/Tech";
import Works from "../components/Works";
import Feedbacks from "../components/Feedbacks";
import Contact from "../components/Contact";

const MobileLanding = () => {
  return (
    <div className="bg-primary w-full overflow-x-hidden">
      <Navbar />
      <Hero hide3D />   {/* disables 3D laptop */}
      <About />
      <Experience />
      <Tech />
      <Works />
      <Feedbacks />
      <Contact />
    </div>
  );
};

export default MobileLanding;
