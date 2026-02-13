/* eslint-disable react-refresh/only-export-components */
import React, {useState} from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience, onClick }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={experience.icon}
            alt={experience.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>

        <button 
        onClick={onClick}
        className="mt-5 py-2 px-4 bg-tertiary text-white rounded-lg text-[12px] font-bold"
      >
        View Full Details
      </button>

    </VerticalTimelineElement>
  );
};

const Experience = () => {

  const [selectedExp, setSelectedExp] = useState(null);

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What I have done so far
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Work Experience.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>

      {/* Simple Modal Overlay */}
      {selectedExp && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="bg-primary p-8 rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-secondary">
            <h2 className="text-white text-3xl font-bold">{selectedExp.title}</h2>
            <p className="text-secondary font-semibold">{selectedExp.company_name}</p>
            <div className="mt-5 text-white-100 space-y-4">
               {/* Add more detailed fields here from your constants */}
               <p>{selectedExp.detailedDescription || "Add detailedDescription in constants/index.js"}</p>
            </div>
            <button 
              className="mt-8 bg-white text-black py-2 px-6 rounded-xl font-bold"
              onClick={() => setSelectedExp(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Experience, "work");