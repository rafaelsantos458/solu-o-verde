import React, { useState } from 'react';
import { motion } from 'motion/react';
import { teamValues, historyMilestones } from '../data/websiteData';
import { Milestone, ValueCard } from '../types';
import { Eye, Award, Zap, TrendingUp, History, Sparkles, MapPin, Leaf, Shield, Star, Check } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-5 h-5 text-emerald-400" />,
  TrendingUp: <TrendingUp className="w-5 h-5 text-emerald-400" />,
  Eye: <Eye className="w-5 h-5 text-emerald-400" />,
  Award: <Award className="w-5 h-5 text-emerald-400" />
};

export default function About() {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(historyMilestones.length - 1);

  return (
    <section id="sobre" className="py-24 bg-[#fcfdfa] relative overflow-hidden text-slate-800">
      {/* Background elegant vectors */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#62c234]/5 rounded-full blur-[110px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-0 w-80 h-80 bg-emerald-50 rounded-full blur-[90px] pointer-events-none"></div>
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Modern Identical Twin Column Section from Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
          
          {/* Left Column: Floating Island Illustration (Col 6) */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Main Picture Frame */}
            <div className="relative border-l-[10px] border-[#62c234] rounded-3xl p-4 bg-slate-50/50 shadow-sm overflow-visible max-w-[420px] lg:max-w-none">
              
              <img
                src="/src/assets/images/about_eco_island_1780456014721.png"
                alt="Florestas e soluções sustentabilidade Solução Verde"
                className="rounded-2xl w-full h-auto object-cover max-h-[385px] filter drop-shadow-sm select-none"
                referrerPolicy="no-referrer"
              />
 
              {/* Overlapping "AWARD WINNING" or "SELO OURO VERDE" badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#070f0a] border border-[#62c234]/30 rounded-3xl p-5 flex items-center space-x-3 text-white max-w-[210px] shadow-xl z-20 animate-fadeIn">
                <div className="w-10 h-10 rounded-2xl bg-[#62c234] text-slate-950 flex items-center justify-center shrink-0">
                  <Star className="w-5 h-5 fill-slate-950 text-slate-950" />
                </div>
                <div>
                  <span className="block text-[8px] font-mono tracking-widest text-[#62c234] font-black uppercase">
                    SELO OURO VERDE
                  </span>
                  <span className="block text-xs font-black tracking-tight mt-0.5 uppercase">
                    Líder Regional
                  </span>
                </div>
              </div>
 
            </div>
 
          </div>
 
          {/* Right Column: Text Information & Capabilities (Col 6) */}
          <div className="lg:col-span-6 space-y-7 text-left">
            <div className="flex items-center space-x-2 text-[#1d6435]">
              <Leaf className="w-4 h-4 fill-[#1d6435]" />
              <span className="font-mono text-xs uppercase tracking-widest font-black block">
                Sobre Nós
              </span>
            </div>
 
            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-800 tracking-tight leading-tight">
              Solução Verde Consultoria e Planejamento Sustentável
            </h2>
 
            <div className="space-y-4 text-slate-500 font-light text-sm sm:text-base leading-relaxed">
              <p>
                A Solução Verde é fruto do ideal de promover soluções sustentáveis no planejamento e operação de negócios, em harmonia com a natureza. Há mais de 10 anos, atuamos com consultoria e assessoria ambiental em vários estados do Brasil. Nosso time de especialistas, mestres e doutores, é multidisciplinar, sempre em busca de soluções inovadoras e personalizadas para os nossos clientes.
              </p>
              <p>
                Somos motivados por soluções inovadoras e eficazes para os desafios ambientais contemporâneos. Nossa missão é ajudar empresas e organizações de diversos contextos e setores econômicos a desenvolverem estratégias sustentáveis para o desenvolvimento econômico e social, em equilíbrio com a conservação dos recursos naturais e a biodiversidade.
              </p>
            </div>
 
            {/* List Segment matching Image blocks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              
              {/* Item 1: Economic Benefits */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#1d6435]/10 text-[#1d6435] flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 stroke-[3px]" />
                  </div>
                  <h4 className="font-sans font-black text-slate-800 text-xs sm:text-sm uppercase tracking-wider">
                    Retornos Sustentáveis
                  </h4>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-light pl-10">
                  Redução drástica de desperdícios no manejo e desoneração tributária corporativa através de créditos verdes.
                </p>
              </div>
 
              {/* Item 2: Safe Environment */}
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#1d6435]/10 text-[#1d6435] flex items-center justify-center shrink-0">
                    <Check className="w-4 h-4 stroke-[3px]" />
                  </div>
                  <h4 className="font-sans font-black text-slate-800 text-xs sm:text-sm uppercase tracking-wider">
                    Conformidade Ativa
                  </h4>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed font-light pl-10">
                  Acompanhamento diário das licenças (LP, LI, LO), evitando ações fiscais e mitigações emergenciais custosas.
                </p>
              </div>
 
            </div>
 
          </div>
 
        </div>
 
        {/* Conheça a Nossa História Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24 pb-4">
          
          {/* Left Column: Text Story (Col 7) */}
          <div className="lg:col-span-7 space-y-7 order-2 lg:order-1 text-left">
            <div className="flex items-center space-x-2 text-[#1d6435]">
              <History className="w-4 h-4" />
              <span className="font-mono text-xs uppercase tracking-widest font-black block">
                Nossa História
              </span>
            </div>

            <h2 className="font-sans text-2xl sm:text-3xl font-extrabold text-[#1d6435] tracking-tight leading-tight">
              Conheça a Nossa História
            </h2>

            <div className="space-y-6 text-slate-500 font-light text-sm sm:text-base leading-relaxed">
              <p>
                A empresa foi idealizada por <strong className="font-semibold text-slate-800">Laíne Corrêa</strong> e <strong className="font-semibold text-slate-800">Mayra Moraes</strong>, duas biólogas apaixonadas pela natureza e pela sustentabilidade, com ampla experiência em diversas frentes de trabalho. Com conhecimentos distintos, mas um objetivo comum, elas uniram suas expertises para criar uma empresa que auxilia na implementação de práticas sustentáveis em suas operações.
              </p>
              <p>
                Desde o início, a Solução Verde atuou com ética e qualidade, ajudando na implementação de práticas sustentáveis e no cumprimento das legislações ambientais em projetos para diferentes segmentos econômicos.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <div className="px-4 py-2 bg-emerald-50 rounded-xl border border-emerald-100/80 flex items-center space-x-3 shadow-xs">
                <div className="w-2 h-2 rounded-full bg-[#1d6435]"></div>
                <span className="text-xs font-semibold text-[#123e20]">Laíne Corrêa, Bióloga Fundadora</span>
              </div>
              <div className="px-4 py-2 bg-emerald-50 rounded-xl border border-emerald-100/80 flex items-center space-x-3 shadow-xs">
                <div className="w-2 h-2 rounded-full bg-[#1d6435]"></div>
                <span className="text-xs font-semibold text-[#123e20]">Mayra Moraes, Bióloga Fundadora</span>
              </div>
            </div>
          </div>

          {/* Right Column: Space for Founders Photo (Col 5) */}
          <div className="lg:col-span-5 order-1 lg:order-2 relative flex justify-center items-center">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] lg:max-w-none">
              
              {/* Decorative background shape */}
              <div className="absolute -top-4 -right-4 w-full h-full rounded-3xl border-2 border-dashed border-[#61c234]/30 -z-10 translate-x-1 translate-y-1"></div>
              
              {/* Photo Frame Container */}
              <div className="relative bg-slate-100 border border-slate-200/85 rounded-3xl overflow-hidden aspect-[4/5] shadow-lg group hover:shadow-xl transition-all duration-300">
                {/* Clean, high-quality Placeholder Image representing professional women in earth science */}
                <img
                  src="https://res.cloudinary.com/dgzkksdzi/image/upload/v1780461068/mayralaine_autywk.webp"
                  alt="Laíne Corrêa e Mayra Moraes - Fundadoras Solução Verde"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-all duration-500 select-none"
                  referrerPolicy="no-referrer"
                />
              </div>

            </div>
          </div>

        </div>

        {/* Core Values sub-section */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <span className="text-[#1d6435] font-mono text-xs uppercase tracking-widest font-black block">
              DIRETRIZES TÉCNICAS
            </span>
            <h3 className="font-sans text-2xl sm:text-3xl font-extrabold text-slate-800 leading-tight">
              Nossos Pilares de Atuação
            </h3>
            <p className="text-slate-500 font-light text-xs sm:text-sm">
              Trabalhamos sob um conjunto rigoroso de garantias de proteção técnica e total transparência econômica.
            </p>
          </div>
 
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {teamValues.map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-8 bg-white border border-slate-200/60 hover:border-[#62c234]/30 hover:shadow-md transition-all shadow-sm rounded-3xl flex flex-col justify-between min-h-[250px]"
              >
                <div>
                  <div className="w-11 h-11 rounded-2xl bg-[#070f0a] flex items-center justify-center mb-6 shadow-sm border border-slate-800">
                    {iconMap[value.iconName]}
                  </div>
                  <h4 className="font-sans font-black text-slate-800 text-sm uppercase tracking-wider mb-2">{value.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed font-light">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
 
        {/* Interactive History Timeline - Dark Bento Highlight (Keeping original technical context beautifully) */}
        <div className="p-8 sm:p-12 rounded-[32px] bg-[#070f0a] text-white shadow-2xl border border-slate-900 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-44 h-44 bg-[#62c234]/5 rounded-bl-full pointer-events-none"></div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12 border-b border-slate-800/80 pb-6">
            <div className="flex items-center space-x-3.5">
              <div className="p-3 rounded-2xl bg-[#1d6435]/30 border border-[#62c234]/20">
                <History className="w-5 h-5 text-[#62c234]" />
              </div>
              <div>
                <h3 className="font-sans text-xl sm:text-2xl font-black tracking-tight">Nossa Trajetória de Evolução</h3>
                <p className="text-slate-400 text-[10px] font-mono uppercase tracking-wider mt-1">Nove anos de auditorias e conquistas nacionais exemplares</p>
              </div>
            </div>
          </div>
 
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Timeline sidebar selection (Col-5) */}
            <div className="lg:col-span-4 flex flex-row lg:flex-col gap-2.5 overflow-x-auto pb-4 lg:pb-0 scrollbar-none border-b lg:border-b-0 lg:border-r border-slate-800 pr-0 lg:pr-8">
              {historyMilestones.map((milestone, idx) => (
                <button
                  key={milestone.year}
                  onClick={() => setSelectedMilestone(idx)}
                  className={`flex flex-col items-start px-5 py-4 rounded-2xl text-left transition-all shrink-0 cursor-pointer ${
                    selectedMilestone === idx
                      ? 'bg-[#62c234] font-black text-slate-950 shadow-lg'
                      : 'bg-slate-900/60 hover:bg-slate-900/90 text-slate-300'
                  }`}
                >
                  <span className="font-mono text-xl tracking-tighter block leading-none">{milestone.year}</span>
                  <span className={`text-[9px] uppercase font-mono tracking-wider mt-1 block font-bold ${selectedMilestone === idx ? 'text-slate-950' : 'text-slate-400'}`}>
                    {milestone.title}
                  </span>
                </button>
              ))}
            </div>
 
            {/* Selected detail panel (Col-8) */}
            <div className="lg:col-span-8 py-4 lg:pl-6 min-h-[180px] flex flex-col justify-center">
              <motion.div
                key={selectedMilestone}
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-4 text-left"
              >
                <div className="flex items-center space-x-1.5 text-[#62c234]">
                  <Sparkles className="w-4 h-4" />
                  <span className="font-bold text-[9px] uppercase tracking-widest font-mono">CONQUISTA HISTÓRICA REGISTRADA</span>
                </div>
                <h4 className="font-sans text-xl sm:text-2xl font-black text-white tracking-tight">
                  {historyMilestones[selectedMilestone].year}: {historyMilestones[selectedMilestone].title}
                </h4>
                <p className="text-slate-300 text-xs sm:text-sm font-light leading-relaxed">
                  {historyMilestones[selectedMilestone].description}
                </p>
                <div className="pt-2 flex items-center space-x-2 text-[10px] text-slate-500 font-mono">
                  <MapPin className="w-4 h-4 text-[#62c234]" />
                  <span>Solução Verde Engenharia e Planejamento Nacional</span>
                </div>
              </motion.div>
            </div>
 
          </div>
        </div>

      </div>
    </section>
  );
}
