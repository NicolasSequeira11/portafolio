import React from "react";

export const Presentation = ({language, darkmode}) => {
  return(
    <div className={`mx-auto md:w-12/12 pt-14  ${darkmode === "false" ? "bg-white" : "bg-firstDarkMode"}`}>
      <p 
        className={`text-center font-semibold text-xl mx-auto max-md:w-10/12 max-md:text-justify md:w-9/12 ${darkmode === "false" ? "text-mydark" : "text-fourthDarkMode"}`}
      >
        {language 
          ? "Comencé en el desarrollo front hace más de 1 año y desde entonces no he dejado de estudiar y practicar. Estoy comprometido en compartir mis conocimientos y mejorar cada día." 
          : "I started in front-end development more than 1 year ago and since then I have not stopped studying and practicing. I am committed to share my knowledge and improve every day."
        }
      </p>
    </div>
  )
}