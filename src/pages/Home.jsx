import React from 'react'

import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import Onboarding from '../components/Onboarding'
import Mission from '../components/Mission'
import PromoSection from '../components/PromoSection'
import Faqs from '../components/Faqs'
import FooterHero from '../components/FooterHero'
const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Onboarding />
      <Mission />
      <PromoSection />
      {/* <Faqs /> */}
      <FooterHero />
      
    </div>
  )
}

export default Home
