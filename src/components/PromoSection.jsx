import React from 'react';
import { Box, Button, Text, VStack, Image } from '@chakra-ui/react';
import { motion, useInView } from 'framer-motion';

import card from '../assets/epesipay_bs_card.png'

const AnimatedBox = motion(Box);
const RotatingStar = motion(Box);

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
          <Text fontSize="3xl" fontWeight="bold">
            Start receiving your client transactions <Text as="span" fontWeight="bold" fontStyle="italic" color="#F4AE1A">easily using epesipay business.</Text>
          </Text>
          <Text fontSize="md" mt={2}>
            Join over a million businesses who choose EPESIPAY for fast and secure transfers.
          </Text>
        </AnimatedBox>
        
        <a href="https://business.epesipay.com/" target="_blank" rel="noopener noreferrer">
            <Button colorScheme="whiteAlpha" variant="solid" mt={4}>
                Register Now
            </Button>
        </a>
      </VStack>

      <Box position="relative" mt={[8, 3]}>
        <RotatingStar
          position="absolute"
          top={0}
          right={0}
          width="24px"
          height="24px"
          borderRadius="50%"
          bg="#30180D"
          transformOrigin="center"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
        />
        <RotatingStar
          position="absolute"
          top={0}
          right="30px"
          width="24px"
          height="24px"
          borderRadius="50%"
          bg="#F4AE1A"
          transformOrigin="center"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
        />
        <RotatingStar
          position="absolute"
          top="30px"
          right="15px"
          width="24px"
          height="24px"
          borderRadius="50%"
          bg="#f7f7f7"
          transformOrigin="center"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 4, ease: 'linear' }}
        />
        <AnimatedBox
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: isInView ? 1 : 0, x: isInView ? 0 : 50 }}
          transition={{ duration: 1 }}
        >
          <Image src={card} alt="Money and coins" borderRadius="lg" />
        </AnimatedBox>
      </Box>
    </Box>
  );
};

export default PromoSection;
