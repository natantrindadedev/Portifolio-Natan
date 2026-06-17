import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { AlertCircle } from 'lucide-react';

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="min-h-[60vh] flex flex-col justify-center items-center px-4">
      <div className="glass-card rounded-lg p-6 sm:p-10 text-center max-w-sm border border-slate-900 shadow-xl relative mt-8">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 bg-slate-950 border border-slate-900 rounded-lg text-blue-500 shadow-md">
          <AlertCircle className="h-8 w-8" />
        </div>
        <h1 className="text-xl font-heading font-bold text-slate-100 mt-4 mb-2">
          {t('notFound.title')}
        </h1>
        <p className="text-slate-450 text-xs leading-relaxed mb-6">
          {t('notFound.subtitle')}
        </p>
        <Link
          to="/"
          className="inline-flex w-full justify-center py-2.5 px-4 bg-blue-600 hover:bg-blue-500 text-slate-50 text-xs font-bold rounded-md shadow transition-colors cursor-pointer"
        >
          {t('notFound.btn')}
        </Link>
      </div>
    </div>
  );
}
