import { useContext } from "react";
// import { ModalImg } from "../../components/Modal";
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
      <div className="2xl:w-[70rem] mx-auto">
        <h2 
          className="max-md:text-2xl md:text-3xl m-auto text-center w-fit rounded-full px-8 py-3 font-bold text-white 
            bg-gradient-to-tr to-lightblue via-blue-800 from-darkblue"
        >
          {language ? "CERTIFICADOS" : "CERTIFICATES"}
        </h2>
        <div 
          className="grid max-sm:grid-cols-1 max-lg:grid-cols-2 grid-cols-3 gap-5 my-6 w-10/12 mx-auto"
        >
          {dataCertificates.map((item, index) => (
            <div key={index}>
              <img 
                src={item.img} 
                alt={item.name}
                className="flex h-full object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}