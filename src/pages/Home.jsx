import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLanguage } from '../hooks/useLanguage';
import { projects } from '../data/projects';
import { technologyCategories } from '../data/technologies';
import ProjectCard from '../components/ProjectCard';
import TechnologyGroup from '../components/TechnologyGroup';
import { CONTACT_EMAIL, WHATSAPP_NUMBER, PHONE_NUMBER, LINKEDIN_URL, GITHUB_URL } from '../config/contact';
import { ArrowRight, MessageCircle, Mail, Phone, Send } from 'lucide-react';

// Custom inline SVG icons since lucide-react lacks brand icons
const GithubIcon = () => (
  <svg
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    className="h-4 w-4"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Home() {
  const { language, t } = useLanguage();
  const { hash } = useLocation();

  // Contact form state
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Smooth scroll if landing with hash
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        const timer = setTimeout(() => {
          const offset = 70;
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [hash]);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
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
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = t('contact.validation.name');
    if (!formData.email.trim()) {
      tempErrors.email = t('contact.validation.email');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = t('contact.validation.email');
    }
    if (!formData.message.trim()) tempErrors.message = t('contact.validation.message');
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const sanitizeInput = (val) => {
    if (typeof val !== 'string') return '';
    return val
      .replace(/<[^>]*>/g, '') // Strip HTML tags
      .replace(/javascript:/gi, '') // Prevent javascript: protocol injection
      .trim();
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const name = sanitizeInput(formData.name);
    const email = sanitizeInput(formData.email);
    const message = sanitizeInput(formData.message);

    if (language === 'pt') {
      const text = `Olá Natan,\n\nMeu nome é ${name} (${email}).\n\n${message}`;
      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      const subject = `Contact from Portfolio - ${name}`;
      const body = `Hello Natan,\n\n${message}\n\nBest regards,\n${name}\nEmail: ${email}`;
      const url = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      window.location.href = url;
    }

    setIsSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitted(false);
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-20 pb-16">
      
      {/* 1. HERO SECTION */}
      <section
        id="home"
        className="min-h-[75vh] flex flex-col justify-center items-center text-center px-4 relative pt-8"
      >
        <div className="max-w-3xl mx-auto space-y-5">
          {/* Greeting Tag - Muted Slate */}
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-sm text-[10px] font-bold tracking-widest text-slate-400 uppercase bg-slate-900 border border-slate-800">
            Available for opportunities
          </span>
          
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tight text-slate-100">
            {t('hero.title')}
          </h1>
          
          <h2 className="text-sm sm:text-base font-bold tracking-wider uppercase text-blue-500 font-heading">
            {t('hero.subtitle')}
          </h2>
          
          <p className="text-slate-400 text-xs sm:text-sm max-w-xl mx-auto font-normal leading-relaxed">
            {t('hero.phrase')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <button
              onClick={() => handleScrollTo('projects')}
              className="w-full sm:w-auto px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-slate-50 text-xs font-bold rounded-md hover:translate-y-[-1px] transition-all duration-200 shadow-sm flex items-center justify-center cursor-pointer"
            >
              <span>{t('hero.btnProjects')}</span>
              <ArrowRight className="ml-1.5 h-4 w-4" />
            </button>
            
            <button
              onClick={() => handleScrollTo('contact')}
              className="w-full sm:w-auto px-5 py-2.5 bg-slate-900/40 text-slate-350 border border-slate-850 text-xs font-bold rounded-md hover:bg-slate-900 hover:border-slate-750 hover:text-slate-100 hover:translate-y-[-1px] transition-all duration-200 flex items-center justify-center cursor-pointer"
            >
              <span>{t('hero.btnContact')}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. ABOUT ME SECTION */}
      <section id="about" className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20 w-full">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-100">
            {t('about.title')}
            <span className="block h-[2px] w-6 bg-blue-600 mx-auto mt-2 rounded" />
          </h2>
        </div>

        <div className="glass-card rounded-lg p-5 sm:p-7 space-y-4 border border-slate-900/60 shadow-sm">
          <p className="text-slate-350 text-xs sm:text-sm leading-relaxed font-normal">
            {t('about.paragraph1')}
          </p>
          <p className="text-slate-350 text-xs sm:text-sm leading-relaxed font-normal">
            {t('about.paragraph2')}
          </p>
        </div>
      </section>

      {/* 3. PROJECTS SECTION */}
      <section id="projects" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20 w-full">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-100">
            {t('projects.title')}
            <span className="block h-[2px] w-6 bg-blue-600 mx-auto mt-2 rounded" />
          </h2>
          <p className="text-slate-500 mt-2 max-w-md mx-auto text-[11px] sm:text-xs">
            {t('projects.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>

      {/* 4. TECHNOLOGIES SECTION */}
      <section id="technologies" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20 w-full">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-100">
            {t('technologies.title')}
            <span className="block h-[2px] w-6 bg-blue-600 mx-auto mt-2 rounded" />
          </h2>
          <p className="text-slate-500 mt-2 max-w-md mx-auto text-[11px] sm:text-xs">
            {t('technologies.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {technologyCategories.map((category) => (
            <TechnologyGroup key={category.id} category={category} />
          ))}
        </div>
      </section>

      {/* 5. CONTACT SECTION */}
      <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-20 w-full">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-heading font-bold text-slate-100">
            {t('contact.title')}
            <span className="block h-[2px] w-6 bg-blue-600 mx-auto mt-2 rounded" />
          </h2>
          <p className="text-slate-500 mt-2 max-w-md mx-auto text-[11px] sm:text-xs">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
          {/* Contact Direct Info & Links */}
          <div className="md:col-span-2 flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              {/* Email Block */}
              <div className="glass-card rounded-lg p-4 border border-slate-900">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-slate-950 border border-slate-900 rounded-md text-slate-450">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Email</h4>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-slate-200 hover:text-blue-500 text-xs font-semibold transition-colors break-all">
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone Block */}
              <div className="glass-card rounded-lg p-4 border border-slate-900">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-slate-950 border border-slate-900 rounded-md text-slate-450">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {language === 'pt' ? 'Telefone' : 'Phone'}
                    </h4>
                    <a href={`tel:${PHONE_NUMBER}`} className="text-slate-200 hover:text-blue-500 text-xs font-semibold transition-colors">
                      {PHONE_NUMBER}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-3 pt-3 md:pt-0">
              {LINKEDIN_URL && (
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-950 hover:bg-slate-900 border border-slate-900 hover:border-slate-800 text-slate-400 hover:text-blue-500 rounded-md transition-all duration-200"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon />
                </a>
              )}
              {GITHUB_URL && (
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 bg-slate-950 hover:bg-slate-900 border border-slate-900 hover:border-slate-800 text-slate-400 hover:text-blue-500 rounded-md transition-all duration-200"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon />
                </a>
              )}
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-3">
            <form onSubmit={handleContactSubmit} className="glass-card rounded-lg p-5 sm:p-6 border border-slate-900 space-y-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  {t('contact.labelName')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder={t('contact.placeName')}
                  className={`w-full px-3 py-2 bg-slate-950 border text-xs rounded-md text-slate-100 placeholder-slate-650 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-all duration-150 ${
                    errors.name ? 'border-red-500/40 focus:ring-red-500' : 'border-slate-900'
                  }`}
                />
                {errors.name && <p className="text-[10px] text-red-400 mt-1 font-medium">{errors.name}</p>}
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  {t('contact.labelEmail')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder={t('contact.placeEmail')}
                  className={`w-full px-3 py-2 bg-slate-950 border text-xs rounded-md text-slate-100 placeholder-slate-650 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-all duration-150 ${
                    errors.email ? 'border-red-500/40 focus:ring-red-500' : 'border-slate-900'
                  }`}
                />
                {errors.email && <p className="text-[10px] text-red-400 mt-1 font-medium">{errors.email}</p>}
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                  {t('contact.labelMessage')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder={t('contact.placeMessage')}
                  className={`w-full px-3 py-2 bg-slate-950 border text-xs rounded-md text-slate-100 placeholder-slate-650 focus:outline-none focus:ring-1 focus:ring-blue-600 focus:border-blue-600 transition-all duration-150 resize-none ${
                    errors.message ? 'border-red-500/40 focus:ring-red-500' : 'border-slate-900'
                  }`}
                />
                {errors.message && <p className="text-[10px] text-red-400 mt-1 font-medium">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-slate-50 text-xs font-bold rounded-md shadow-sm hover:translate-y-[-1px] active:scale-[0.99] transition-all duration-200 flex items-center justify-center cursor-pointer"
              >
                {language === 'pt' ? (
                  <>
                    <MessageCircle className="mr-1.5 h-4 w-4" />
                    <span>{t('contact.btnPrimary')}</span>
                  </>
                ) : (
                  <>
                    <Send className="mr-1.5 h-3.5 w-3.5" />
                    <span>{t('contact.btnPrimary')}</span>
                  </>
                )}
              </button>

              {/* Secondary Helper Text */}
              <div className="text-center pt-2 border-t border-slate-900/60">
                {language === 'pt' ? (
                  <p className="text-[10px] text-slate-500 font-medium">
                    {t('contact.secondaryText')}{' '}
                    <a href={`mailto:${CONTACT_EMAIL}`} className="text-slate-400 hover:text-blue-500 transition-colors underline decoration-dotted">
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                ) : (
                  <p className="text-[10px] text-slate-500 font-medium">
                    {t('contact.secondaryText')}{' '}
                    <a href={`tel:${PHONE_NUMBER}`} className="text-slate-400 hover:text-blue-500 transition-colors underline decoration-dotted">
                      {PHONE_NUMBER}
                    </a>
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}
