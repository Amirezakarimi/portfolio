import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Code2 } from 'lucide-react';
import { SectionId } from '../types';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: SectionId) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: SectionId.HERO },
    { label: 'About', id: SectionId.ABOUT },
    { label: 'Skills', id: SectionId.SKILLS },
    { label: 'Experience', id: SectionId.EXPERIENCE },
    { label: 'Projects', id: SectionId.PROJECTS },
    { label: 'Contact', id: SectionId.CONTACT },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-slate-900/80 backdrop-blur-md border-b border-slate-800 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 text-slate-100 cursor-pointer" onClick={() => scrollToSection(SectionId.HERO)}>
          <div className="bg-slate-100 text-slate-900 p-1 rounded-md">
            <Code2 size={24} />
          </div>
          <span className="font-bold text-xl tracking-tight">Amirreza</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-slate-400 hover:text-slate-100 text-sm font-medium transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-slate-100 transition-all group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Social Icons (Desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <a href="#" className="text-slate-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
            <Linkedin size={20} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 p-4 md:hidden flex flex-col gap-4 shadow-2xl">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-slate-300 hover:text-white text-left py-2 px-4 hover:bg-slate-800 rounded-lg transition-all"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;