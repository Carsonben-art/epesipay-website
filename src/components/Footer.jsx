import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import logo from '../assets/epesipay-logobg.png'
import { FaInstagram, FaTiktok } from 'react-icons/fa6';
import { Link } from 'react-scroll'

import futurizac from '../assets/futurizac-bg.png';
import dtb from '../assets/dtb-bg.png';
import epesipay from '../assets/epesipay-logobg.png';


const Footer = () => {
  const { ref, inView } = useInView({
    threshold: 0.2, 
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 } 
    }
  };

  const columnVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, delay: 0.2 } 
    }
  };

  const socialVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, delay: 0.4 } // Duration of the fade-in effect with delay
    }
  };

  return (
    <motion.footer 
      className="footer"
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="footer-content">
        <motion.div className="footer-logo" variants={columnVariants}>
          <div className="logo-container-footer">
            <img src={logo} alt="Finpay" />
            <h2>Epesipay</h2>
          </div>
          <div className="partners-logo">
          <img src={futurizac} alt="" />
          <img src={dtb} alt="" />
          {/* <img src={epesipay} alt="" /> */}
        </div>
        </motion.div>
        <div className="footer-links">
          <motion.div className="footer-column" variants={columnVariants}>
            <h4>Contact Us</h4>
            <ul>
              <li><a href="#">support@epesipay.com</a></li>
              <li><a href="#">+254 107174680</a></li>
              <li><a href="#">+254 714853448</a></li>
              <li><a href="#">P.O Box 61901-00200</a></li>
              <li><a href="#">Nairobi Kenya</a></li>
            </ul>
          </motion.div>
          <motion.div className="footer-column" variants={columnVariants}>
            <h4>Download App</h4>
            <ul>
              <li><a href="https://play.google.com/store/apps/details?id=com.futurizac.epesipay">Google playstore</a></li>
              <li><a href="#">App Store (Coming Soon)</a></li>
            </ul>
          </motion.div>
          <motion.div className="footer-column" variants={columnVariants}>
            <h4>Links</h4>
            <ul>
              <li><Link to="Home" smooth={true} duration={500}>
                Home
              </Link>
              </li>
              <li><Link to="Services" smooth={true} duration={500}>
          Services
        </Link></li>
              <li><Link to="About" smooth={true} duration={500}>
          About us
        </Link></li>
              <li><Link to="Onboarding" smooth={true} duration={500}>
          Onboarding
        </Link></li>
              <li><a href="https://business.epesipay.com/" target='_blank' rel="noreferrer">
          Epesipay Business
        </a></li>
            </ul>
          </motion.div>
        </div>
        <motion.div className="footer-social" variants={socialVariants}>
          <p>Follow us on</p>
          <div className="social-icons">
            <a href="https://x.com/EpesiPay"><FaTwitter /></a>
            <a href="https://www.linkedin.com/company/epesipay/"><FaLinkedin /></a>
            <a href="https://www.facebook.com/profile.php?id=61560520585438"><FaFacebook /></a>
            <a href="https://www.instagram.com/epesipay/"><FaInstagram /></a>
            <a href="https://www.tiktok.com/@epesipay"><FaTiktok /></a>
          </div>
        </motion.div>
      </div>
      <div className="footer-bottom">
        <p>&copy; Epesipay 2024. All Rights Reserved. Privacy & Policy. Terms & Conditions</p>
      </div>
    </motion.footer>
  );
};

export default Footer;