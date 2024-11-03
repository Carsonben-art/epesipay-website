import React from 'react';

import { FaMoneyBillTransfer } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { BsBank2 } from "react-icons/bs";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';



const Services = () => {
  

    const StyledIcon = ({ icon: Icon, size = 24, color = "#000000" }) => (
        <Icon size={size} color={color} />
    );

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

    const itemVariants = {
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

    const { ref, inView } = useInView({
        threshold: 0.2, 
    });

    return (
        <motion.div 
            className='services-section'
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            ref={ref}
        >
            <div className="services-section-container">
                <motion.p className='title-text' variants={itemVariants}>FUTURE PAYMENT</motion.p>
                <motion.div className="service-title" variants={itemVariants}>
                    <h1>Your All-in-One Mobile Financial Hub</h1>
                    <p>Experience the convenience of managing all your transactions in one place.
                    Join thousands of satisfied users who've made the smart switch to simpler, faster, 
                    and more secure mobile transactions.
                    </p>
                </motion.div>
                <motion.div className="services-container" variants={containerVariants}>
                    <motion.div className="services" variants={itemVariants}>
                        <StyledIcon icon={FaMoneyBillTransfer} size={24} color="#30180D" />
                        <h3>Affordable Transfers</h3>
                        <p>Unlimited transactions within the platform for only Ksh. 170 per month & receive upto Ksh. 500 throught the 
                            Tap&Go for only 1 bob. Send upto Ksh. 1000 for only 5 shillings.
                        </p>
                    </motion.div>
                    <motion.div className="services" variants={itemVariants}>
                        <StyledIcon icon={MdOutlineSecurity} size={24} color="#30180D" />
                        <h3>Fast and Secure Transactions</h3>
                        <p>Unlock lightning-fast, fortress-secure payments with our cutting-edge QR technology. 
                            Simply scan your store's unique code, tap your screen, and voilà! 
                            Your transaction is complete, wrapped in layers of ironclad encryption.
                        </p>
                    </motion.div>
                    <motion.div className="services" variants={itemVariants}>
                        <StyledIcon icon={BsBank2} size={24} color="#30180D" />
                        <h3>Multiple Wallets</h3>
                        <p>Run your operations with cash from your wallets and generate yield on funds stored in your wallets.<br/>
                        <a href="https://www.youtube.com/embed/q7fZDAB4r7w" target='_blank'>Watch How</a>
                        </p>
                    </motion.div> 
                </motion.div>
            </div>
             
        </motion.div>
    )
}

export default Services;
