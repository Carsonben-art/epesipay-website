import React from 'react';
import { Button } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import image from '../assets/epesipay-bg.png';
import futurizac from '../assets/futurizac-bg.png';
import dtb from '../assets/dtb-bg.png';
import epesipay from '../assets/epesipay-logobg.png';



const Hero = () => {
  const { ref: textRef, inView: textInView } = useInView({ threshold: 0.1 });
  const { ref: imgRef, inView: imgInView } = useInView({ threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    }
  };

  return (
    <div className="hero-container">
      <motion.div
        ref={textRef}
        initial={{ opacity: 0, y: 50 }}
        animate={textInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
        className="hero-text"
      >
        <h1>Mobile money solution <br/> that saves you time, money and <br/> gives you a peace of mind.</h1>
        <p>With the Epesipay app, you can send and receive cash, pay bills, <br/>and shop at your favourite store
          all with just a few taps on your mobile phone.
        </p>
        <motion.button 
            variants={containerVariants} 
            whileHover={{ scale: 1.05 }} 
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Download Now
          </motion.button>
        <div className="partners-logo">
          <img src={futurizac} alt="" />
          <img src={dtb} alt="" />
          <img src={epesipay} alt="" />
        </div>
      </motion.div>
      <motion.div
        ref={imgRef}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={imgInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.5 }}
        transition={{ duration: 0.5 }}
        className="hero-img"
      >
        <img src={image} alt="Hero" />
      </motion.div>
    </div>
  );
};

export default Hero;