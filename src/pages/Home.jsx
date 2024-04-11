import React from "react";

import { Profile } from './components/Profile';
import { Presentation } from "./components/Presentation";
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Certificates } from './components/Certificates';
import { Footer } from './components/Footer';

export const Home = () => {

  return(
    <div>
      <Profile />
      <Presentation />
      <Skills />
      <Projects />
      <Contact />
      <Certificates />
      <Footer />
    </div>
  )
}