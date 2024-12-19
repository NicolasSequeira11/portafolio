// import Responsive from "../../components/Carousel"
import { dataExperience } from "../../data/dataExperience";
import { useContext } from "react";
import { DarkModeContext } from "../../context/DarkModeContext";
import { LanguageContext } from "../../context/LanguageContext";
import { ExperienceCard } from "../../components/experience/ExperienceCard";

// import logoLannister from "../../assets/media/experience/logo-lannister.png"
// import logoMornar from "../../assets/media/experience/logo-mornar.png"
// import logoAwaq from "../../assets/media/experience/logo-awaq.png"
// import logoASF from "../../assets/media/experience/logo-asf.png"

export const Experience = () => {
  const { darkmode } = useContext(DarkModeContext);
  const { language } = useContext(LanguageContext);

  // const arrayExperiencie = [
  //   logoAwaq,
  //   logoLannister,
  //   logoASF,
  //   logoMornar,
  // ]

  return(
    <div className={`mx-auto md:w-12/12 py-24
      ${darkmode === "false" ? "bg-white" : "bg-firstDarkMode"}`}
    >
      <div className="2xl:w-[70rem] mx-auto">
        <h2 
          className="max-md:text-2xl md:text-3xl m-auto text-center w-fit rounded-full px-8 py-3 font-bold 
            text-white max-md:w-8/12
            bg-gradient-to-tr to-lightblue via-blue-800 from-darkblue"
        >
          {language ? "EXPERIENCIA PROFESIONAL" : "PROFESSIONAL EXPERIENCE"}
        </h2>
        {/* <div className="mt-14">
          <Responsive 
            array={darkmode ? arrayExperiencie : arrayExperiencie}
          />
        </div> */}

        <div className="w-10/12 mx-auto mt-14">
          {dataExperience.map((item, index) => (
            <div 
              key={index} 
              className={` border-darkblue border-opacity-10 py-10 
                ${index === dataExperience.length - 1 ? "" : "border-b-[1px]"}`
              }
            >
              <ExperienceCard 
                image={item.img}
                logo={darkmode === "false" ? item.logo : item.logoDark}
                title={item.name}
                description={language ? item.descriptionES : item.descriptionEN}
                link={item.url}
              />
            </div>
          ))}
        </div>
      </div>
      
      <hr className={`border-b-1 mt-20 
        ${darkmode === "false" ? "border-mydark" : "border-thirdDarkMode" }`}>
      </hr>
    </div>
  )
}