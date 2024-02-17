import React from "react";
import { Curriculum } from "./components/Curriculum";
import { Footer } from "./components/Footer";

export const CV = ({navigate, language, setLanguage, isDarkMode, setIsDarkMode, darkmode}) => {
  return(
    <div>
      <Curriculum darkmode={darkmode} language={language} />
      <Footer darkmode={darkmode} language={language} />
    </div>
  )
}