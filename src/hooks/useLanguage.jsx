import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Try to load language from localStorage, default to 'pt'
  const [language, setLanguageState] = useState(() => {
    const saved = localStorage.getItem('language');
    return saved === 'en' || saved === 'pt' ? saved : 'pt';
  });

  // Keep localStorage and document.documentElement.lang in sync
  useEffect(() => {
    localStorage.setItem('language', language);
    // Dynamic lang update: 'pt' -> 'pt-BR', 'en' -> 'en'
    document.documentElement.lang = language === 'pt' ? 'pt-BR' : 'en';
  }, [language]);

  const toggleLanguage = () => {
    setLanguageState((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  const setLanguage = (lang) => {
    if (lang === 'pt' || lang === 'en') {
      setLanguageState(lang);
    }
  };

  // Safe translation helper (supports nested keys like 'hero.title')
  const t = (key) => {
    const keys = key.split('.');
    let result = translations[language];
    
    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k];
      } else {
        // Fallback to key if not found
        return key;
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
