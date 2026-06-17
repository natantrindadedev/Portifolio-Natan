import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { projects } from '../data/projects';
import { ArrowLeft, CheckCircle, HelpCircle, Cpu, BookOpen, Clipboard, Lightbulb, BarChart } from 'lucide-react';

export default function ProjectDetails() {
  const { slug } = useParams();
  const { language, t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  // Localized fields
  const area = project.area[language] || project.area.pt;
  const impact = project.impact[language] || project.impact.pt;
  const description = project.description[language] || project.description.pt;
  const context = project.context[language] || project.context.pt;
  const challenge = project.challenge[language] || project.challenge.pt;
  const solution = project.solution[language] || project.solution.pt;
  const results = project.results[language] || project.results.pt;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Back Link */}
      <Link
        to="/#projects"
        className="inline-flex items-center text-xs font-bold text-slate-450 hover:text-blue-500 transition-colors duration-150 mb-6 group"
      >
        <ArrowLeft className="mr-1.5 h-3.5 w-3.5 transform group-hover:-translate-x-0.5 transition-transform" />
        <span className="uppercase tracking-widest">{t('projects.backButton')}</span>
      </Link>

      {/* Case Study Container */}
      <div className="glass-card rounded-lg overflow-hidden border border-slate-900 shadow-xl">
        {/* Banner with gradient backdrop (shorter and subtle) */}
        <div className={`bg-gradient-to-br ${project.gradient} relative p-6 sm:p-8 md:p-10 border-b border-slate-900`}>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent opacity-80" />
          
          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center text-[9px] font-extrabold uppercase tracking-wider text-slate-350 bg-slate-950/80 px-2.5 py-1 rounded border border-slate-900 leading-normal">
              {area}
            </span>
            <h1 className="text-xl sm:text-3xl lg:text-4xl font-heading font-bold text-slate-100 tracking-tight">
              {project.title}
            </h1>

            {/* Quick Metadata Block */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-900/40">
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-450 block mb-1">
                  {t('projects.stack')}
                </span>
                <span className="text-xs font-mono font-medium text-slate-300">
                  {project.stack}
                </span>
              </div>
              <div>
                <span className="text-[9px] font-bold uppercase tracking-wider text-slate-450 block mb-1">
                  {t('projects.impactLabel')}
                </span>
                <span className="text-xs font-bold text-blue-400">
                  {impact}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Content Body - Case Study sections */}
        <div className="p-6 sm:p-8 md:p-10 space-y-8">
          
          {/* Overview Section */}
          <section className="space-y-3">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 pb-2 border-b border-slate-900/60 flex items-center">
              <BookOpen className="mr-2 h-4 w-4 text-blue-500" />
              <span>Overview</span>
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              {description}
            </p>
          </section>

          {/* 2x2 Grid for Case Study segments */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Context */}
            <div className="bg-slate-950/20 border border-slate-900/80 rounded-lg p-5 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center">
                <Clipboard className="mr-2 h-4 w-4 text-slate-500" />
                <span>{t('projects.context')}</span>
              </h3>
              <p className="text-slate-350 text-xs leading-relaxed font-normal">
                {context}
              </p>
            </div>

            {/* Challenge */}
            <div className="bg-slate-950/20 border border-slate-900/80 rounded-lg p-5 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center">
                <HelpCircle className="mr-2 h-4 w-4 text-slate-500" />
                <span>{t('projects.challenge')}</span>
              </h3>
              <p className="text-slate-350 text-xs leading-relaxed font-normal">
                {challenge}
              </p>
            </div>

            {/* Solution */}
            <div className="bg-slate-950/20 border border-slate-900/80 rounded-lg p-5 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center">
                <Lightbulb className="mr-2 h-4 w-4 text-blue-500/80" />
                <span>{t('projects.solution')}</span>
              </h3>
              <p className="text-slate-350 text-xs leading-relaxed font-normal">
                {solution}
              </p>
            </div>

            {/* Results */}
            <div className="bg-slate-950/20 border border-slate-900/80 rounded-lg p-5 space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center">
                <BarChart className="mr-2 h-4 w-4 text-blue-500" />
                <span>{t('projects.results')}</span>
              </h3>
              <p className="text-slate-350 text-xs leading-relaxed font-normal text-slate-300">
                {results}
              </p>
            </div>
          </div>

          {/* Full Stack list of Technologies */}
          <section className="space-y-3 pt-4 border-t border-slate-900/60">
            <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 flex items-center mb-4">
              <Cpu className="mr-2 h-4 w-4 text-blue-500" />
              <span>{t('projects.solution')}</span>
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="inline-flex items-center text-[10px] font-semibold text-slate-300 bg-slate-950/50 border border-slate-900 px-2.5 py-1.5 rounded-md hover:border-slate-800 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
