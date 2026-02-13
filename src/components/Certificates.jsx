/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { certificates } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const CertificateCard = ({ index, name, issuer, date, description }) => (
  <motion.div 
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full border border-secondary'
  >
    <div className='mt-1'>
      <h3 className='text-white font-bold text-[24px]'>{name}</h3>
      <p className='text-secondary font-semibold text-[16px]'>{issuer}</p>
      <p className='text-white-100 text-[12px] mt-1'>{date}</p>
      <p className='mt-4 text-secondary text-[14px] leading-[24px]'>{description}</p>
    </div>
  </motion.div>
);

const Certificates = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My achievements</p>
        <h2 className={styles.sectionHeadText}>Certificates.</h2>
      </motion.div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {certificates.map((cert, index) => (
          <CertificateCard key={`cert-${index}`} index={index} {...cert} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");