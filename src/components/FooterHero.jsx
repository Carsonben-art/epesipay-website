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
    >
      <div className="footer-hero-container">
        <p>TRY IT NOW</p>
        <div className="footer-c">
          <motion.div className="footer-hero-text" variants={containerVariants}>
            <h2>Ready to level up your <br /> payment process?</h2>
            <p>
              Supports small businesses with simple invoicing, 
              secured <br /> transactions, and cash flow management tools.
            </p>
          </motion.div>
          <motion.button 
            variants={containerVariants} 
            whileHover={{ scale: 1.05 }} 
            transition={{ type: 'spring', stiffness: 300 }}
          >
            Download
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}

export default FooterHero;