import React from 'react';
import epesipay from '../assets/epesipay_mockup2.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the element is in view
  });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7 } // Duration of the fade-in effect
    }
  };

  return (
    <motion.div 
      className='about-us'
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInVariants}
    >
      <p className='about'>About us</p>
      <h3 className='about-heading'>"Redefining Payments for Modern Life"</h3>
      <div className="about-container">
        <div className="about-image">
          <img src={epesipay} alt="Epesipay" />
        </div>
        <div className="about-text">
          <p>Epesipay, a cutting-edge solution developed by Futurizac, reimagines financial transactions for the modern era. 
            Our platform is meticulously crafted to deliver unparalleled simplicity and user-friendliness, empowering you to 
            conduct transactions seamlessly, regardless of time or location.
          </p>
          <br/>
          <p>We understand the frustrations of traditional financial services:</p>
          <ul>
            <li>Exorbitant transaction fees</li>
            <li>Misdirected payments</li>
            <li>Aggravating processing delays</li>
            <li>Convoluted payment procedures</li>
          </ul>
          <br/>
          <p>
            Epesipay addresses these pain points head-on. Our innovative approach streamlines your financial interactions, 
            offering a robust, secure, and efficient alternative to conventional methods. By choosing Epesipay, you're not 
            just adopting a new payment system – you're embracing a forward-thinking financial ecosystem designed to enhance 
            your daily transactions and overall financial management.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default About;