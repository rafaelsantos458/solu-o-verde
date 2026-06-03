import React, { useState, useEffect } from 'react';
import { Menu, X, Leaf, ShieldCheck, FileText, Cpu } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
}

export default function Navbar({ onNavigate, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Início' },
    { id: 'sobre', label: 'Sobre Nós' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'faq', label: 'Dúvidas' },
    { id: 'contato', label: 'Fale Conosco' }
  ];

  const handleNavClick = (id: string) => {
    setIsOpen(false);
    onNavigate(id);
  };

  return (
    <nav
      id="main-nav"
      className={`fixed top-4 left-4 right-4 max-w-7xl mx-auto z-50 transition-all duration-300 rounded-[28px] border bg-[#0b160e]/50 backdrop-blur-md text-white shadow-lg ${
        scrolled ? 'py-1 shadow-neutral-900/5 border-[#1d6435]/40 bg-[#070f0a]/90' : 'py-2 border-white/5'
      }`}
    >
      <div className="px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div
            id="brand-logo"
            className="flex items-center cursor-pointer"
            onClick={() => handleNavClick('inicio')}
          >
            <img 
              src="https://res.cloudinary.com/dgzkksdzi/image/upload/v1780458053/logo_branca_gvtkh3.png" 
              alt="Solução Verde Logo" 
              className="h-16 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>
 
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-colors cursor-pointer ${
                  activeSection === item.id
                    ? 'text-white bg-[#62c234]/20'
                    : 'text-slate-300 hover:text-[#62c234] hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
 
            <button
              id="nav-cta-button"
              onClick={() => handleNavClick('contato')}
              className="ml-3 px-5 py-2.5 rounded-full bg-[#62c234] hover:bg-[#52a629] hover:scale-[1.02] text-slate-950 text-xs font-black uppercase tracking-wider transition-all shadow-md shadow-neutral-950/20 cursor-pointer"
            >
              Falar com Consultores
            </button>
          </div>
 
          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Abrir Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>
 
      {/* Mobile Navigation Panel */}
      {isOpen && (
        <div
          id="mobile-nav-panel"
          className="lg:hidden bg-[#070f0a]/95 border-t border-slate-800/80 rounded-b-3xl px-4 pt-2 pb-5 space-y-1 block animate-fadeIn"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`mobile-nav-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`block w-full text-left px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                activeSection === item.id
                  ? 'text-[#62c234] bg-[#62c234]/10 border-l-4 border-[#62c234]'
                  : 'text-slate-300 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-3 px-3">
            <button
              id="mobile-nav-cta"
              onClick={() => handleNavClick('contato')}
              className="w-full text-center py-2.5 bg-[#62c234] hover:bg-[#52a629] text-slate-950 font-black text-xs uppercase tracking-wider rounded-full shadow-md transition-colors"
            >
              Falar com Consultores
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
