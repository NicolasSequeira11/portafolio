import React, { useState } from "react";

export const Projects = ({navigate, language, setLanguage, isDarkMode, setIsDarkMode, darkmode}) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const dataProjects = [
    {
      "name":"Mornar Store", 
      "logo":"./media/projects/mornar-logo.png",
      "logoDark":"./media/projects/mornar-logo-darkmode.png",
      "img":"./media/projects/mornar-mockup.png",
      "gif":"./media/projects/mornar-gif.gif",
      "url": "https://nicolassequeira11.github.io/mornartcg/",
      "skills": [
        "./media/skills-projects/react.png",
        "./media/skills-projects/tailwind.png",
        "./media/skills-projects/mui.png",
        "./media/skills-projects/vite.png",
        "./media/skills-projects/react-bootstrap.png",
        "./media/skills-projects/api.png"
      ]
    },
    {
      "name":"Jóvenes a Programar", 
      "logo":"./media/projects/jap-logo.png", 
      "logoDark":"./media/projects/jap-logo-darkmode.png",
      "img":"./media/projects/jap-mockup.png", 
      "gif":"./media/projects/jap-gif.gif",
      "url": "https://nicolassequeira11.github.io/53148269_proyecto-final-jap/login.html",
      "skills": [
        "./media/skills-projects/html.png",
        "./media/skills-projects/css.png",
        "./media/skills-projects/js.png",
        "./media/skills-projects/bootstrap.png",
        "./media/skills-projects/api.png",
        "./media/skills-projects/mariadb.png"    
      ]
    },
    {
      "name":"Legere", 
      "logo":"./media/projects/legere-logo.png", 
      "logoDark":"./media/projects/legere-logo-darkmode.png",
      "img":"./media/projects/legere-mockup.png", 
      "gif":"./media/projects/legere-gif.gif",
      "url": "https://nicolassequeira11.github.io/Legere/",
      "skills": [
        "./media/skills-projects/react.png",
        "./media/skills-projects/node.png",
        "./media/skills-projects/api.png",
        "./media/skills-projects/css.png",
        "./media/skills-projects/js.png",
        "./media/skills-projects/bootstrap.png"
      ]
    },
    {
      "name":"Bonvoyage", 
      "logo":"./media/projects/bonvoyage-logo.png", 
      "logoDark":"./media/projects/bonvoyage-logo-darkmode.png",
      "img":"./media/projects/bonvoyage-mockup.png", 
      "gif":"./media/projects/bonvoyage-gif.gif",
      "url": "https://nicolassequeira11.github.io/bonvoyage/",
      "skills": [
        "./media/skills-projects/api.png",
        "./media/skills-projects/html.png",
        "./media/skills-projects/css.png",
        "./media/skills-projects/sass.png",
        "./media/skills-projects/js.png",
        "./media/skills-projects/bootstrap.png"
      ]
    },
    {
      "name":"Wantan", 
      "logo":"./media/projects/wantan-logo.png", 
      "logoDark":"./media/projects/wantan-logo-darkmode.png",
      "img":"./media/projects/wantan-mockup.png", 
      "gif":"./media/projects/wantan-gif.gif",
      "url": "https://nicolassequeira11.github.io/wantan/",
      "skills": [
        "./media/skills-projects/html.png",
        "./media/skills-projects/css.png",
        "./media/skills-projects/sass.png",
        "./media/skills-projects/js.png",
        "./media/skills-projects/bootstrap.png",
        "./media/skills-projects/photoshop.png"    
      ]
    },
    {
      "name":"Veterinaria Santa Clara", 
      "logo":"./media/projects/veterinaria-logo.png", 
      "logoDark":"./media/projects/veterinaria-logo-darkmode.png",
      "img":"./media/projects/veterinaria-mockup.png", 
      "gif":"./media/projects/veterinaria-gif.gif",
      "url": "https://nicolassequeira.000webhostapp.com/",
      "skills": [
        "./media/skills-projects/html.png",
        "./media/skills-projects/css.png",
        "./media/skills-projects/sass.png",
        "./media/skills-projects/js.png",
        "./media/skills-projects/bootstrap.png",
        "./media/skills-projects/photoshop.png"
      ]
    },
    {
      "name":"Azul Estetica", 
      "logo":"./media/projects/peluqueria-logo.png", 
      "logoDark":"./media/projects/peluqueria-logo-darkmode.png",
      "img":"./media/projects/peluqueria-mockup.png", 
      "gif":"./media/projects/peluqueria-gif.gif",
      "url": "https://nicolassequeira11.github.io/azul-estetica/",
      "skills": [
        "./media/skills-projects/html.png",
        "./media/skills-projects/css.png",
        "./media/skills-projects/sass.png",
        "./media/skills-projects/js.png",
        "./media/skills-projects/bootstrap.png",
        "./media/skills-projects/photoshop.png"
      ]
    }
  ]

  return(
    <div id="projects" className={`py-20 ${darkmode === "false" ? "bg-white" : "bg-firstDarkMode"}`}>
      <h2 
        className="max-md:text-3xl md:text-4xl m-auto text-center w-fit rounded-full px-8 py-3 font-bold text-white bg-gradient-to-tr to-lightblue via-blue-800 from-darkblue"
      >
        {language ? "Proyectos" : "Projects"}
      </h2>
      <div 
        className="flex mt-3 flex-wrap mx-auto w-10/12"
      >
        {dataProjects.map((item, index) => (
          <a 
            key={index} 
            href={item.url}
            target="_blank"
            className="sm:w-1/2 lg:w-1/3 my-6"
          >
            <div 
              className={`w-11/12 mx-auto pt-2 h-fit shadow-md rounded-2xl hover:shadow-xl ${darkmode === "false" ? "bg-white" : "bg-thirdDarkMode"}`} 
              onMouseEnter={() => handleMouseEnter(index)} 
              onMouseLeave={handleMouseLeave}
            >
              <img 
                src={darkmode === "false" ? item.logo : item.logoDark} 
                className={`w-7/12 mx-auto my-6 h-[45px] object-contain ${
                  hoveredIndex === index ? "translate-y-2 transition duration-75 ease-in" : "transition duration-75 ease-in"
                }`}
              />
              <img 
                src={hoveredIndex === index ? item.gif : item.img} 
                className="flex w-10/12 mx-auto" 
              />
              <div 
                className={`mt-5 rounded-b-2xl flex flex-wrap 
                ${darkmode === "false" 
                  ? "bg-gradient-to-tr to-lightblue via-blue-800 from-darkblue" 
                  : "bg-gradient-to-tr to-secondDarkMode via-gray-700 from-firstDarkMode"}`
                }
              >
                {item.skills.map((item, index) => (
                  <div className="w-1/6">
                    <img 
                      src={item} 
                      className="w-10/12 mx-auto" 
                    />
                  </div>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
      <hr className={`border-b-1 mt-20 ${darkmode === "false" ? "border-mydark" : "border-thirdDarkMode" }`}></hr>
    </div>
  )
}