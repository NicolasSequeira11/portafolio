import React, { useContext } from "react";
import MessageIcon from '@mui/icons-material/Message';

import { DarkModeContext } from "../../context/DarkModeContext";
import { LanguageContext } from "../../context/LanguageContext";

export const Contact = () => {
  const { darkmode } = useContext(DarkModeContext);
  const { language } = useContext(LanguageContext);

  return(
    <div className={`${darkmode === "false" ? "bg-white" : "bg-firstDarkMode"}`}>
      <div 
        id="contact"
        className={`max-md:py-10 md:py-14 lg:py-20 mb-10 max-md:w-10/12 md:w-8/12 mx-auto rounded-2xl
          ${darkmode === "false" 
            ? "bg-gradient-to-tr to-lightblue via-blue-800 from-darkblue" 
            : "bg-gradient-to-tr to-secondDarkMode via-gray-700 from-firstDarkMode"}`
          }
      >
        <p className="max-md:text-xl md:text-3xl lg:text-4xl mx-5 text-white mb-4 font-bold text-center">
          {language 
            ? "Estoy aquí para ayudarte con tu proyecto." 
            : "I'm here to help you with your project."
          }
        </p>
        <p className="max-md:text-sm md:text-xl lg:text-2xl mx-5 text-white font-semibold text-center">
          {language 
            ? "Preparado para nuevas oportunidades." 
            : "Ready for new opportunities."
          }
        </p>
        <div 
          className={`
            mx-auto transition max-md:mt-10 md:mt-20 duration-100 ease-in-out 
            py-4 max-md:w-10/12 md:w-6/12 shadow-xl shadow-gray-800 rounded-full
            border-2 cursor-pointer
            hover:border-2 hover:border-white hover:from-transparent hover:text-white
              ${darkmode === "false" 
                ? "bg-gradient-to-tr from-gray-100 via-gray-50 to-white border-white text-lightblue hover:shadow-darkblue" 
                : "bg-gradient-to-tr to-lightblue via-blue-800 from-darkblue border-darkblue text-white hover:shadow-md" }`
              }
        >
          <div className="w-10/12 mx-auto flex justify-center">
            <MessageIcon 
              className="my-auto me-3" 
            />
            <a 
              href="mailto:nicosequeira1997@hotmail.com" 
              target="_blank" 
              className="font-bold max-md:text-2xl md:text-3xl"
            >
              {language ? "CONTACTAR" : "GET IN TOUCH"}
            </a>
          </div>
        </div>
      </div>
      <hr className={`border-b-1 mt-20 
        ${darkmode === "false" ? "border-mydark" : "border-thirdDarkMode" }`}>
      </hr>
    </div>
  )
}