import { Tilt } from "react-tilt";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

// eslint-disable-next-line react-refresh/only-export-components
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  onViewDetails,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
        onClick={() => window.open(source_code_link, "_blank")}
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
            onClick={() => window.open(source_code_link, "_blank")}
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={github}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
        {/* New Button for Details */}
        <button 
          onClick={onViewDetails}
          className="mt-5 w-full py-2 px-4 bg-primary text-white rounded-xl text-[14px] font-bold border border-secondary hover:bg-secondary transition-all"
        >
          View Case Study
        </button>
      </Tilt>
    </motion.div>
  );
};


// eslint-disable-next-line react-refresh/only-export-components
const Works = () => {

  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>
        My work
      </p>
      <h2 className={styles.heroHeadText}>
        Projects
      </h2>
    </motion.div>

    <div className="w-full flex">
      <motion.p
      variants={fadeIn("", "", 0.1, 1)}
      className="mt-3 text-secondary text=[17px] max-w-3xl loading-[30px]">
      Following projects showcases my skills and experience through
          real-world examples of my work. Each project is briefly described with
          links to code repositories and live demos in it. It reflects my
          ability to solve complex problems, work with different technologies,
          and manage projects effectively.

          Click on the github icon on the top right to view the source code / deployed webapp.
      </motion.p>
    </div>
    
      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard 
          key={`project-${index}`} 
          index={index} 
          {...project} 
          onViewDetails={() => setSelectedProject(project)}
          />
        ))}
      </div>

       {/* Project Detail Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4">
          <div className="bg-primary p-8 rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto border border-secondary relative">
            <button 
              onClick={() => setSelectedProject(null)}
              className="absolute top-5 right-5 text-secondary hover:text-white font-bold text-2xl"
            >✕</button>
            
            <h2 className="text-white text-3xl font-bold">{selectedProject.name}</h2>
            
            <div className="mt-7 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-secondary font-bold uppercase tracking-wider text-xs">Tech Stack</h4>
                  <ul className="list-disc ml-5 mt-2 text-white-100 text-sm">
                    {/* Ensure these exist in your constants/index.js */}
                    {selectedProject.techStack?.map(tech => <li key={tech}>{tech}</li>)}
                  </ul>
                </div>
                <div>
                  <h4 className="text-secondary font-bold uppercase tracking-wider text-xs">Methodology</h4>
                  <p className="text-white-100 mt-2 text-sm">{selectedProject.methodology}</p>
                </div>
              </div>

              <div>
                <h4 className="text-secondary font-bold uppercase tracking-wider text-xs">The Problem</h4>
                <p className="text-white-100 mt-2 text-sm leading-relaxed">{selectedProject.problem}</p>
              </div>

              <div>
                <h4 className="text-secondary font-bold uppercase tracking-wider text-xs">The Solution</h4>
                <p className="text-white-100 mt-2 text-sm leading-relaxed">{selectedProject.solution}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Works, "projects");