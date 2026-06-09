/* eslint-disable react-refresh/only-export-components */
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
const ExperienceCard = ({ experience, onClick }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "var(--tl-card-bg)", color: "var(--tl-card-text)" }}
      contentArrowStyle={{ borderRight: "7px solid var(--tl-card-arrow)" }}
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
        <h3 className='dark:text-white text-gray-900 text-[24px] font-bold'>{experience.title}</h3>
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
        className="mt-5 py-3 px-4 bg-tertiary dark:text-white text-gray-900 rounded-lg text-[14px] font-bold cursor-pointer dark:hover:bg-[#151030] hover:bg-[#d5cfff] transition-colors w-full sm:w-auto"
      >
        View Full Details
      </button>

    </VerticalTimelineElement>
  );
};

const Experience = () => {
  const navigate = useNavigate();

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
          {[...experiences].reverse().map((experience) => (
            <ExperienceCard
              key={experience.id}
              experience={experience}
              onClick={() => navigate(`/experience/${experience.id}`)}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");