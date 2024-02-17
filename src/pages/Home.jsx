import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Profile } from './components/Profile';
import { Presentation } from "./components/Presentation";
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Certificates } from './components/Certificates';
import { Footer } from './components/Footer';

export const Home = ({navigate, language, setLanguage, isDarkMode, setIsDarkMode, darkmode}) => {
  return(
    <div>
      <Profile 
        darkmode={darkmode}
      />
      <Presentation 
        darkmode={darkmode}
        language={language}
      />
      <Skills 
        darkmode={darkmode}
      />
      <Projects 
        darkmode={darkmode}
      />
      <Contact 
        darkmode={darkmode}
      />
      <Certificates 
        darkmode={darkmode}
      />
      <Footer 
        darkmode={darkmode}
      />
    </div>
  )
}