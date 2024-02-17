import React from "react";
import Photo from "/media/photo.jpg";

export const Profile = ({ language, darkmode}) => {
  return(
    <div 
      id="profile" 
      className={`w-12/12 mx-auto h-[100vh] text-white justify-center flex flex-col
      ${darkmode === "false" 
        ? "bg-gradient-to-tr to-lightblue via-blue-800 from-darkblue" 
        : "bg-gradient-to-tr to-secondDarkMode via-gray-700 from-firstDarkMode"}`
      }
    >
      <p 
        className="font-bold text-6xl max-md:mt-28 md:mt-36 max-sm:text-5xl text-center"
      >
        {language ? "Desarrollador Frontend" : "Frontend Developer"}
      </p>
      <p 
        className="mt-4 mb-14 text-xl mx-10 max-sm:text-2xl max-sm:px-3 text-center"
      >
        {language 
          ? "Construyendo experiencias, línea por línea." 
          : "Building experiences, line by line."
        }
      </p>
      <div 
        className="max-sm:w-10/12 sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-3/12 my-6 mx-auto"
      >
        <img 
          src={Photo} 
          className="rounded-full w-[80%] m-auto" 
        />
      </div>
    </div>
  )
}