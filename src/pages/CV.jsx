import React from "react";
import { Curriculum } from "./components/Curriculum";
import { Footer } from "./components/Footer";

export const CV = ({ language, darkmode}) => {
  return(
    <div>
      <Curriculum darkmode={darkmode} language={language} />
      <Footer darkmode={darkmode} language={language} />
    </div>
  )
}