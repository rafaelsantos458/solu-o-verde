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

        {/* Unified Institutional, Compliance & Contact Stripe */}
        <div className="bg-slate-950 rounded-3xl text-white p-6 sm:p-8 md:p-10 border border-slate-900 relative overflow-hidden shadow-xl shadow-slate-950/20">
          <div className="absolute inset-0 bg-gradient-to-br from-[#62c234]/15 via-slate-950/40 to-transparent pointer-events-none"></div>
          
          <div className="relative z-10 space-y-8">
            
            {/* Top compliance bar with CNPJ & Scope side-by-side */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-800/80">
              <div className="space-y-1.5 md:max-w-2xl text-left">
                <span className="text-[#62c234] font-mono text-[10px] uppercase tracking-wider font-extrabold flex items-center">
                  <ShieldCheck className="w-4 h-4 text-[#62c234] mr-1.5 shrink-0" />
                  CONFORMIDADE E RESPONSABILIDADE REGULATÓRIA
                </span>
                <h4 className="font-sans text-base sm:text-lg font-bold tracking-tight text-white">Projetos Assinados por Especialistas Ativos</h4>
                <p className="text-slate-400 font-light text-xs leading-relaxed">
                  A Solução Verde Engenharia assegura que 100% dos estudos ambientais, laudos e projetos silviculturais contam com registro formal de responsabilidade técnica (ART/AFT) junto aos respectivos conselhos profissionais.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 sm:gap-6 text-left font-mono text-[10px] shrink-0">
                <div className="bg-slate-900/50 px-4 py-2.5 rounded-2xl border border-slate-800">
                  <span className="block text-slate-500 uppercase tracking-wider font-bold">CNPJ OFICIAL</span>
                  <span className="text-slate-200 font-extrabold block mt-0.5">24.586.113/0001-92</span>
                </div>
                <div className="bg-slate-900/50 px-4 py-2.5 rounded-2xl border border-slate-800">
                  <span className="block text-slate-500 uppercase tracking-wider font-bold">ABRANGÊNCIA</span>
                  <span className="text-[#62c234] font-extrabold block mt-0.5">Laudos e Estudos Nacionais</span>
                </div>
              </div>
            </div>

            {/* Bottom Minimal Contact Channels */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
              
              {/* Channel 1: Email */}
              <div className="flex items-start space-x-3 text-left">
                <div className="w-9 h-9 rounded-xl bg-[#62c234]/15 text-[#62c234] flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <span className="block text-[9px] uppercase text-slate-500 font-mono tracking-wider font-bold">Comunicação Direta</span>
                  <a href="mailto:contato@solucaoverde.com.br" className="text-xs font-bold text-white hover:text-[#62c234] transition-colors block break-all">
                    contato@solucaoverde.com.br
                  </a>
                </div>
              </div>

              {/* Channel 2: Phone */}
              <div className="flex items-start space-x-3 text-left">
                <div className="w-9 h-9 rounded-xl bg-[#62c234]/15 text-[#62c234] flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <span className="block text-[9px] uppercase text-slate-500 font-mono tracking-wider font-bold">Telefone &amp; WhatsApp</span>
                  <a href="https://wa.me/5511987654321" target="_blank" rel="noreferrer" className="text-xs font-bold text-white hover:text-[#62c234] transition-colors block">
                    +55 (11) 98765-4321
                  </a>
                </div>
              </div>

              {/* Channel 3: Address */}
              <div className="flex items-start space-x-3 text-left">
                <div className="w-9 h-9 rounded-xl bg-[#62c234]/15 text-[#62c234] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div className="space-y-1">
                  <span className="block text-[9px] uppercase text-slate-500 font-mono tracking-wider font-bold">Nossa Sede</span>
                  <span className="text-xs text-slate-300 font-light block leading-relaxed">
                    Av. Paulista, 1000 • Bela Vista • São Paulo / SP
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
