import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Metrics from './components/Metrics';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [activeSection, setActiveSection] = useState<string>('inicio');
  const [selectedService, setSelectedService] = useState<string>('');

  // Smooth scroll to target element
  const handleNavigate = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      // Offset for sticky navbar
      const yOffset = -70; 
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Scroll section tracking observer for active state highlight
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sobre', 'servicos', 'faq', 'contato'];
      const scrollPosition = window.scrollY + 120; // safe offset for trigger

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handler for service-specific request buttons
  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    handleNavigate('contato');
  };

  return (
    <div id="app-root" className="min-h-screen flex flex-col font-sans select-none antialiased text-neutral-800 bg-[#f0f4f0] overflow-x-hidden">
      
      {/* Dynamic Header */}
      <Navbar onNavigate={handleNavigate} activeSection={activeSection} />

      {/* Primary Section Canvas */}
      <main className="flex-grow">
        
        {/* Banner Section */}
        <div id="inicio">
          <Hero onNavigate={handleNavigate} />
        </div>

        {/* Company Presentation */}
        <About />

        {/* Environmental Capability Services */}
        <Services onSelectService={handleSelectService} />

        {/* Impact Metrics and Achievement Progress */}
        <Metrics />

        {/* Informative FAQ accordion panel */}
        <FAQ />

        {/* Contact panel and Proposal CRM capture */}
        <Contact 
          selectedService={selectedService} 
        />

      </main>

      {/* Sticky Informative Footer */}
      <Footer />

    </div>
  );
}
