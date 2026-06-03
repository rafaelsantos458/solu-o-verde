import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { faqsData } from '../data/websiteData';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [activeId, setActiveId] = useState<string | null>("faq-1");
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = ["all", "Licenciamento", "Prazos", "Legislação", "Florestal", "Estratégica"];

  const filteredFaqs = faqsData.filter(faq => 
    activeCategory === "all" || faq.category.toLowerCase() === activeCategory.toLowerCase()
  );

  const toggleAccordion = (id: string) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <section id="faq" className="py-24 bg-[#fafbfa] relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[350px] h-[350px] bg-emerald-100/10 rounded-full blur-[90px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <span className="text-[#1d6435] font-mono text-xs uppercase tracking-widest font-extrabold flex items-center justify-center">
            <HelpCircle className="w-4 h-4 mr-2 text-[#1d6435]" />
            Respostas Imediatas
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Dúvidas e Orientações Técnicas
          </h2>
          <p className="text-slate-500 font-light text-sm sm:text-base">
            Esclareça os tópicos legais e mecânicas processuais mais comuns relacionados a certificações de conformidade ambiental.
          </p>
 
          {/* Categories Horizontal */}
          <div className="pt-6 flex flex-wrap justify-center gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setActiveId(null);
                }}
                className={`px-4 py-2 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#62c234] text-slate-950 shadow-sm'
                    : 'bg-white text-slate-500 hover:bg-slate-50 border border-slate-200'
                }`}
              >
                {cat === "all" ? "Todas" : cat}
              </button>
            ))}
          </div>
        </div>
 
        {/* FAQs Accordion Grid */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => {
            const isOpen = activeId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen ? 'border-[#62c234] shadow-sm' : 'border-slate-200 hover:border-[#62c234]/40 shadow-sm'
                }`}
              >
                
                {/* Trigger heading */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none cursor-pointer select-none"
                >
                  <span className="font-sans font-bold text-slate-800 text-sm sm:text-base pr-4 block">
                    {faq.question}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#f0f4f0] text-slate-600 border border-slate-200/80 shrink-0 flex items-center justify-center">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>
 
                {/* Animated Collapsible Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-3 text-slate-600 text-xs sm:text-sm font-light border-t border-slate-100 leading-relaxed bg-[#62c234]/5">
                        {faq.answer}
                        <div className="mt-4 flex items-center justify-between text-[10px] font-mono text-slate-400">
                          <span>Categoria Regulatório: {faq.category}</span>
                          <span>Solução Verde Engenharia</span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 text-neutral-400 font-light italic">
              Nenhuma dúvida correspondente encontrada para essa categoria técnica.
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
