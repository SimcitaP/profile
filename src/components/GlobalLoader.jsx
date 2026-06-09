import React, { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";
import { motion, AnimatePresence } from "framer-motion";

const GlobalLoader = ({ onFinished }) => {
  const { progress, active } = useProgress();
  const [shouldShow, setShouldShow] = useState(true);
  const [simProgress, setSimProgress] = useState(0);

  // Always animate 0→100 so the bar moves even when no 3D assets are loading
  useEffect(() => {
    if (simProgress >= 100) return;
    const id = setTimeout(
      () => setSimProgress((p) => Math.min(p + Math.random() * 12 + 4, 100)),
      90
    );
    return () => clearTimeout(id);
  }, [simProgress]);

  useEffect(() => {
    const realDone = progress >= 100 || !active;
    if (simProgress >= 100 && realDone) {
      const timer = setTimeout(() => {
        setShouldShow(false);
        if (onFinished) onFinished();
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [simProgress, progress, active, onFinished]);

  const displayProgress = Math.round(Math.max(simProgress, progress));

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#050816] flex flex-col justify-center items-center select-none"
        >
          {/* Logo or spinner */}
          <div className="flex flex-col items-center gap-6">
            <div className="relative flex items-center justify-center">
              {/* Outer pulsing ring */}
              <div className="w-24 h-24 rounded-full border-4 border-t-transparent border-[#915eff] animate-spin" />
              {/* Inner glowing dot */}
              <div className="absolute w-12 h-12 rounded-full bg-[#915eff]/20 animate-pulse flex items-center justify-center">
                <span className="text-[#915eff] text-[10px] font-bold">SM</span>
              </div>
            </div>

            <div className="text-center">
              <h2 className="text-white text-xl font-bold tracking-widest font-poppins uppercase">
                Loading Simamnkele's Profile
              </h2>
              <p className="text-secondary text-xs mt-1">Please wait for 3D assets to load</p>
            </div>

            {/* Progress Bar Container */}
            <div className="w-64 bg-tertiary h-2.5 rounded-full overflow-hidden border border-secondary/20 shadow-inner">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${displayProgress}%` }}
                transition={{ duration: 0.1 }}
                className="bg-gradient-to-r from-[#915eff] to-[#00cea8] h-full"
              />
            </div>

            <span className="text-white text-lg font-extrabold font-mono">
              {displayProgress}%
            </span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GlobalLoader;
