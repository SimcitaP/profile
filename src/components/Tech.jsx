import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import useIsMobile from "../hooks/useIsMobile";

// eslint-disable-next-line react-refresh/only-export-components
const Tech = () => {
  const isMobile = useIsMobile(800);

  return (
    <div className='flex flex-row flex-wrap justify-center gap-8 sm:gap-10'>
      {technologies.map((technology) => (
        <div className='w-24 h-24 sm:w-28 sm:h-28' key={technology.name}>
          {isMobile ? (
            <div className='w-full h-full flex flex-col items-center justify-center gap-1 bg-black-100 border border-secondary/20 rounded-xl p-2 shadow-sm'>
              <img
                src={technology.icon}
                alt={technology.name}
                className='w-10 h-10 object-contain'
              />
              <p className='text-secondary text-[10px] text-center leading-tight w-full truncate'>
                {technology.name}
              </p>
            </div>
          ) : (
            <BallCanvas icon={technology.icon} />
          )}
        </div>
      ))}
    </div>
  );
};
// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(Tech, "");