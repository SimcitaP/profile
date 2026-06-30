'use client';

import { motion } from "framer-motion";
import { SectionWrapper } from "@/hoc";
import { technologies } from "@/constants";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.75, y: 20 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 18 },
  },
};

const TechCard = ({ name, icon }) => (
  <motion.div
    variants={item}
    whileHover={{ scale: 1.12, y: -6, transition: { type: "spring", stiffness: 300, damping: 15 } }}
    className="relative group w-24 h-24 sm:w-28 sm:h-28 flex flex-col items-center justify-center gap-2 rounded-2xl cursor-default select-none"
    style={{ background: "rgba(29,24,54,0.6)", backdropFilter: "blur(8px)" }}
  >
    {/* border that brightens on hover */}
    <span className="absolute inset-0 rounded-2xl border border-white/8 group-hover:border-[#915eff]/50 transition-colors duration-300 pointer-events-none" />

    {/* glow on hover */}
    <span className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      style={{ boxShadow: "inset 0 0 24px 4px rgba(145,94,255,0.12), 0 8px 24px rgba(145,94,255,0.15)" }} />

    <img
      src={icon}
      alt={name}
      className="w-10 h-10 object-contain drop-shadow-sm group-hover:drop-shadow-[0_0_8px_rgba(145,94,255,0.5)] transition-all duration-300"
      loading="lazy"
    />
    <p className="text-secondary text-[10px] font-medium text-center leading-tight w-full px-1 truncate group-hover:text-white transition-colors duration-200">
      {name}
    </p>
  </motion.div>
);

const Tech = () => (
  <motion.div
    variants={container}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-60px" }}
    className="flex flex-row flex-wrap justify-center gap-4 sm:gap-5"
  >
    {technologies.map((tech) => (
      <TechCard key={tech.name} {...tech} />
    ))}
  </motion.div>
);

export default SectionWrapper(Tech, "");
