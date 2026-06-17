import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import LanguageToggle from './LanguageToggle';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Detect scroll to modify visual depth slightly
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navItems = [
    { key: 'home', label: t('nav.home'), href: 'home' },
    { key: 'about', label: t('nav.about'), href: 'about' },
    { key: 'projects', label: t('nav.projects'), href: 'projects' },
    { key: 'technologies', label: t('nav.technologies'), href: 'technologies' },
    { key: 'contact', label: t('nav.contact'), href: 'contact' }
  ];

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate(`/#${targetId}`);
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 70;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    setIsOpen(false);
  };

  const handleBrandClick = (e) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-200 ${
        scrolled
          ? 'bg-slate-950/95 border-b border-slate-900 py-3 shadow-md'
          : 'bg-slate-950/90 border-b border-slate-950/10 py-4'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-10">
          {/* Logo / Brand - Solid, clean corporate style */}
          <div className="flex-shrink-0">
            <a
              href="/"
              onClick={handleBrandClick}
              className="text-base font-heading font-bold tracking-tight text-slate-100 hover:text-blue-500 transition-colors"
            >
              {t('nav.brand')}
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={`#${item.href}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-xs font-semibold text-slate-400 hover:text-slate-100 transition-colors duration-150"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <div className="border-l border-slate-800/80 pl-6 h-5 flex items-center">
              <LanguageToggle />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            <LanguageToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-1.5 rounded-md text-slate-400 hover:text-slate-200 hover:bg-slate-900 focus:outline-none transition-colors"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-slate-950 border-b border-slate-900 shadow-lg transition-all duration-200 ease-in-out ${
          isOpen ? 'opacity-100 max-h-screen visible py-3' : 'opacity-0 max-h-0 invisible overflow-hidden'
        }`}
      >
        <div className="px-4 space-y-1 flex flex-col items-center">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={`#${item.href}`}
              onClick={(e) => handleNavClick(e, item.href)}
              className="block w-full py-2.5 text-center text-sm font-semibold text-slate-400 hover:text-slate-100 hover:bg-slate-900 rounded-md transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
