'use client';

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Tech from "@/components/Tech";
import Works from "@/components/Works";
import Certificates from "@/components/Certificates";
import Feedbacks from "@/components/Feedbacks";
import Contact from "@/components/Contact";
import Loader from "@/components/Loader";

export default function Home() {
  return (
    <div className="relative z-0 bg-primary">
      <Loader />
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experience />
      <Tech />
      <Works />
      <Certificates />
      <Feedbacks />
      <Contact />
    </div>
  );
}
