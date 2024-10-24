import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import signup from '../assets/signup.jpg'

const Onboarding = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the element is in view
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1,
        transition: { 
            staggerChildren: 0.2,
            delayChildren: 0.3
        }
    }
};

  const stepVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
          type: 'spring',
          stiffness: 100,
          damping: 10
      }
  }
  };

  return (
    <motion.section 
      className="onboarding"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="onboarding-container">
        <p>Onboarding</p>
        <h2 className="onboarding-title">Unlock Your Financial Potential in This Very Simple Steps.</h2>
        <motion.div className="onboarding-steps" variants={containerVariants}>
        
          <motion.div className="onboarding-step" variants={stepVariants}>
            <span className="step-number">1</span>
            <h3>Download & Signup</h3>
            <p>Download & Sign up to Epesipay and set up your account from the dashboard.</p>
          </motion.div>
          <motion.div className="onboarding-step" variants={stepVariants}>
            <span className="step-number">2</span>
            <h3>Submit KYC</h3>
            <p>After filling in your details, upload a picture of your national ID 
                and take a selfie with your right thumbs up.
            </p>
          </motion.div>
          <motion.div className="onboarding-step" variants={stepVariants}>
            <span className="step-number">3</span>
            <h3>Begin transacting!</h3>
            <p>On approval of your KYC, your wallet is ready to start transacting. Upload cash from your M-Pesa or bank account and enjoy!</p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Onboarding;