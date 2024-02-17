import React from "react";
import { PdfDownloadButton } from "../../components/Buttons";
import CVEnglish from "/media/cv-english.png";
import CVSpanish from "/media/cv-spanish.png";
import CVEnglishPDF from "/media/cv-english-nicolas-sequeira-front-developer.pdf";
import CVSpanishPDF from "/media/cv-nicolas-sequeira-front-developer.pdf";

export const Curriculum = ({ language, darkmode }) => {
  return(
    <div className={`w-12/12 mx-auto max-md:pt-32 md:pt-40 max-md:pb-10 md:pb-20
    ${darkmode === "false" ? "bg-white" : "bg-firstDarkMode"}`
    }>
      <div className="m-auto text-center">
        <img 
          src={language ? CVEnglish : CVSpanish} 
          className="max-lg:w-11/12 lg:w-6/12 flex object-contain m-auto border-4 border-lightblue"
        />
        <div className="m-auto justify-center mt-12 w-fit">
          <PdfDownloadButton 
            extraClass="bg-gradient-to-tr to-lightblue via-blue-800 from-darkblue text-white shadow-md"
            pdfUrl={language ? CVEnglishPDF : CVSpanishPDF} 
            pdfName={language 
              ? "cv-nicolas-sequeira-front-developer.pdf" 
              : "cv-english-nicolas-sequeira-front-developer.pdf"
            } 
          />
        </div>
      </div>
    </div>
  )
}