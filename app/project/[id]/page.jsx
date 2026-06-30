'use client';

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { projects } from "@/constants";

const github = '/assets/github.png';

export default function ProjectDetails() {
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="relative bg-primary min-h-screen flex flex-col justify-center items-center text-center p-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#151030] via-[#050816] to-[#100d25] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#915eff]/10 rounded-full blur-3xl pointer-events-none" />
        <h2 className="relative text-white text-3xl font-extrabold mb-4">Project Not Found</h2>
        <button
          onClick={() => router.push("/")}
          className="relative bg-gradient-to-r from-[#915eff] to-[#804dee] text-white py-3 px-8 rounded-xl font-bold hover:shadow-lg hover:shadow-purple-500/20 transition-all cursor-pointer"
        >
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div className="relative bg-primary min-h-screen overflow-x-hidden font-poppins pb-24">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#151030] via-[#050816] to-[#100d25] pointer-events-none" />
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-[#915eff]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-64 h-64 bg-[#00cea8]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#151030]/40 to-transparent pointer-events-none z-0" />

      <main className="relative z-10 max-w-6xl mx-auto px-6 pt-32 sm:pt-36">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => router.push("/")}
          className="group flex items-center gap-2 text-secondary hover:text-white font-semibold mb-8 border border-secondary/20 bg-tertiary/40 px-4 py-2 rounded-full cursor-pointer hover:bg-[#151030]/60 transition-all backdrop-blur-sm"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Portfolio
        </motion.button>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <h1 className="text-white text-4xl sm:text-6xl font-black leading-tight">
              {project.name}
            </h1>
            <p className="text-secondary text-lg leading-relaxed font-light">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => window.open(project.source_code_link, "_blank")}
                className="flex items-center gap-3 bg-[#100d25] border border-secondary/30 text-white font-bold px-6 py-3.5 rounded-xl hover:bg-[#151030] hover:border-[#915eff] transition-all duration-300 shadow-md shadow-primary/60 cursor-pointer"
              >
                <img src={github} alt="github" className="w-6 h-6 object-contain" />
                <span>View Repository</span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-6 relative group overflow-hidden rounded-3xl border border-secondary/20 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-[320px] sm:h-[400px] object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag.name}
                  className={`text-[12px] font-semibold px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full ${tag.color}`}
                >
                  #{tag.name}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-10"
        >
          <div className="md:col-span-4 space-y-8">
            <div className="bg-[#100d25]/60 border border-secondary/10 p-6 rounded-2xl backdrop-blur-md">
              <h3 className="text-white font-bold text-lg border-b border-secondary/10 pb-3 mb-4 flex items-center gap-2">
                <span className="text-[#915eff]">◼</span> Technologies Used
              </h3>
              <ul className="grid grid-cols-2 gap-3 text-secondary text-sm font-medium">
                {project.techStack?.map((tech) => (
                  <li
                    key={tech}
                    className="flex items-center gap-2 bg-[#151030] px-3 py-2 rounded-lg border border-secondary/5 hover:border-[#915eff]/30 transition-all text-white-100"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00cea8]" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#100d25]/60 border border-secondary/10 p-6 rounded-2xl backdrop-blur-md">
              <h3 className="text-white font-bold text-lg border-b border-secondary/10 pb-3 mb-4 flex items-center gap-2">
                <span className="text-[#bf61ff]">◼</span> Methodology
              </h3>
              <p className="text-secondary text-sm leading-relaxed">{project.methodology}</p>
            </div>
          </div>

          <div className="md:col-span-8 space-y-8">
            <div className="bg-[#100d25]/40 border border-secondary/10 p-8 rounded-2xl backdrop-blur-md space-y-4">
              <h3 className="text-white font-bold text-2xl flex items-center gap-3">
                <span className="text-[#f12711] text-lg">⚠️</span> The Challenge
              </h3>
              <p className="text-secondary leading-relaxed text-[16px] font-light">{project.problem}</p>
            </div>
            <div className="bg-gradient-to-br from-[#151030]/80 to-[#100d25]/80 border border-[#915eff]/30 p-8 rounded-2xl backdrop-blur-md space-y-4 shadow-lg shadow-purple-500/5">
              <h3 className="text-white font-bold text-2xl flex items-center gap-3">
                <span className="text-[#00cea8] text-lg">💡</span> The Solution
              </h3>
              <p className="text-[#dfd9ff] leading-relaxed text-[16px] font-light">{project.solution}</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
