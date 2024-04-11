import { useState, createContext } from "react";

export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const darkModeFromLocalStorage = localStorage.getItem("darkmodeNS");
    return darkModeFromLocalStorage ? JSON.parse(darkModeFromLocalStorage) : false;
  });
  
  const darkmode = localStorage.getItem("darkmodeNS");

  const handleDarkMode = () => {
    setIsDarkMode(prevIsDarkMode => {
      const newIsDarkMode = !prevIsDarkMode;
      localStorage.setItem("darkmodeNS", JSON.stringify(newIsDarkMode));
      return newIsDarkMode;
    });
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode, darkmode, handleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  )
}

