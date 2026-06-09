import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { certificates } from "../constants";
import { StarsCanvas } from "../components";

const CertificateDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const certificate = certificates.find((c) => c.id === id);

  if (!certificate) {
    return (
      <div className="relative z-0 bg-primary min-h-screen flex flex-col justify-center items-center text-center p-6">
        <h2 className="text-white text-3xl font-extrabold mb-4 font-poppins">Certificate Not Found</h2>
        <button
          onClick={() => navigate("/")}
          className="bg-gradient-to-r from-[#915eff] to-[#804dee] text-white py-3 px-8 rounded-xl font-bold hover:shadow-lg hover:shadow-purple-500/20 transition-all cursor-pointer"
        >
          Return to Home
        </button>
        <StarsCanvas />
      </div>
    );
  }

  return (
    <div className="relative z-0 bg-primary min-h-screen overflow-x-hidden font-poppins pb-24">
      <StarsCanvas />

      <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-[#151030]/40 to-transparent pointer-events-none z-[-1]" />

      <main className="max-w-4xl mx-auto px-6 pt-32 sm:pt-36">
        {/* Back navigation */}
        <motion.button
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          onClick={() => navigate("/")}
          className="group flex items-center gap-2 text-secondary hover:text-white font-semibold mb-8 border border-secondary/20 bg-tertiary/40 px-4 py-2 rounded-full cursor-pointer hover:bg-[#151030]/60 transition-all backdrop-blur-sm"
        >
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Back to Portfolio
        </motion.button>

        {/* Certificate Header Card */}
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
};

export default CertificateDetails;
