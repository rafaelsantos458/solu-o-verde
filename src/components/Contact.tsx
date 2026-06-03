import React from 'react';
import { Mail, Phone, MapPin, Clock, ShieldCheck, Globe } from 'lucide-react';

interface ContactProps {
  selectedService?: string;
}

export default function Contact({ selectedService }: ContactProps) {
  return (
    <section id="contato" className="py-24 bg-[#fafbfa] relative overflow-hidden text-slate-800">
      {/* Background radial soft elements */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] h-[350px] bg-[#62c234]/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-[250px] h-[250px] bg-emerald-100/10 rounded-full blur-[80px] pointer-events-none"></div>
 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block matching the refined institutional feel */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-[#1d6435] font-mono text-xs uppercase tracking-widest font-black flex items-center justify-center">
            <span className="w-1.5 h-1.5 bg-[#62c234] rounded-full mr-2"></span>
            CANAIS DE ATENDIMENTO
          </span>
          <h2 className="font-sans text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tight leading-tight">
            Fale com a Solução Verde
          </h2>
          <p className="text-slate-500 font-light text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Nossos consultores técnicos e engenheiros especializados estão à disposição para responder a consultas regulatórias e estruturar projetos com segurança jurídica.
          </p>
        </div>
 
        {/* Selected Service Focus Indicator if called from Services */}
        {selectedService && (
          <div className="max-w-3xl mx-auto mb-10 p-4 rounded-2xl bg-emerald-50 text-emerald-800 text-xs sm:text-sm border border-emerald-100 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 rounded-full bg-[#62c234] animate-ping shrink-0"></span>
              <span>Você demonstrou interesse em: <strong className="font-bold underline">{selectedService}</strong></span>
            </div>
            <span className="text-[10px] font-mono text-emerald-600 block">Use nossos contatos diretos abaixo para agendar</span>
          </div>
        )}
 
        {/* Three main contact pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: E-mails */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/70 shadow-sm flex flex-col justify-between hover:border-[#62c234]/30 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#62c234]/10 text-[#1d6435] flex items-center justify-center mb-6">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-lg font-bold text-slate-800 mb-2">Comunicação Direta</h3>
              <p className="text-slate-500 font-light text-xs sm:text-sm leading-relaxed mb-6">
                Entre em contato conosco por e-mail para solicitar análises documentais ou esclarecimentos jurídicos.
              </p>
            </div>
            
            <div className="pt-6 border-t border-slate-100 space-y-1.5 align-bottom">
              <span className="block text-[9px] uppercase text-slate-400 font-mono tracking-wider font-bold">Correio Eletrônico</span>
              <a href="mailto:contato@solucaoverde.com.br" className="text-sm font-bold text-[#1d6435] hover:underline block break-all">
                contato@solucaoverde.com.br
              </a>
            </div>
          </div>
 
          {/* Card 2: Telefones / WhatsApp */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/70 shadow-sm flex flex-col justify-between hover:border-[#62c234]/30 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#62c234]/10 text-[#1d6435] flex items-center justify-center mb-6">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-lg font-bold text-slate-800 mb-2">Linhas Telefônicas</h3>
              <p className="text-slate-500 font-light text-xs sm:text-sm leading-relaxed mb-6">
                Fale com nossos engenheiros ambientais de plantão para alinhamento rápido e início de projetos urgentes.
              </p>
            </div>
            
            <div className="pt-6 border-t border-slate-100 space-y-1.5">
              <span className="block text-[9px] uppercase text-slate-400 font-mono tracking-wider font-bold">Telefone &amp; WhatsApp</span>
              <a href="https://wa.me/5511987654321" target="_blank" rel="noreferrer" className="text-sm font-bold text-slate-800 hover:text-[#1d6435] transition-colors block">
                +55 (11) 98765-4321
              </a>
            </div>
          </div>
 
          {/* Card 3: Base do Escritório */}
          <div className="bg-white rounded-3xl p-8 border border-slate-200/70 shadow-sm flex flex-col justify-between hover:border-[#62c234]/30 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-[#62c234]/10 text-[#1d6435] flex items-center justify-center mb-6">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-lg font-bold text-slate-800 mb-2">Nossa Sede</h3>
              <p className="text-slate-500 font-light text-xs sm:text-sm leading-relaxed mb-6">
                Localizada estrategicamente no polo empresarial de São Paulo para reuniões técnicas e governança de dados.
              </p>
            </div>
            
            <div className="pt-6 border-t border-slate-100 space-y-1.5">
              <span className="block text-[9px] uppercase text-slate-400 font-mono tracking-wider font-bold">Endereço Físico</span>
              <span className="text-xs text-slate-600 block leading-relaxed font-light">
                Av. Paulista, 1000 • Bela Vista<br />
                São Paulo / SP • CEP 01310-100
              </span>
            </div>
          </div>
 
        </div>
 
        {/* Corporate compliance block at footer of section */}
        <div className="mt-12 bg-slate-950 rounded-3xl text-white p-8 sm:p-10 border border-slate-900 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#62c234]/10 via-slate-950/40 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <span className="text-[#62c234] font-mono text-[10px] uppercase tracking-wider font-bold flex items-center">
                <ShieldCheck className="w-4 h-4 text-[#62c234] mr-1.5 shrink-0" />
                CONFORMIDADE E RESPONSABILIDADE REGULATÓRIA
              </span>
              <h4 className="font-sans text-lg sm:text-xl font-bold">Projetos Assinados por Especialistas Ativos</h4>
              <p className="text-slate-400 font-light text-xs max-w-2xl leading-relaxed">
                A Solução Verde Engenharia assegura que 100% dos estudos ambientais, laudos e projetos silviculturais contam com registro formal de responsabilidade técnica (ART/AFT) junto aos respectivos conselhos profissionais.
              </p>
            </div>
 
            <div className="flex flex-col sm:flex-row gap-4 shrink-0 font-mono text-slate-500 text-[10px]">
              <div>
                <span className="block text-slate-400 uppercase tracking-wider font-bold">CNPJ OFICIAL</span>
                <span className="text-slate-300 font-bold block mt-0.5">24.586.113/0001-92</span>
              </div>
              <div className="sm:border-l sm:border-slate-800 sm:pl-4">
                <span className="block text-slate-400 uppercase tracking-wider font-bold">ABRANGÊNCIA</span>
                <span className="text-[#62c234] font-bold block mt-0.5">Laudos e Estudos Nacionais</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
