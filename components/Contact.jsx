'use client';

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { styles } from "@/styles";
import { SectionWrapper } from "@/hoc";
import { slideIn } from "@/utils/motion";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";
const GAUTENG = [28.0473, -26.2041];

const PulseRing = ({ r, color, delay, duration }) => (
  <motion.circle
    r={r}
    fill="none"
    stroke={color}
    strokeWidth={1.2}
    animate={{ r: [r * 0.6, r * 1.5, r * 0.6], opacity: [0.7, 0, 0.7] }}
    transition={{ duration, repeat: Infinity, ease: "easeInOut", delay }}
  />
);

const WorldMap = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="w-full h-full hidden md:flex flex-col items-center justify-center gap-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true }}
        className="relative w-full flex-1 min-h-[300px] rounded-2xl overflow-hidden border border-[#915eff]/20"
        style={{ background: "radial-gradient(ellipse at 60% 40%, #130d2a 0%, #080614 70%)" }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-[#915eff]/6 via-transparent to-[#00cea8]/5 pointer-events-none z-10" />

        {mounted && (
          <ComposableMap
            projectionConfig={{ scale: 150, center: [20, -5] }}
            style={{ width: "100%", height: "100%" }}
          >
            <ZoomableGroup zoom={1} minZoom={1} maxZoom={1}>
              <Graticule stroke="#915eff" strokeWidth={0.15} strokeOpacity={0.2} />

              <Geographies geography={GEO_URL}>
                {({ geographies }) =>
                  geographies.map((geo) => (
                    <Geography
                      key={geo.rsmKey}
                      geography={geo}
                      fill="#1d1836"
                      stroke="#915eff"
                      strokeWidth={0.25}
                      strokeOpacity={0.35}
                      style={{
                        default: { outline: "none", transition: "fill 0.25s ease" },
                        hover:   { fill: "#2a2050", outline: "none" },
                        pressed: { outline: "none" },
                      }}
                    />
                  ))
                }
              </Geographies>

              <Marker coordinates={GAUTENG}>
                <PulseRing r={14} color="#915eff" delay={0}   duration={2.6} />
                <PulseRing r={9}  color="#00cea8" delay={0.7} duration={2.6} />
                <circle r={4.5} fill="#915eff" />
                <circle r={2.5} fill="#ffffff" />
                <text
                  textAnchor="middle"
                  y={-20}
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontSize: "5.5px",
                    fill: "#aaa6c3",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                  }}
                >
                  Gauteng, SA
                </text>
              </Marker>
            </ZoomableGroup>
          </ComposableMap>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
        className="flex items-center gap-2 bg-[#1d1836]/80 border border-[#915eff]/20 px-4 py-2 rounded-full text-secondary text-xs font-mono"
      >
        <motion.span
          animate={{ opacity: [1, 0.25, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-2 h-2 rounded-full bg-[#00cea8] inline-block shrink-0"
        />
        Based in Gauteng, South Africa
      </motion.div>
    </div>
  );
};

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Simamnkele",
          from_email: form.email,
          to_email: "mlisanasimamnkele10@gmail.com",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>

        <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
          <label className="flex flex-col">
            <span className="dark:text-white text-gray-900 font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your good name?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary dark:text-white text-gray-900 rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="dark:text-white text-gray-900 font-medium mb-4">Your email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your web address?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary dark:text-white text-gray-900 rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="dark:text-white text-gray-900 font-medium mb-4">Your Message</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What you want to say?"
              className="bg-tertiary py-4 px-6 placeholder:text-secondary dark:text-white text-gray-900 rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-full sm:w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[560px]"
      >
        <WorldMap />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
