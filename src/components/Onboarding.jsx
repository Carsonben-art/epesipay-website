import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Box, Image, Text, Flex } from '@chakra-ui/react';

import signup from '../assets/signup.jpg';
import kyc from '../assets/kyc.jpg';
import transact from '../assets/transaction.jpg';

const Onboarding = () => {
  const { ref, inView } = useInView({ threshold: 0.2 });

  const steps = [
    {
      title: 'Download & Signup',
      description: 'Download & Sign up to Epesipay and set up your account from the dashboard.',
      image: signup,
    },
    {
      title: 'Submit KYC',
      description: 'After filling in your details, upload a picture of your national ID and take a selfie with your right thumbs up.',
      image: kyc,
    },
    {
      title: 'Begin Transacting!',
      description: 'On approval of your KYC, your wallet is ready to start transacting. Upload cash from your M-Pesa or bank account and enjoy!',
      image: transact,
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 80, damping: 15 },
    },
  };

  return (
    <motion.section
      className="onboarding"
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.3, delayChildren: 0.2 },
        },
      }}
    >
      <Box className="onboarding-container" p={4}>
        <Text fontSize="4xl" mb={4} textAlign="center" fontWeight={700}>
          Onboarding
        </Text>
        <Text fontSize="lg" mb={8} textAlign="center">
          Unlock Your Financial Potential in These Simple Steps
        </Text>

        <Flex gap={10} flexWrap="wrap" justifyContent="center">
          {steps.map((step, index) => (
            <motion.div key={index} variants={cardVariants}>
              <Box
                bg="rgba(255, 255, 255, 0.3)" 
                borderRadius="12px"
                boxShadow="lg"
                backdropFilter="blur(10px)" 
                border="1px solid rgba(255, 255, 255, 0.2)"
                overflow="hidden"
                maxW="300px"
                minH="380px" // fixed height for consistent card sizes
                textAlign="center"
                p={4}
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="space-between"
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  width="100%"
                  height="200px"
                  objectFit="cover"
                  borderRadius="md"
                  mb={4}
                />
                <Text fontSize="xl" fontWeight="bold" color="teal.600">
                  {step.title}
                </Text>
                <Text fontSize="md" color="gray.600" mt={2}>
                  {step.description}
                </Text>
              </Box>
            </motion.div>
          ))}
        </Flex>
      </Box>
      
    </motion.section>
  );
};

export default Onboarding;
