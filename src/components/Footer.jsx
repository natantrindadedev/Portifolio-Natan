import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-8 mt-auto select-none">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-slate-500 text-xs font-medium tracking-wide">
          &copy; 2026 Natan Trindade. {t('footer.rights')}
        </p>
        <p className="text-slate-650 text-[10px] mt-1.5 font-medium uppercase tracking-widest">
          {t('footer.subtitle')}
        </p>
      </div>
    </footer>
  );
}
