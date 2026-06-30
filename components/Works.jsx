'use client';

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { styles } from "@/styles";
import { SectionWrapper } from "@/hoc";
import { projects } from "@/constants";
import { fadeIn, textVariant } from "@/utils/motion";

const github = '/assets/github.png';

const ProjectCard = ({ index, id, name, description, tags, image, source_code_link, onViewDetails }) => (
  <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
    <div
      className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer transition-transform duration-300 hover:scale-[1.02]'
      onClick={() => window.open(source_code_link, "_blank")}
    >
      <div className='relative w-full h-[230px]'>
        <img src={image} alt='project_image' className='w-full h-full object-cover rounded-2xl' />
        <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
          <div
            onClick={(e) => { e.stopPropagation(); window.open(source_code_link, "_blank"); }}
            className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
          >
            <img src={github} alt='source code' className='w-1/2 h-1/2 object-contain' />
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <h3 className='dark:text-white text-gray-900 font-bold text-[24px]'>{name}</h3>
        <p className='mt-2 text-secondary text-[14px] line-clamp-3'>{description}</p>
      </div>
      <div className='mt-4 flex flex-wrap gap-2'>
        {tags.map((tag) => (
          <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
            #{tag.name}
          </p>
        ))}
      </div>
      <button
        onClick={(e) => { e.stopPropagation(); onViewDetails(); }}
        className="mt-5 w-full py-2 px-4 bg-primary dark:text-white text-gray-900 rounded-xl text-[14px] font-bold border border-secondary hover:bg-secondary transition-all cursor-pointer"
      >
        View Case Study
      </button>
    </div>
  </motion.div>
);

const Works = () => {
  const router = useRouter();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.heroHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through real-world examples of my work.
          Each project is briefly described with links to code repositories and live demos in it.
          It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
          Click on the github icon on the top right to view the source code / deployed webapp.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            index={index}
            {...project}
            onViewDetails={() => router.push(`/project/${project.id}`)}
          />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "projects");
