import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import PricingTable from './PricingTable';


const Mission = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, // Trigger animation when 20% of the element is in view
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } // Duration of the fade-in effect
    }
  };

  const statVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 } // Duration of each stat animation
    }
  };

  // Counter animation logic
  const [revenueBusiness, setRevenueBusiness] = useState(0);
  const [annualRevenue, setAnnualRevenue] = useState(0);
  const [monthsOfRunway, setMonthsOfRunway] = useState(0);

  useEffect(() => {
    if (inView) {
      const revenueBusinessEnd = 24; // Final value for revenue business
      const annualRevenueEnd = 180000; // Final value for annual revenue
      const monthsOfRunwayEnd = 10; // Final value for months of runway

      const duration = 2; // Duration of the counter animation in seconds
      const steps = 100; // Number of steps for the animation

      const interval = setInterval(() => {
        setRevenueBusiness((prev) => Math.min(prev + Math.ceil(revenueBusinessEnd / steps), revenueBusinessEnd));
        setAnnualRevenue((prev) => Math.min(prev + Math.ceil(annualRevenueEnd / steps), annualRevenueEnd));
        setMonthsOfRunway((prev) => Math.min(prev + Math.ceil(monthsOfRunwayEnd / steps), monthsOfRunwayEnd));
      }, (duration * 1000) / steps);

      return () => clearInterval(interval); // Cleanup on unmount
    }
  }, [inView]);

  return (
    <motion.section 
      className="mission"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <p className="mission-subtitle">OUR MISSION</p>
      <h2 className="mission-title">
        We've helped<br />innovative companies
      </h2>
      <p className="mission-description">
        Hundreds of all sizes and across all industries<br />
        have made big improvements with us.
      </p>
      <div className="mission-stats">
        <motion.div className="stat-item" variants={statVariants}>
          <h3 className="stat-value">{revenueBusiness}%</h3>
          <p className="stat-label">Revenue business</p>
        </motion.div>
        <motion.div className="stat-item" variants={statVariants}>
          <h3 className="stat-value">{annualRevenue.toLocaleString()}</h3>
          <p className="stat-label">In annual revenue</p>
        </motion.div>
        <motion.div className="stat-item" variants={statVariants}>
          <h3 className="stat-value">{monthsOfRunway}+</h3>
          <p className="stat-label">Months of runway</p>
        </motion.div>
      </div>
      <div className="prices">
        <h2>Epesipay Transaction Charges</h2>
        <PricingTable />
      </div>
    </motion.section>
  );
};

export default Mission;