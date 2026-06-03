import React from 'react';
import { Leaf, Mail, Phone, Clock, ArrowUp, ShieldCheck } from 'lucide-react';

export default function Footer() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer-section" className="bg-slate-950 text-white pt-20 pb-12 border-t border-slate-900 relative overflow-hidden">
      {/* Background shadow glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#62c234]/10 rounded-full blur-[100px] pointer-events-none"></div>
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-900">
          
          {/* Col 1: About Brand (Col 4) */}
          <div className="lg:col-span-4 space-y-6 text-left">
            <div className="flex items-center select-none">
              <img 
                src="https://res.cloudinary.com/dgzkksdzi/image/upload/v1780458053/logo_branca_gvtkh3.png" 
                alt="Solução Verde Logo" 
                className="h-20 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
 
            <p className="text-slate-400 text-sm font-light leading-relaxed max-w-sm">
              Simplificando a engenharia ambiental, reflorestamentos e conformidade legal de alto escalonamento corporativo desde 2016.
            </p>
 
            <div className="pt-2 flex items-center space-x-1 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 w-fit">
              <ShieldCheck className="w-4 h-4 text-[#62c234] mr-1.5" />
              <span className="text-[9px] font-mono uppercase tracking-wider text-slate-300">Conformidade Legal Ativa</span>
            </div>
          </div>
 
          {/* Col 2: Navigation Links (Col 3) */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="text-[10px] uppercase text-[#62c234] font-mono tracking-wider font-bold">Mapa do Site</h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>
                <a href="#inicio" className="hover:text-[#62c234] transition-colors">Início</a>
              </li>
              <li>
                <a href="#sobre" className="hover:text-[#62c234] transition-colors">Sobre o Escritório</a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-[#62c234] transition-colors">Portfólio de Serviços</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#62c234] transition-colors">Dúvidas Frequentes</a>
              </li>
            </ul>
          </div>
 
          {/* Col 3: Technical Details (Col 3) */}
          <div className="lg:col-span-3 text-left space-y-4">
            <h4 className="text-[10px] uppercase text-[#62c234] font-mono tracking-wider font-bold">Responsabilidade Técnica</h4>
            <div className="space-y-3 text-xs text-slate-300 font-light">
              <p>
                <strong className="text-[#f3f9f4]">Dra. Mariana Santos</strong><br />
                Engenheira Florestal Responsável<br />
                <span className="text-slate-500 font-mono text-[10px]">CREA-SP: 507049811</span>
              </p>
              <p>
                <strong className="text-[#f3f9f4]">Dr. Ricardo de Souza</strong><br />
                Biólogo de Fauna e Flora<br />
                <span className="text-slate-500 font-mono text-[10px]">CRBio-01: 78564/01-D</span>
              </p>
            </div>
          </div>
 
          {/* Col 4: Operating Hours (Col 2) */}
          <div className="lg:col-span-2 text-left space-y-4">
            <h4 className="text-[10px] uppercase text-[#62c234] font-mono tracking-wider font-bold">Expediente</h4>
            <div className="space-y-3 text-xs text-slate-400 font-light">
              <div className="flex items-center space-x-2 text-slate-500">
                <Clock className="w-4 h-4 text-[#62c234] shrink-0" />
                <span className="text-[10px] font-mono">SEG A SEX</span>
              </div>
              <span className="block font-medium text-[#f3f9f4]">08:00h às 18:00h</span>
              <span className="block text-[10px] text-slate-500 font-light">Exceto feriados regulamentares</span>
            </div>
          </div>
 
        </div>
 
        {/* Bottom copyright rows */}
        <div className="pt-12 flex flex-col md:flex-row items-center justify-between text-[10px] text-slate-500 font-mono gap-6">
          <div className="text-center md:text-left space-y-1">
            <span>© 2026 Solução Verde Engenharia e Planejamento Sustentável. Todos os direitos reservados.</span>
            <span className="block text-[8px] text-slate-600 font-light">
              Proibida a reprodução de relatórios, dados técnicos ou metodologias proprietárias sob lei penal nº 9.610/98.
            </span>
          </div>
 
          <button
            onClick={handleScrollTop}
            id="footer-back-to-top"
            className="w-10 h-10 rounded-full bg-slate-900 hover:bg-slate-800 text-[#62c234] border border-slate-800 transition-all flex items-center justify-center cursor-pointer"
            title="Voltar ao topo"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
}
