import React from "react";

export const Skills = ({ language, darkmode }) => {

  const dataSkills = {
    "front": [{
        "name": "React",
        "img": "./media/skills/react.png",
        "imgDark": "./media/skills/react.png"
      },
      {
        "name": "Tailwind",
        "img": "./media/skills/tailwind.png",
        "imgDark": "./media/skills/tailwind.png"
      },
      {
        "name": "HTML",
        "img": "./media/skills/html.png",
        "imgDark": "./media/skills/html.png"
      },
      {
        "name": "CSS",
        "img": "./media/skills/css.png",
        "imgDark": "./media/skills/css.png"
      },
      {
        "name": "Javascript",
        "img": "./media/skills/javascript.png",
        "imgDark": "./media/skills/javascript.png"
      },
      {
        "name": "TypeScript",
        "img": "./media/skills/typescript.png",
        "imgDark": "./media/skills/typescript.png"
      },
      {
        "name": "sass",
        "img": "./media/skills/sass.png",
        "imgDark": "./media/skills/sass.png"
      },
      {
        "name": "Bootstrap",
        "img": "./media/skills/bootstrap.png",
        "imgDark": "./media/skills/bootstrap.png"
      },
      {
        "name": "React Bootstrap",
        "img": "./media/skills/react-bootstrap.png",
        "imgDark": "./media/skills/react-bootstrap.png"
      },
      {
        "name": "Material UI",
        "img": "./media/skills/mui.png",
        "imgDark": "./media/skills/mui.png"
      },
      {
        "name": "NextUI",
        "img": "./media/skills/nextui.png",
        "imgDark": "./media/skills/nextui-darkmode.png"
      },
      {
        "name": "Vite",
        "img": "./media/skills/vite.png",
        "imgDark": "./media/skills/vite.png"
      },
      {
        "name": "Photoshop",
        "img": "./media/skills/photoshop.png",
        "imgDark": "./media/skills/photoshop.png"
      },
      {
        "name": "Figma",
        "img": "./media/skills/figma.png",
        "imgDark": "./media/skills/figma.png"
      }
    ],
    "back": [{
        "name": "API",
        "img": "./media/skills/api.png",
        "imgDark": "./media/skills/api.png"
      },
      {
        "name": "GitHub",
        "img": "./media/skills/github.png",
        "imgDark": "./media/skills/github-darkmode.png"
      },
      {
        "name": "Node.js",
        "img": "./media/skills/nodejs.png",
        "imgDark": "./media/skills/nodejs-darkmode.png"
      },
      {
        "name": "Trello",
        "img": "./media/skills/trello.png",
        "imgDark": "./media/skills/trello.png"
      },
      {
        "name": "MariaDB",
        "img": "./media/skills/mariadb.png",
        "imgDark": "./media/skills/mariadb-darkmode.png"
      }
    ]
  }

  return(
    <div id="skills" className={`mx-auto md:w-12/12 pt-14  ${darkmode === "false" ? "bg-white" : "bg-firstDarkMode"}`}>
      <h2 
        className="max-md:text-3xl md:text-4xl m-auto text-center w-fit rounded-full px-8 py-3 font-bold text-white bg-gradient-to-tr to-lightblue via-blue-800 from-darkblue"
      >
        {language ? "Habilidades" : "Skills"}
      </h2>
      <div className="max-md:w-10/12 md:w-9/12 m-auto mt-14">
        <p 
          className={`font-bold md:text-xl ${darkmode === "false" ? "text-mydark" : "text-white"}`}>
            {language ? "Frontend y diseño" : "Frontend and design"}
        </p>
          <div className="flex m-auto flex-wrap">
          {dataSkills.front.map((item, index) => (
            <div 
              className="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 flex flex-wrap flex-col"
            >
              <img 
                src={item.img} 
                className={`${darkmode === "false" ? "" : "drop-shadow-md"}`}
              />
              <p 
                className={`text-center font-semibold max-sm:text-sm ${darkmode === "false" ? "" : "text-fourthDarkMode"}`}
              >
                  {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-md:w-10/12 md:w-9/12 m-auto mt-20">
        <p 
          className={`font-bold md:text-xl ${darkmode === "false" ? "text-mydark" : "text-white"}`}>
            {language ? "Backend y gestión de proyectos" : "Backend and project management"}
        </p>
          <div 
            className="flex m-auto flex-wrap"
          >
          {dataSkills.back.map((item, index) => (
            <div 
              className="w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 flex flex-wrap flex-col"
            >
              <img 
                src={darkmode === "false" ? item.img : item.imgDark} 
                className={`${darkmode === "false" ? "" : "drop-shadow-md"}`}
              />
              <p 
                className={`text-center font-semibold max-sm:text-sm ${darkmode === "false" ? "" : "text-fourthDarkMode"}`}
              >
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
      <hr className={`border-b-1 mt-20 ${darkmode === "false" ? "border-mydark" : "border-thirdDarkMode" }`}></hr>
    </div>
  )
}