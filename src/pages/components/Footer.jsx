import React from "react";
import LogoFooter from "/media/logo-white-footer.png";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export const Footer = ({ language, darkmode }) => {
  return(
    <footer className={`m-auto py-7 justify-center 
    ${darkmode === "false" 
      ? "bg-gradient-to-tr to-lightblue via-blue-800 from-darkblue" 
      : "bg-gradient-to-tr to-secondDarkMode via-gray-700 from-firstDarkMode"}`
    }
    >
      <img src={LogoFooter} className="m-auto h-44" />
      <p 
        className="text-white text-lg text-center font-semibold py-8">
          {language ? "Constancia y determinación." : "Consistency and determination"}
      </p>
      <div className="m-auto flex justify-center my-5 text-center text-white">
        <a 
          href="https://www.linkedin.com/in/nicolas-sequeira-dev/"
          target="_blank" 
          className="border-2 rounded-full mx-3 border-lightblue my-auto p-3 hover:bg-white hover:text-lightblue transition duration-150"
        >
          <LinkedInIcon />
        </a>
        <a 
          href="https://github.com/nicolassequeira11" 
          target="_blank"
          className="border-2 rounded-full mx-3 border-lightblue my-auto p-3 hover:bg-white hover:text-lightblue transition duration-150"
        >
          <GitHubIcon />
        </a>
        <a 
          href="mailto:nicosequeira1997@hotmail.com" 
          target="_blank"
          className="border-2 rounded-full mx-3 border-lightblue my-auto p-3 hover:bg-white hover:text-lightblue transition duration-150"
        >
          <MailOutlineIcon />
        </a>
      </div>
    </footer>
  )
}