import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

export default function TechnologyGroup({ category }) {
  const { language } = useLanguage();
  const title = category.title[language] || category.title.pt;

  return (
    <div className="glass-card rounded-lg p-5 sm:p-6 flex flex-col h-full transition-colors duration-200 hover:border-slate-700/80">
      <h3 className="text-xs font-bold uppercase tracking-wider text-slate-450 mb-4 pb-2 border-b border-slate-900/60 flex items-center justify-between">
        <span>{title}</span>
        <span className="h-1 w-1 rounded-full bg-blue-500" />
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="text-[10px] font-semibold text-slate-300 bg-slate-950/50 border border-slate-900 px-2 py-1 rounded-md hover:border-blue-600/30 hover:text-slate-100 transition-all duration-200 select-none"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
