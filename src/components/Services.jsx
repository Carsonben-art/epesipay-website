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
        <div 
            className='services-section'
            
        >
            <div className="services-section-container">
                <p className='title-text'>FUTURE PAYMENT</p>
                <div className="service-title" >
                    <h1>Your All-in-One Mobile Financial Hub</h1>
                    <p>Experience the convenience of managing all your transactions in one place.
                    Join thousands of satisfied users who've made the smart switch to simpler, faster, 
                    and more secure mobile transactions.
                    </p>
                </div>
                <div className="services-container" >
                    <div className="services" >
                        <StyledIcon icon={FaMoneyBillTransfer} size={24} color="#30180D" />
                        <h3>Affordable Transfers</h3>
                        <p>Free transfers within EpesiPay users. Enjoy the lowest market rates to 
                            other mobile networks. With a monthly fee of only Ksh. 170 you can make as 
                            many transactions as you want.
                        </p>
                    </div>
                    <div className="services" >
                        <StyledIcon icon={MdOutlineSecurity} size={24} color="#30180D" />
                        <h3>Fast and Secure Transactions</h3>
                        <p>Unlock lightning-fast, fortress-secure payments with our cutting-edge QR technology. 
                            Simply scan your store's unique code, tap your screen, and voilà! 
                            Your transaction is complete, wrapped in layers of ironclad encryption.
                        </p>
                    </div>
                    <div className="services">
                        <StyledIcon icon={BsBank2} size={24} color="#30180D" />
                        <h3>Multiple Wallets</h3>
                        <p>Run your operations with cash from your wallets and generate yield on funds stored in your wallets.<br/>
                       
                        </p>
                    </div> 
                </div>
            </div>
             
        </div>
    )
}

export default Services;
