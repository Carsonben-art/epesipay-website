import React from 'react';
import { Box, Heading, Text, Button, VStack } from '@chakra-ui/react';
import video from '../../assets/vbg.webm'
const ServicesHero = () => {
  return (
    <Box
      position="relative"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: '-1',
        }}
      >
        <source src={video} type="video/mp4" />
      </video>

      <VStack
        spacing={6}
        textAlign="center"
        p={6}
        borderRadius="md"
      >
        <Text fontSize="sm" color="blue.600" fontWeight="bold">
          SERVICES
        </Text>
        <Heading
          fontSize={['2xl', '3xl', '4xl']}
          fontWeight="bold"
          color="#F4AE1A"
        >
          Empowering Your Business with <br /> Future-Proof Payments
        </Heading>
        <Text fontSize={['sm', 'md']} color="#f7f7f7" maxW="lg">
        EpesiPay is revolutionizing how you manage and transfer money, offering a seamless and secure mobile financial hub. From fast, free transfers to industry-leading security and multiple wallet management, we provide the tools to streamline your transactions. Join thousands of satisfied users and make the smart switch to a future where payments are easier, safer, and smarter.
        </Text>
       
      </VStack>
    </Box>
  );
};

export default ServicesHero;