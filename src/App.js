import React from 'react';
import './App.css';

import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Onboarding from './components/Onboarding';
import Mission from './components/Mission';
import FooterHero from './components/FooterHero';
import Footer from './components/Footer';
import Faqs from './components/Faqs';
import PromoSection from './components/PromoSection';

import { FaSquareWhatsapp } from "react-icons/fa6";

const App = () => {
  return (
    <div>
      <Nav />
      <div id="Home">
        <Hero />
      </div>
      <div id="Services">
        <Services />
      </div>
      <div id="About">
        <About />
      </div>
      <div id="Onboarding">
        <Onboarding />
      </div>
      <Mission />
      <div id="Promo">
        <PromoSection />
      </div>
      <Faqs />
      <FooterHero />
      <div id="Contacts">
        <Footer />
      </div>

      {/* WhatsApp Icon */}
      <a 
        href="https://wa.me/+254714853448" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        <FaSquareWhatsapp 
          style={{
            position: 'fixed', 
            bottom: '100px',    
            right: '30px',     
            color: 'green',
            fontSize: '48px',
            cursor: 'pointer', 
            zIndex: 1000       
          }} 
        />
      </a>
    </div>
  );
}

export default App;
