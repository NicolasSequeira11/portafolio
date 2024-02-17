import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Route, Routes, HashRouter as BrowserRouter, useNavigate } from "react-router-dom";
import { NextUIProvider } from '@nextui-org/react';

import { Nav } from './pages/components/Navbar';
import { Profile } from './pages/components/Profile';
import { Skills } from './pages/components/Skills';
import { Projects } from './pages/components/Projects';
import { Certificates } from './pages/components/Certificates';
import { Contact } from './pages/components/Contact';
import { Footer } from './pages/components/Footer';
import { Home } from './pages/Home';
import { CV } from './pages/CV';
import { Curriculum } from './pages/components/Curriculum';

export const App = () => {
  const [language, setLanguage] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const darkModeFromLocalStorage = localStorage.getItem("darkmodeNS");
    return darkModeFromLocalStorage ? JSON.parse(darkModeFromLocalStorage) : false;
  });
  const navigate = useNavigate();
  
  const darkmode = localStorage.getItem("darkmodeNS");

  return (
    <NextUIProvider navigate={navigate} className="font-montserrat">
      <Nav
        language={language}
        setLanguage={setLanguage}
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        darkmode={darkmode}  
      />

      <Routes>
        <Route 
          path="/" 
          element={<Home 
            navigate={navigate} 
            language={language}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            darkmode={darkmode}
          />} 
        />
        <Route 
          path="/" 
          element={<Profile 
            navigate={navigate} 
            language={language}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            darkmode={darkmode}
          />} 
        />
        <Route 
          path="/" 
          element={<Skills 
            navigate={navigate} 
            language={language}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            darkmode={darkmode}
          />} 
        />
        <Route 
          path="/" 
          element={<Projects 
            navigate={navigate} 
            language={language}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            darkmode={darkmode}
          />} 
        />
        <Route 
          path="/" 
          element={<Contact 
            navigate={navigate} 
            language={language}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            darkmode={darkmode}
          />} 
        />
        <Route 
          path="/" 
          element={<Certificates 
            navigate={navigate} 
            language={language}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            darkmode={darkmode}
          />} 
        />
        <Route 
          path="/" 
          element={<Footer 
            navigate={navigate} 
            language={language}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            darkmode={darkmode}
          />} 
        />
        <Route 
          path="/curriculum" 
          element={<CV 
            navigate={navigate} 
            language={language}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            darkmode={darkmode}  
          />} 
        />
        <Route 
          path="/" 
          element={<Curriculum 
            navigate={navigate} 
            language={language}
            isDarkMode={isDarkMode}
            setIsDarkMode={setIsDarkMode}
            darkmode={darkmode}  
          />} 
        />
      </Routes>
    </NextUIProvider>
  )
}