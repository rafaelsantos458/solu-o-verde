import React from 'react';
import { motion } from 'motion/react';
import { Check, Leaf, Globe } from 'lucide-react';

export default function Metrics() {
  return (
    <section className="py-24 bg-[#fbfdfa] relative overflow-hidden text-slate-800">
      {/* Decors */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-emerald-100/10 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column (Col 7) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="flex items-center space-x-2 text-[#1d6435]">
              <Leaf className="w-4 h-4 fill-[#1d6435] shrink-0" />
              <span className="font-mono text-xs uppercase tracking-widest font-black block">
                NOSSAS MÉTRICAS DE IMPACTO
              </span>
            </div>
 
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
              Rumo a um Futuro Seguro e Descarbonizado
            </h2>
 
            <p className="text-slate-500 font-light text-sm sm:text-base leading-relaxed max-w-xl">
              Nossa performance é auditada sob padrões internacionais de governança técnica. Planejamos intervenções que reduzem riscos civis-ambientais com eficácia garantida e excelente custo-benefício.
            </p>
 
            {/* Checklist with Green Shields/Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-center space-x-3 text-slate-700">
                <div className="w-6 h-6 rounded-full bg-[#1d6435]/10 text-[#1d6435] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3px]" />
                </div>
                <span className="font-semibold text-xs sm:text-sm uppercase tracking-wider">Conformidade Rápida</span>
              </div>
 
              <div className="flex items-center space-x-3 text-slate-700">
                <div className="w-6 h-6 rounded-full bg-[#1d6435]/10 text-[#1d6435] flex items-center justify-center shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3px]" />
                </div>
                <span className="font-semibold text-xs sm:text-sm uppercase tracking-wider">Laudos Homologados</span>
              </div>
            </div>
 
            {/* Progress metrics bars exactly matching the image sliders block */}
            <div className="space-y-6 pt-4 max-w-lg">
              
              {/* Progress 1: Recycling / Gestão de Resíduos */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-black uppercase tracking-wider text-slate-700">
                  <span>Licenciamentos Aprovados</span>
                  <span>95%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                     initial={{ width: 0 }}
                     whileInView={{ width: "95%" }}
                     viewport={{ once: true }}
                     transition={{ duration: 1, ease: "easeOut" }}
                     className="h-full bg-gradient-to-r from-[#62c234] to-[#1d6435] rounded-full"
                  />
                </div>
              </div>
 
              {/* Progress 2: Ocean Cleaning / Projetos de Reflorestamento */}
              <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-black uppercase tracking-wider text-slate-700">
                  <span>Reflorestamento Nativo TCRA</span>
                  <span>88%</span>
                </div>
                <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                     initial={{ width: 0 }}
                     whileInView={{ width: "88%" }}
                     viewport={{ once: true }}
                     transition={{ duration: 1, ease: "easeOut" }}
                     className="h-full bg-gradient-to-r from-[#62c234] to-[#1d6435] rounded-full"
                  />
                </div>
              </div>
 
            </div>
          </div>
 
          {/* Right Column (Col 5) - Hands Nurturing Seedling inside gold/green themed circle */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            
            {/* Dotted geometric grid decor in background */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[radial-gradient(#ccd5cc_1px,transparent_1px)] [background-size:12px_12px] opacity-60 z-0"></div>
            
            <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] rounded-full p-2 border-2 border-[#1d6435]/20 shadow-neutral-900/5 shadow-2xl overflow-visible z-10 flex items-center justify-center bg-white">
              
              {/* Seedling Image */}
              <img
                src="/src/assets/images/cupped_hands_seedling_1780456029159.png"
                alt="Cupped hands protecting seedling Solução Verde"
                className="w-full h-full object-cover rounded-full select-none"
                referrerPolicy="no-referrer"
              />
 
              {/* Curved badge "SAVE THE PLANET" exactly placed like the image */}
              <div className="absolute -top-4 -left-6 bg-[#1d6435] hover:scale-105 transition-transform text-white px-5 py-2.5 rounded-full shadow-lg border border-[#62c234]/30 flex items-center space-x-1.5 z-20 select-none cursor-pointer">
                <Globe className="w-4 h-4 text-[#62c234] animate-spin" style={{ animationDuration: '8s' }} />
                <span className="font-mono text-[9px] font-black uppercase tracking-wider">
                  PRESERVE O PLANETA
                </span>
              </div>
 
            </div>
 
          </div>

        </div>
      </div>
    </section>
  );
}
