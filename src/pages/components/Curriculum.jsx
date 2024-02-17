import React from "react";
import { useNavigate } from "react-router-dom";
import CVEnglish from "../../media/cv-english.png";
import CVSpanish from "../../media/cv-spanish.png";

export const Curriculum = ({language, darkmode}) => {
  return(
    <div className={`w-12/12 mx-auto max-md:pt-32 md:pt-40 max-md:pb-10 md:pb-20
    ${darkmode === "false" ? "bg-white" : "bg-firstDarkMode"}`
    }>
      <div className="m-auto ">
        <img 
          src={language ? CVEnglish : CVSpanish} 
          className="max-lg:w-11/12 lg:w-6/12 flex object-contain m-auto "
        />
      </div>
    </div>
  )
}