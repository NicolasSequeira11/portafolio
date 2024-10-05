import React, { useContext } from "react";
import Photo from "/media/photo.jpg";

import { DarkModeContext } from "../../context/DarkModeContext";
import { LanguageContext } from "../../context/LanguageContext";

export const Profile = () => {
  const { darkmode } = useContext(DarkModeContext);
  const { language } = useContext(LanguageContext);

  return(
    <div 
      id="profile" 
      className={`w-12/12 mx-auto max-md:h-[105vh] text-white 
        justify-center flex flex-col
      ${darkmode === "false" 
        ? "bg-gradient-to-tr to-lightblue via-blue-800 from-darkblue" 
        : "bg-gradient-to-tr to-secondDarkMode via-gray-700 from-firstDarkMode"}`
      }
    >
      <div className="mt-3">
        <p 
          className="font-bold text-6xl max-md:mt-[10rem] md:mt-36 
            max-sm:text-[2.7rem] text-center"
        >
          {language ? "Desarrollador Frontend" : "Frontend Developer"}
        </p>
        <p 
          className="mt-4 mb-14 text-xl mx-10 max-sm:text-xl max-sm:px-3 text-center"
        >
          {language 
            ? "Construyendo experiencias, línea por línea." 
            : "Building experiences, line by line."
          }
        </p>
        <div 
          className="max-sm:w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-3/12 my-2 mx-auto"
        >
          <img 
            src={Photo} 
            className="rounded-full w-[80%] m-auto mb-14" 
          />
        </div>
      </div>
      
    </div>
  )
}