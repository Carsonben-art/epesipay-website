import React from 'react'
import './App.css'
// import './scroll'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Onboarding from './components/Onboarding'
import Mission from './components/Mission'
import FooterHero from './components/FooterHero'
import Footer from './components/Footer'
import Faqs from './components/Faqs'

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
      <div id="Contacts">
        <Mission />
        <Faqs />
        <FooterHero />
        <Footer />
      </div>
    </div>
  )
}

export default App