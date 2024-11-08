import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FooterHero = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the element is in view
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    }
  };

  return (
    <motion.div 
      className='footer-hero'
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      style={{ position: 'relative' }} // Ensure the container has relative positioning
    >
      <div className="footer-hero-container">
        <p>TRY IT NOW</p>
        <div className="footer-c">
          <motion.div className="footer-hero-text" variants={containerVariants}>
            <h2>Ready to level up your <br /> transaction process?</h2>
            <p>
            EpesiPay supports individuals and businesses with secured and <br/> seamless transactions.
            </p>
          </motion.div>
          <a href="https://play.google.com/store/apps/details?id=com.futurizac.epesipay" target='_blank' rel="noopener noreferrer">
            <motion.button 
              variants={containerVariants} 
              whileHover={{ scale: 1.05 }} 
              transition={{ type: 'spring', stiffness: 300 }}
            >
              Download
            </motion.button>
          </a>
        </div>
      </div>
      
      
      
    </motion.div>
  );
};

export default FooterHero;
