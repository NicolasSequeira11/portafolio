import { useState, createContext } from "react";

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(true);

  const handleLanguage = () => {
    setLanguage(prevLanguage => !prevLanguage);
  }

  return (
    <LanguageContext.Provider value={{ language, handleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

