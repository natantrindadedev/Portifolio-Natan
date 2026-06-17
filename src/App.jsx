import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './hooks/useLanguage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetails from './pages/ProjectDetails';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col custom-scrollbar relative">
          {/* Top glowing ambient effect */}
          <div className="absolute top-0 left-0 right-0 h-[450px] bg-gradient-to-b from-accent-blue/5 via-accent-purple/0 to-transparent pointer-events-none z-0" />
          
          <Navbar />
          
          <main className="flex-grow z-10 w-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects/:slug" element={<ProjectDetails />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
}
