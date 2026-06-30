'use client';

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Loader = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only show on a real page reload, not on client-side back/forward navigation
    const navEntry = performance.getEntriesByType('navigation')[0];
    const isReload = navEntry?.type === 'reload' || navEntry?.type === 'navigate';
    const seen = sessionStorage.getItem('loaderShown');

    if (isReload && !seen) {
      setVisible(true);
      sessionStorage.setItem('loaderShown', '1');
      const timer = setTimeout(() => setVisible(false), 2400);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-3"
          style={{ background: "radial-gradient(ellipse at 50% 40%, #130d2a 0%, #050816 70%)" }}
        >
          {/* Pulsing rings + initials */}
          <div className="relative flex items-center justify-center mb-4">
            <motion.div
              className="absolute w-28 h-28 rounded-full border-2 border-[#915eff]/25"
              animate={{ scale: [1, 1.45, 1], opacity: [0.35, 0, 0.35] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute w-20 h-20 rounded-full border-2 border-[#00cea8]/35"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
            />
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-16 h-16 rounded-full bg-gradient-to-br from-[#915eff] to-[#804dee] flex items-center justify-center shadow-xl shadow-purple-500/40"
            >
              <span className="text-white font-black text-2xl tracking-tight">SM</span>
            </motion.div>
          </div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="text-white font-black text-2xl tracking-[0.25em]"
          >
            SIMAMNKELE
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="text-secondary text-sm tracking-widest uppercase"
          >
            Full Stack Developer · Data Analyst
          </motion.p>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-6 w-52 h-[2px] bg-white/10 rounded-full overflow-hidden"
          >
            <motion.div
              className="h-full bg-gradient-to-r from-[#915eff] to-[#00cea8] rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
