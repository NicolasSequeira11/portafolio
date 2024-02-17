import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AcmeLogo } from "../../AcmeLogo.jsx";
import logoHorizontal from "/media/logo-black-horizontal.png";
import logoHorizontalDarkMode from "/media/logo-white-horizontal.png";
import { PrincipalButton } from "../../components/Buttons.jsx";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

export const Nav = ({navigate, language, setLanguage, isDarkMode, setIsDarkMode, darkmode}) => {
  
  const handleLanguage = () => {
    setLanguage(prevLanguage => !prevLanguage);
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDarkMode = () => {
    setIsDarkMode(prevIsDarkMode => {
      const newIsDarkMode = !prevIsDarkMode;
      localStorage.setItem("darkmodeNS", JSON.stringify(newIsDarkMode));
      return newIsDarkMode;
    });
  };

  const menuItems = [
    { nameES: "Habilidades", nameEN: "Skills", target: "skills" },
    { nameES: "Proyectos", nameEN: "Projects", target: "projects" },
    { nameES: "Contacto", nameEN: "Contact", target: "contact" },
    { nameES: "Certificados", nameEN: "Certificates", target: "certificates" }
  ];

  return (
    <header className="sticky top-10 w-full x z-10">
      <div className={`m-auto py-4 px-7 left-0 right-0 absolute md:shadow-md md:rounded-full flex md:w-10/12 
        ${darkmode === "false" ? "bg-white" : "bg-secondDarkMode" }`}
      >
        {/* Logo */}
        <div className="lg:w-1/4 my-auto">
          <div>
            <Link to="/" className="flex cursor-pointer">
              <AcmeLogo 
                logo={darkmode === "false" ? logoHorizontal : logoHorizontalDarkMode}
              />
            </Link>
          </div>
        </div>

        {/* Links */}
        <div className="m-auto flex w-2/4 justify-center">
          {/* Links de navegación */}
            <Link 
              to="/"
              className={`font-semibold hidden xl:flex w-fit cursor-pointer" 
                ${darkmode === "false" 
                  ? "hover:text-blue-800 text-myblack m-auto" 
                  : "text-white hover:text-fourthDarkMode mx-auto"}`
                }
            >
              {language ? "Inicio" : "Home"}
            </Link>
          {menuItems.map((item, index) => (
            <div key={index} className="flex m-auto cursor-pointer">
              <a
                onClick={() => scrollToSection(item.target)}
                className={`font-semibold hidden xl:flex 
                  ${darkmode === "false" 
                    ? "hover:text-blue-800 text-myblack m-auto" 
                    : "text-white hover:text-fourthDarkMode"}`
                  }
              >
                {language ? item.nameES : item.nameEN}
              </a>
            </div>
          ))}
          </div>
          <div className="w-1/4 my-auto flex justify-end">
            <div className="flex my-auto w-fit">
              <div className="justify-end ms-2 flex w-full">
                <Link to="/curriculum">
                  <PrincipalButton 
                    text="CV" 
                    textColor="text-white font-semibold" 
                    shadow="shadow-md" 
                    background="bg-gradient-to-tr to-lightblue via-blue-800 from-darkblue" 
                  />
                </Link>
              </div>
              <div className="justify-end ms-2 flex w-full">
                <PrincipalButton 
                  text={language ? "ES" : "EN"} 
                  textColor={`font-semibold ${darkmode === "false" ? "text-myblack" : "bg-thirdDarkMode text-white"}`} 
                  shadow="shadow-md hover:shadow-lg" 
                  onClick={handleLanguage}
                />
              </div>
              <div 
                className="justify-end ms-2 flex w-full"
                onClick={handleDarkMode}
              >
                {darkmode === "false" 
                  ? <LightModeIcon className="my-auto text-lightblue cursor-pointer" />
                  : <DarkModeIcon className="my-auto text-fourthDarkMode cursor-pointer" />
                }
              </div>
            </div>
          </div>
      </div>
    </header>
  );
};
