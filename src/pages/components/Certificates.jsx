import React, { useContext } from "react";
import { ModalImg } from "../../components/Modal";
import { dataCertificates } from "../../data/dataCertificates";

import { DarkModeContext } from "../../context/DarkModeContext";
import { LanguageContext } from "../../context/LanguageContext";

export const Certificates = () => {
  const { darkmode } = useContext(DarkModeContext);
  const { language } = useContext(LanguageContext);

  return(
    <div 
      id="certificates"
      className={`py-20 ${darkmode === "false" ? "bg-white" : "bg-firstDarkMode"}`}
    >
      <h2 
        className="max-md:text-3xl md:text-4xl m-auto text-center w-fit rounded-full px-8 py-3 font-bold text-white 
          bg-gradient-to-tr to-lightblue via-blue-800 from-darkblue"
      >
        {language ? "Certificados" : "Certificates"}
      </h2>
      <div 
        className="flex flex-wrap my-6 w-10/12 mx-auto"
      >
        {dataCertificates.map((item, index) => (
          <ModalImg keyImg={index} img={item.img} />
        ))}
      </div>
    </div>
  )
}