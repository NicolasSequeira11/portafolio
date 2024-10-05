import React, { useContext } from "react";
import { dataSkills } from "../../data/dataSkills";

import { LanguageContext } from "../../context/LanguageContext";
import { DarkModeContext } from "../../context/DarkModeContext";

export const Skills = () => {
  const { darkmode } = useContext(DarkModeContext);
  const { language } = useContext(LanguageContext);

  return(
    <div 
      id="skills" 
      className={`mx-auto md:w-12/12 max-md:pt-12
        ${darkmode === "false" ? "bg-white" : "bg-firstDarkMode"}`}
    >
      <h2 
        className="max-md:text-3xl md:text-4xl m-auto text-center w-fit rounded-full px-8 py-3 font-bold text-white 
          bg-gradient-to-tr to-lightblue via-blue-800 from-darkblue"
      >
        {language ? "Habilidades" : "Skills and tools"}
      </h2>
      <div className="max-md:w-10/12 md:w-9/12 m-auto mt-14">
        {/* <p 
          className={`font-bold md:text-xl 
            ${darkmode === "false" ? "text-mydark" : "text-white"}`}
        >
            {language 
              ? "Frontend y diseño" 
              : "Frontend and design"
            }
        </p> */}
          <div className="flex m-auto flex-wrap">
            {dataSkills.front.map((item, index) => (
              <div 
                key={index}
                className="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 flex flex-wrap flex-col"
              >
                <img 
                  src={item.img} 
                  className={`${darkmode === "false" ? "" : "drop-shadow-md"}`}
                />
                <p 
                  className={`text-center font-semibold max-sm:text-sm 
                    ${darkmode === "false" ? "" : "text-fourthDarkMode"}`}
                >
                    {item.name}
                </p>
              </div>
            ))}
        </div>
      </div>
      
      <hr className={`border-b-1 mt-20 
        ${darkmode === "false" ? "border-mydark" : "border-thirdDarkMode" }`}>
      </hr>
    </div>
  )
}