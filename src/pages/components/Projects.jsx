import React, { useState, useContext } from "react";
import {Tooltip, Button} from "@nextui-org/react";
import { dataProjects } from "../../data/dataProjects";

import { DarkModeContext } from "../../context/DarkModeContext";
import { LanguageContext } from "../../context/LanguageContext";

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const { darkmode } = useContext(DarkModeContext);
  const { language } = useContext(LanguageContext);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return(
    <div 
      id="projects" 
      className={`py-20 
        ${darkmode === "false" ? "bg-white" : "bg-firstDarkMode"}`}
    >
      <h2 
        className="max-md:text-3xl md:text-4xl m-auto text-center w-fit rounded-full px-8 py-3 font-bold text-white 
          bg-gradient-to-tr to-lightblue via-blue-800 from-darkblue"
      >
        {language ? "Proyectos" : "Projects"}
      </h2>
      <div 
        className="flex mt-3 flex-wrap mx-auto w-10/12"
      >
        {dataProjects.map((item, index) => (
          <a 
            key={index} 
            href={item.url}
            target="_blank"
            className="sm:w-1/2 lg:w-1/3 my-6"
          >
            <div 
              onMouseEnter={() => handleMouseEnter(index)} 
              onMouseLeave={handleMouseLeave}
              className={`w-11/12 mx-auto pt-2 h-fit shadow-md rounded-2xl hover:shadow-xl 
                ${darkmode === "false" ? "bg-white" : "bg-thirdDarkMode"}`} 
            >
              <img 
                src={darkmode === "false" ? item.logo : item.logoDark} 
                className={`w-7/12 mx-auto my-4 h-[45px] object-contain ${
                  hoveredIndex === index ? "translate-y-2 transition duration-75 ease-in" : "transition duration-75 ease-in"
                }`}
              />
              <img 
                src={hoveredIndex === index ? item.gif : item.img} 
                className="flex w-10/12 mb-6 mx-auto" 
              />
              <div 
                className={`mt-5 rounded-b-2xl flex flex-wrap 
                ${darkmode === "false" 
                  ? "bg-gradient-to-tr to-lightblue via-blue-800 from-darkblue" 
                  : "bg-gradient-to-tr to-secondDarkMode via-gray-700 from-firstDarkMode"}`
                }
              >
                {item.skills.map((item, index) => (
                  <div 
                    className="w-1/6" 
                    key={index}
                  >
                    <div className="flex gap-2">
                      <Tooltip 
                        content={item.name} 
                        className="bg-gradient-to-tr to-lightblue via-blue-800 from-darkblue text-white rounded-full"
                      >
                          <img 
                            src={item.img} 
                            className="w-10/12 mx-auto" 
                          />
                      </Tooltip>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
      <hr className={`border-b-1 mt-20 
        ${darkmode === "false" ? "border-mydark" : "border-thirdDarkMode" }`}>
      </hr>
    </div>
  )
}