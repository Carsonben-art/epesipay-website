import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import { FaSquareWhatsapp } from "react-icons/fa6";
import ContactUs from './pages/ContactUs';

const App = () => {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<ContactUs />} />
          
        </Routes>
        <Footer />

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
    </Router>
  );
}

export default App;