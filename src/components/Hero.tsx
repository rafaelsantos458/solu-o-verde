import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Leaf, ShieldCheck, Award, Sparkles, Phone, Instagram, Linkedin, HelpCircle } from 'lucide-react';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export default function Hero({ onNavigate }: HeroProps) {
  const tickerItems = [
    "Licenciamento LP / LI / LO",
    "Reflorestamento TCRA",
    "Laudos EIA / RIMA",
    "Créditos de Carbono",
    "Engenharia Florestal",
    "Conformidade Regulatória",
    "Gestão de Resíduos",
    "Preservação de Biomas"
  ];

  return (
    <div
      id="hero-section"
      className="relative min-h-screen bg-[#070f0a] pt-32 pb-0 flex flex-col justify-between overflow-hidden"
    >
      {/* Glow Effects */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#62c234]/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-10 w-[300px] h-[300px] bg-[#1d6435]/5 rounded-full blur-[100px] pointer-events-none"></div>
 
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 flex-grow flex items-center relative">
        
        {/* Left Side Follow Us Vertical Rail */}
        <div className="hidden lg:flex flex-col items-center space-y-6 absolute left-0 top-1/2 -translate-y-1/2 text-slate-400 z-10 select-none">
          <a 
            href="https://www.instagram.com/solucao_verde/" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-[#62c234] transition-colors"
            title="Instagram"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a 
            href="https://www.linkedin.com/company/solu%C3%A7%C3%A3o-verde-consultoria-e-planejamento-sustent%C3%A1vel/posts/?feedView=all" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-[#62c234] transition-colors"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <div className="w-[1px] h-12 bg-slate-800"></div>
          <span className="text-[9px] font-mono tracking-[0.2em] uppercase origin-center rotate-90 translate-y-6 block whitespace-nowrap text-slate-500 font-bold">
            SIGA-NOS
          </span>
        </div>
 
        {/* Hero Grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full lg:pl-16">
          
          {/* Left textual content (Col 6) */}
          <div className="lg:col-span-7 space-y-6 text-left relative z-10 py-10">
            <span className="text-[#62c234] font-mono text-xs uppercase tracking-[0.2em] font-black block">
              • ENGENHARIA & MEIO AMBIENTE
            </span>
            
            <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Controle Eficaz & <br />
              <span className="text-[#62c234] font-extrabold">Gestão Ambiental</span> <br />
              Sustentável.
            </h1>
 
            <p className="text-slate-300 text-sm sm:text-base max-w-xl font-light leading-relaxed">
              Reformulamos a relação da sua corporação com a regulação e o ecossistema. A Solução Verde simplifica licenciamentos complexos e executa projetos de reflorestamento nativo de altíssima performance.
            </p>
 
            <div className="flex flex-wrap gap-4 pt-4">
              <button
                id="hero-primary-cta"
                onClick={() => onNavigate('contato')}
                className="inline-flex items-center justify-center space-x-2 px-7 py-4 rounded-full bg-[#62c234] hover:bg-[#62c234]/90 text-slate-950 font-black text-xs uppercase tracking-wider transition-all shadow-lg shadow-emerald-500/10 cursor-pointer"
              >
                <span>Fale Conosco</span>
                <Phone className="w-4 h-4 fill-slate-950 text-slate-950" />
              </button>
 
              <button
                id="hero-secondary-cta"
                onClick={() => onNavigate('servicos')}
                className="inline-flex items-center justify-center px-7 py-4 rounded-full bg-transparent hover:bg-white/5 text-white font-black text-xs uppercase tracking-wider transition-all border border-slate-700 hover:border-white cursor-pointer"
              >
                Nossos Serviços
              </button>
            </div>
          </div>
 
          {/* Right Image element (Col 5) */}
          <div className="lg:col-span-5 relative flex justify-center items-center lg:h-[480px]">
            <div className="absolute w-[360px] h-[360px] bg-[#62c234]/5 rounded-full blur-2xl pointer-events-none"></div>
            
            <img
              src="https://res.cloudinary.com/dgzkksdzi/image/upload/v1780461609/seedling_dark_hero_1780455999931_ja4mkh.jpg"
              alt="Muda florestal em crescimento Soluções Verdes"
              className="relative max-h-[380px] lg:max-h-[440px] w-auto object-contain rounded-3xl z-10 filter drop-shadow-[0_15px_30px_rgba(98,194,52,0.15)] animate-fadeIn"
              referrerPolicy="no-referrer"
            />
          </div>
 
        </div>
      </div>
 
      {/* Repeating Green Ticker Band */}
      <div className="w-full bg-[#62c234] py-4 overflow-hidden border-t border-b border-emerald-500/10 select-none">
        <div className="flex whitespace-nowrap animate-marquee">
          {/* Ticker values duplicated to ensure seamless infinite looping */}
          <div className="flex space-x-12 shrink-0">
            {tickerItems.concat(tickerItems).map((text, idx) => (
              <span key={idx} className="inline-flex items-center space-x-3 text-slate-950 font-sans text-xs font-black uppercase tracking-wider">
                <Leaf className="w-4 h-4 fill-slate-950 text-slate-950" />
                <span>{text}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
