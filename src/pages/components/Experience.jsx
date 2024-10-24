import Responsive from "../../components/Carousel"
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { LanguageContext } from "../../context/LanguageContext";

import logoLannister from "../../assets/media/experience/logo-lannister.png"
import logoMornar from "../../assets/media/experience/logo-mornar.png"
import logoAwaq from "../../assets/media/experience/logo-awaq.png"

export const Experience = () => {
  const { darkmode } = useContext(DarkModeContext);
  const { language } = useContext(LanguageContext);

  const arrayExperiencie = [
    logoAwaq,
    logoLannister,
    logoMornar,
  ]

  return(
    <div className={`mx-auto md:w-12/12 py-24
      ${darkmode === "false" ? "bg-white" : "bg-firstDarkMode"}`}
    >
      <div className="2xl:w-[70rem] mx-auto">
        <h2 
          className="max-md:text-2xl md:text-3xl m-auto text-center w-fit rounded-full px-8 py-3 font-bold text-white 
            bg-gradient-to-tr to-lightblue via-blue-800 from-darkblue"
        >
          {language ? "COLABORACIONES ACTUALES" : "CURRENT COLLABORATIONS"}
        </h2>
        <div className="mt-14">
          <Responsive 
            array={darkmode ? arrayExperiencie : arrayExperiencie}
          />
        </div>
      </div>
      
      <hr className={`border-b-1 mt-20 
        ${darkmode === "false" ? "border-mydark" : "border-thirdDarkMode" }`}>
      </hr>
    </div>
  )
}