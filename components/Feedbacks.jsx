'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { styles } from '@/styles';
import { SectionWrapper } from '@/hoc';
import { fadeIn, textVariant } from '@/utils/motion';
import { testimonials } from '@/constants';

const FeedbackCard = ({ index, testimonial, name, designation, company, image }) => {
  const [expanded, setExpanded] = useState(false);
  const firstSentence = testimonial.match(/^.+?[.!?](?!\.)/)?.[0] ?? testimonial;
  const hasMore = firstSentence.length < testimonial.length;

  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className='bg-black-200 sm:p-10 p-6 rounded-3xl xs:w-[320px] w-full'
    >
      <p className='dark:text-white text-gray-900 font-black sm:text-[48px] text-[36px]'>&quot;</p>

      <div className='mt-1'>
        <p className='dark:text-white text-gray-800 tracking-wider text-[18px]'>
          {expanded ? testimonial : firstSentence}
          {!expanded && hasMore && "..."}
        </p>

        {hasMore && (
          <button
            onClick={() => setExpanded(!expanded)}
            className='mt-3 text-[14px] text-secondary hover:text-white transition-colors underline underline-offset-2'
          >
            {expanded ? "Read less" : "Read more"}
          </button>
        )}

        <div className='mt-7 flex justify-between items-center gap-1'>
          <div className='flex-1 flex flex-col'>
            <p className='dark:text-white text-gray-900 font-medium text-[16px]'>
              <span className='blue-text-gradient'>@</span> {name}
            </p>
            <p className='mt-1 text-secondary text-[12px]'>
              {designation} of {company}
            </p>
          </div>
          <img src={image} alt={`feedback_by-${name}`} className='w-10 h-10 rounded-full object-cover' />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => (
  <div className='mt-12 bg-black-100 rounded-[20px]'>
    <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What others say</p>
        <h2 className={styles.sectionHeadText}>Testimonials.</h2>
      </motion.div>
    </div>
    <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
      {testimonials.map((testimonial, index) => (
        <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
      ))}
    </div>
  </div>
);

export default SectionWrapper(Feedbacks, "");
