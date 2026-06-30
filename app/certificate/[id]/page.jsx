'use client';

import { useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { certificates } from "@/constants";

export default function CertificateDetails() {
  const { id } = useParams();
  const router = useRouter();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const certificate = certificates.find((c) => c.id === id);

  if (!certificate) {
    return (
      <div className="relative bg-primary min-h-screen flex flex-col justify-center items-center text-center p-6">
        <div className="absolute inset-0 bg-gradient-to-br from-[#151030] via-[#050816] to-[#100d25] pointer-events-none" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#915eff]/10 rounded-full blur-3xl pointer-events-none" />
        <h2 className="relative text-white text-3xl font-extrabold mb-4">Certificate Not Found</h2>
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
      <div className="fixed inset-0 bg-gradient-to-br from-[#151030] via-[#050816] to-[#100d25] pointer-events-none" />
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-[#915eff]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-64 h-64 bg-[#bf61ff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#151030]/40 to-transparent pointer-events-none z-0" />

      <main className="relative z-10 max-w-4xl mx-auto px-6 pt-32 sm:pt-36">
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => router.push("/")}
          className="group flex items-center gap-2 text-secondary hover:text-white font-semibold mb-8 border border-secondary/20 bg-tertiary/40 px-4 py-2 rounded-full cursor-pointer hover:bg-[#151030]/60 transition-all backdrop-blur-sm"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Portfolio
        </motion.button>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-[#1d1836]/60 border border-secondary/10 p-8 rounded-3xl backdrop-blur-md relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#915eff]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-secondary/10">
            <div>
              <h1 className="text-white text-2xl sm:text-4xl font-extrabold leading-tight">
                {certificate.name}
              </h1>
              <p className="text-[#915eff] font-semibold text-lg mt-1">{certificate.issuer}</p>
            </div>
            <div className="text-secondary font-medium font-mono text-sm sm:text-base sm:text-right shrink-0">
              {certificate.date}
            </div>
          </div>

          <div className="mt-8 space-y-6">
            <div>
              <h2 className="text-secondary font-bold uppercase tracking-wider text-xs mb-3">
                About this Certificate
              </h2>
              <p className="text-white-100 text-lg leading-relaxed font-light">
                {certificate.description}
              </p>
            </div>

            {certificate.link && (
              <div className="pt-4">
                <a
                  href={certificate.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#915eff] to-[#804dee] text-white py-3 px-8 rounded-xl font-bold hover:shadow-lg hover:shadow-purple-500/20 transition-all"
                >
                  View Certificate
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
