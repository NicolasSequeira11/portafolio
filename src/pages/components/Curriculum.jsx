import React, { useContext } from "react";
import { PdfDownloadButton } from "../../components/Buttons";
import CVEnglish from "/media/cv-english.png";
import CVEnglishPDF from "/media/cv-english-nicolas-sequeira-front-developer.pdf";

import { DarkModeContext } from "../../context/DarkModeContext";
import { LanguageContext } from "../../context/LanguageContext";

export const Curriculum = () => {
  const { darkmode } = useContext(DarkModeContext);
  const { language } = useContext(LanguageContext);

  return(
    <div 
      className={`w-12/12 mx-auto max-md:pt-32 md:pt-40 max-md:pb-10 md:pb-20
        ${darkmode === "false" ? "bg-white" : "bg-firstDarkMode"}`
    }>
      <div className="m-auto text-center">
        <img 
          src={CVEnglish} 
          className="max-lg:w-11/12 lg:w-6/12 flex object-contain m-auto border-4 border-lightblue"
        />
        <div className="m-auto justify-center mt-12 w-fit">
          <PdfDownloadButton 
            extraClass="bg-gradient-to-tr to-lightblue via-blue-800 from-darkblue text-white shadow-md"
            pdfUrl={CVEnglishPDF} 
            pdfName="cv-english-nicolas-sequeira-front-developer.pdf"
          />
        </div>
      </div>
    </div>
  )
}