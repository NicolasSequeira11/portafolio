import React, { useState } from 'react'
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
        setIsDarkMode={setIsDarkMode}
        darkmode={darkmode}  
      />

      <Routes>
        <Route 
          path="/" 
          element={<Home 
            language={language}
            darkmode={darkmode}
          />} 
        />
        <Route 
          path="/" 
          element={<Profile 
            language={language}
            darkmode={darkmode}
          />} 
        />
        <Route 
          path="/" 
          element={<Skills 
            language={language}
            darkmode={darkmode}
          />} 
        />
        <Route 
          path="/" 
          element={<Projects 
            language={language}
            darkmode={darkmode}
          />} 
        />
        <Route 
          path="/" 
          element={<Contact 
            language={language}
            darkmode={darkmode}
          />} 
        />
        <Route 
          path="/" 
          element={<Certificates 
            language={language}
            darkmode={darkmode}
          />} 
        />
        <Route 
          path="/" 
          element={<Footer 
            language={language}
            darkmode={darkmode}
          />} 
        />
        <Route 
          path="/curriculum" 
          element={<CV 
            language={language}
            darkmode={darkmode}  
          />} 
        />
        <Route 
          path="/" 
          element={<Curriculum 
            language={language}
            darkmode={darkmode}  
          />} 
        />
      </Routes>
    </NextUIProvider>
  )
}