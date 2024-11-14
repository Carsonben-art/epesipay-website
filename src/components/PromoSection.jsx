import React from 'react';
import { Box, Button, Text, VStack, Image } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';

import card from '../assets/epesipay_bs_card.png'

const AnimatedBox = motion(Box);


const PromoSection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <Box
      ref={ref}
      bg="#0087D0"
      color="white"
      p={10}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      flexDirection={['column', 'row']}
    >
      <VStack align="flex-start" spacing={4} maxW="lg">
        <AnimatedBox
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : -100 }}
          transition={{ duration: 1 }}
        >
          <Text fontSize="4xl" fontWeight="bold">
            Do you own a <Text as="span" fontWeight="bold" fontStyle="italic" color="#F4AE1A">business?</Text>
          </Text>
          <Text fontSize="md" mt={2}>
          EpesiPay has got you covered. Join thousands of other business owners who have chosen EpesiPay to streamline payments. Whether B2B or B2C, enjoy fast and secure transactions.
          </Text>
        </AnimatedBox>
        
        <a href="https://business.epesipay.com/" target="_blank" rel="noopener noreferrer">
            <Button colorScheme="whiteAlpha" variant="solid" mt={4}>
                Register Now
            </Button>
        </a>
      </VStack>

      <Box position="relative" mt={[8, 3]}>
       
        <AnimatedBox
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          <Image src={card} alt="card" borderRadius="lg" width='500px' height='500px' />
        </AnimatedBox>
      </Box>
    </Box>
  );
};

export default PromoSection;
