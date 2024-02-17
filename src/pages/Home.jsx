import React from "react";

import { Profile } from './components/Profile';
import { Presentation } from "./components/Presentation";
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Certificates } from './components/Certificates';
import { Footer } from './components/Footer';

export const Home = ({ language, darkmode }) => {
  return(
    <div>
      <Profile 
        darkmode={darkmode}
        language={language}
      />
      <Presentation 
        darkmode={darkmode}
        language={language}
      />
      <Skills 
        darkmode={darkmode}
        language={language}
      />
      <Projects 
        darkmode={darkmode}
        language={language}
      />
      <Contact 
        darkmode={darkmode}
        language={language}
      />
      <Certificates 
        darkmode={darkmode}
        language={language}
      />
      <Footer 
        darkmode={darkmode}
        language={language}
      />
    </div>
  )
}