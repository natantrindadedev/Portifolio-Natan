import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="inline-flex items-center bg-slate-950/60 border border-slate-800/80 rounded-md p-0.5 cursor-pointer hover:border-slate-700/80 hover:bg-slate-900 transition-all duration-200 select-none text-xs font-medium h-8"
      aria-label="Toggle Language"
    >
      <span
        className={`px-2 py-1 rounded-sm transition-all duration-200 ${
          language === 'pt'
            ? 'bg-slate-800 text-slate-100 font-bold border border-slate-700/40 shadow-sm'
            : 'text-slate-500 hover:text-slate-300'
        }`}
      >
        PT
      </span>
      <span
        className={`px-2 py-1 rounded-sm transition-all duration-200 ${
          language === 'en'
            ? 'bg-slate-800 text-slate-100 font-bold border border-slate-700/40 shadow-sm'
            : 'text-slate-500 hover:text-slate-300'
        }`}
      >
        EN
      </span>
    </button>
  );
}
