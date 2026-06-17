import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { Layout, Terminal, BarChart2, FileText, MessageSquare, ArrowRight } from 'lucide-react';

const iconMap = {
  Layout: Layout,
  Terminal: Terminal,
  BarChart: BarChart2,
  FileText: FileText,
  MessageSquare: MessageSquare
};

export default function ProjectCard({ project }) {
  const { language, t } = useLanguage();
  
  const IconComponent = iconMap[project.icon] || Layout;
  const shortDescription = project.shortDescription[language] || project.shortDescription.pt;
  const area = project.area[language] || project.area.pt;
  const impact = project.impact[language] || project.impact.pt;

  return (
    <div className="glass-card rounded-lg overflow-hidden flex flex-col h-full group transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-700/80 hover:bg-slate-900/40 hover:shadow-lg">
      {/* Subtle thin top bar using project's gradient colors */}
      <div className={`h-[2px] bg-gradient-to-r ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity duration-200`} />
      
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        {/* Area & Icon */}
        <div className="flex items-start justify-between gap-4 mb-3">
          <span className="text-[9px] font-extrabold uppercase tracking-wider text-slate-400 bg-slate-950/60 px-2 py-0.5 rounded border border-slate-900 leading-normal">
            {area}
          </span>
          <div className="p-1.5 rounded-md bg-slate-950 border border-slate-900 text-slate-500 group-hover:text-blue-500 group-hover:border-blue-600/30 transition-colors duration-200 flex-shrink-0">
            <IconComponent className="h-4 w-4" />
          </div>
        </div>

        {/* Project Title */}
        <h3 className="text-base font-heading font-bold text-slate-100 group-hover:text-blue-500 transition-colors duration-200 mb-2">
          {project.title}
        </h3>

        {/* Short Description */}
        <p className="text-xs text-slate-450 line-clamp-3 mb-4 leading-relaxed">
          {shortDescription}
        </p>

        {/* Main Stack */}
        <div className="mb-5 bg-slate-950/30 p-2.5 rounded border border-slate-900/60">
          <span className="text-[9px] font-bold uppercase tracking-wider text-slate-550 block mb-1">
            {t('projects.stack')}
          </span>
          <span className="text-xs font-mono font-medium text-slate-350">
            {project.stack}
          </span>
        </div>

        {/* Impact Panel at the bottom */}
        <div className="mt-auto pt-4 border-t border-slate-900/60">
          <span className="text-[9px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
            {t('projects.impactLabel')}
          </span>
          <p className="text-xs font-bold text-blue-500 tracking-wide">
            {impact}
          </p>
          
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center text-[10px] font-bold text-slate-400 hover:text-blue-500 group/link mt-3 transition-colors uppercase tracking-widest"
          >
            <span>{t('projects.viewDetails')}</span>
            <ArrowRight className="ml-1 h-3 w-3 transform group-hover/link:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
}
