'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { styles } from '@/styles';

const roles = [
  "Full Stack Developer",
  "Data Analyst",
  "ML Engineer",
  "Game Developer",
];

const codeLines = [
  { indent: 0, text: 'const developer = {', color: 'text-[#dfd9ff]' },
  { indent: 1, text: 'name: "Simamnkele",', color: 'text-[#00cea8]' },
  { indent: 1, text: 'skills: ["Web", "AI", "Data"],', color: 'text-[#00cea8]' },
  { indent: 1, text: 'passion: "building things",', color: 'text-[#00cea8]' },
  { indent: 1, text: 'available: true,', color: 'text-[#bf61ff]' },
  { indent: 0, text: '};', color: 'text-[#dfd9ff]' },
];

const stats = [
  { value: "6+", label: "Projects" },
  { value: "13+", label: "Technologies" },
  { value: "2", label: "Work Roles" },
];

const floatingBadges = [
  { label: "⚛️ React",      top: "22%", left: "5%",  delay: 0    },
  { label: "🐍 Python",     top: "55%", left: "3%",  delay: 1.2  },
  { label: "▲ Next.js",    top: "75%", left: "8%",  delay: 0.6  },
  { label: "🤖 ML / AI",   top: "30%", right: "4%", delay: 0.9  },
  { label: "🗄️ PostgreSQL", top: "65%", right: "3%", delay: 1.8  },
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((p) => (p + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section className='relative w-full h-screen mx-auto overflow-hidden'>

      {/* ── Background animated orbs ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.25, 1], opacity: [0.18, 0.35, 0.18] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full bg-[#915eff] blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.12, 0.25, 0.12] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-1/2 -right-40 w-[400px] h-[400px] rounded-full bg-[#00cea8] blur-[130px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute -bottom-20 left-1/3 w-[350px] h-[350px] rounded-full bg-[#bf61ff] blur-[140px]"
        />
      </div>

      {/* ── Floating skill badges (left & right edges) ── */}
      {floatingBadges.map((b, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: [0, 1, 1, 1], y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: b.delay, ease: "easeInOut" }}
          className="absolute hidden lg:flex items-center gap-1.5 bg-[#1d1836]/70 backdrop-blur-sm border border-[#915eff]/25 text-secondary text-xs font-mono px-3 py-1.5 rounded-full shadow-md shadow-[#915eff]/10 select-none pointer-events-none"
          style={{ top: b.top, left: b.left, right: b.right }}
        >
          {b.label}
        </motion.div>
      ))}

      {/* ── Main hero content ── */}
      <div className={`${styles.paddingX} absolute inset-0 top-[110px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        {/* purple dot + gradient line */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        {/* Text block */}
        <div className='flex-1'>
          <h1 className={`${styles.heroHeadText}`}>
            Hi, I&apos;m <span className='text-[#915eff]'>Simamnkele</span>
          </h1>

          {/* Cycling role title */}
          <div className="mt-3 h-[36px] sm:h-[44px] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.p
                key={roleIndex}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className={`${styles.heroSubText} text-white-100`}
              >
                {roles[roleIndex]}
              </motion.p>
            </AnimatePresence>
          </div>

          <p className={`${styles.heroSubText} mt-1 text-secondary text-opacity-70 hidden sm:block`} style={{ fontSize: "clamp(14px, 1.5vw, 20px)" }}>
            I develop web apps, interfaces &amp; ML agents.
          </p>

          {/* Stat chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="flex gap-4 mt-8 flex-wrap"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex flex-col items-center bg-[#1d1836]/60 backdrop-blur-sm border border-[#915eff]/20 rounded-xl px-5 py-3 min-w-[80px]"
              >
                <span className="text-[#915eff] font-black text-xl">{s.value}</span>
                <span className="text-secondary text-xs mt-0.5 whitespace-nowrap">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ── Floating code card (desktop) ── */}
      <motion.div
        initial={{ opacity: 0, y: 50, scale: 0.92 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
        className="absolute right-6 sm:right-20 top-[150px] sm:top-[130px] hidden sm:block z-10"
      >
        <motion.div
          animate={{ y: [0, -14, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="bg-[#0f0d1a]/85 backdrop-blur-md border border-[#915eff]/35 rounded-2xl p-5 w-[310px] shadow-2xl shadow-[#915eff]/15"
        >
          {/* Terminal dots */}
          <div className="flex items-center gap-1.5 mb-4 pb-3 border-b border-white/8">
            <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <div className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="ml-2 text-secondary text-xs font-mono opacity-60">portfolio.js</span>
          </div>

          {/* Code lines */}
          <div className="font-mono text-[12.5px] leading-[1.65] space-y-0.5">
            {codeLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + i * 0.13, duration: 0.3 }}
                className={line.color}
                style={{ paddingLeft: `${line.indent * 16}px` }}
              >
                {line.text}
              </motion.div>
            ))}
          </div>

          {/* Blinking cursor */}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.9, repeat: Infinity }}
            className="inline-block w-[7px] h-[15px] bg-[#915eff] rounded-sm mt-2 align-middle"
          />
        </motion.div>

        {/* Card glow */}
        <div className="absolute -inset-3 bg-[#915eff]/8 rounded-3xl blur-xl pointer-events-none" />

        {/* Small floating tag below card */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="mt-3 ml-auto w-fit flex items-center gap-2 bg-[#1d1836]/80 border border-[#00cea8]/30 text-[#00cea8] text-xs font-mono px-3 py-1.5 rounded-full"
        >
          <motion.span
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-2 h-2 rounded-full bg-[#00cea8] inline-block"
          />
          available for hire
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'loop' }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
