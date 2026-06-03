import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { servicesData } from '../data/websiteData';
import { ServiceItem } from '../types';
import { FileText, ShieldCheck, Leaf, ChevronDown, ChevronUp, ArrowRight, CheckCircle2, Award, Zap, ShieldAlert } from 'lucide-react';

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

const componentIconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  FileText: FileText,
  ShieldCheck: ShieldCheck,
  Leaf: Leaf,
};

// Define corresponding image assets generated for each of the 3 services
const serviceImages: Record<string, string> = {
  "estudos-ambientais": "https://res.cloudinary.com/dgzkksdzi/image/upload/v1780458730/aa32b8f2a07d497e51e0eb8f79c64cc8_gdn05g.jpg",
  "assessoria-ambiental": "https://res.cloudinary.com/dgzkksdzi/image/upload/v1780459084/b428917faeb9afdba77e356cb856044f_gczwma.jpg",
  "restauracao-vegetacao": "https://res.cloudinary.com/dgzkksdzi/image/upload/v1780459797/ChatGPT_Image_3_de_jun._de_2026_01_09_49_nyfzse.png"
};

export default function Services({ onSelectService }: ServicesProps) {
  const [expandedId, setExpandedId] = useState<string | null>("estudos-ambientais");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="servicos" className="py-24 bg-[#fafbfa] relative overflow-hidden">
      {/* Wave guidelines or blurs */}
      <div className="absolute top-10 right-0 w-80 h-80 bg-emerald-50 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-green-100/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block matching Image */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6 text-left">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center space-x-2 text-[#1d6435]">
              <Leaf className="w-4 h-4 fill-[#1d6435] shrink-0" />
              <span className="font-mono text-xs uppercase tracking-widest font-black block">
                NOSSAS SOLUÇÕES
              </span>
            </div>
            
            <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
              A Solução Verde oferece os melhores serviços ambientais
            </h2>
          </div>
 
          {/* Decorative Carousel Control Arrows from the provided Image */}
          <div className="flex space-x-2 shrink-0">
            <button className="w-10 h-10 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-400 select-none cursor-not-allowed">
              <span className="text-sm font-bold">←</span>
            </button>
            <button className="w-10 h-10 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 flex items-center justify-center text-slate-400 select-none cursor-not-allowed">
              <span className="text-sm font-bold">→</span>
            </button>
          </div>
        </div>
 
        {/* 3-Column Services Grid (Perfect replication of the 3 cards in the image) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
          {servicesData.map((service) => {
            const IconComponent = componentIconMap[service.iconName] || FileText;
            const isExpanded = expandedId === service.id;
            const cardImg = serviceImages[service.id] || "/src/assets/images/dirty_recycling_service_1780456044516.png";
 
            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className={`bg-white rounded-3xl border border-slate-200/65 shadow-sm overflow-hidden transition-all duration-300 flex flex-col justify-between min-h-[500px] relative ${
                  isExpanded ? 'border-[#62c234] ring-2 ring-[#62c234]/5' : 'hover:border-[#62c234]/40'
                }`}
              >
                {/* Visual Top Area with green floating circles layout */}
                <div className="p-8 pb-4 text-left">
                  
                  {/* Floating Green Circle Icon */}
                  <div className="w-12 h-12 rounded-full bg-[#62c234] text-slate-950 flex items-center justify-center mb-6 shadow-md shadow-emerald-500/10">
                    <IconComponent className="w-5 h-5 stroke-[2.5]" />
                  </div>
 
                  <h3 className="font-sans text-lg sm:text-xl font-bold text-slate-800 tracking-tight mb-2">
                    {service.title}
                  </h3>
 
                  <p className="text-slate-500 text-xs sm:text-sm font-light leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
 
                  <button
                    onClick={() => toggleExpand(service.id)}
                    className="inline-flex items-center space-x-1.5 text-xs font-bold text-[#1d6435] hover:text-[#62c234] transition-colors uppercase tracking-wider cursor-pointer"
                  >
                    <span>{isExpanded ? "Fechar detalhes" : "Ver Detalhes"}</span>
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                  </button>
 
                </div>
 
                {/* Card Expand Drawer details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35 }}
                      className="border-t border-slate-100 bg-[#fafbfa] text-left overflow-hidden"
                    >
                      <div className="p-6 space-y-4 text-xs">
                        
                        <div>
                          <span className="block font-bold text-slate-700 uppercase tracking-wider text-[9px] mb-1">Manejo Técnico:</span>
                          <p className="text-slate-500 leading-relaxed font-light">{service.fullDescription}</p>
                        </div>
 
                        <div>
                          <span className="block font-bold text-slate-700 uppercase tracking-wider text-[9px] mb-1">Atribuições do escopo:</span>
                          <ul className="space-y-1 pl-1 text-slate-500 font-light">
                            {service.features.map((feat, idx) => (
                              <li key={idx} className="flex items-center space-x-1.5">
                                <span className="text-[#62c234] font-black">•</span>
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
 
                        <div className="pt-2 border-t border-slate-200">
                          <button
                            id={`cta-service-box-${service.id}`}
                            onClick={() => onSelectService(service.title)}
                            className="w-full inline-flex items-center justify-center space-x-1.5 py-2.5 bg-[#62c234] hover:bg-[#62c234]/95 text-slate-950 rounded-xl font-bold uppercase tracking-wider transition-colors cursor-pointer text-[10px]"
                          >
                            <span>Falar Conosco</span>
                            <ArrowRight className="w-3 h-3 text-slate-950" />
                          </button>
                        </div>
 
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Service Physical Image representing card bottom from the provided image */}
                <div className="w-full h-48 sm:h-52 overflow-hidden border-t border-slate-150 relative bg-slate-900 mt-auto">
                  <div className="absolute inset-x-0 bottom-0 top-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none z-10"></div>
                  <img
                    src={cardImg}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
