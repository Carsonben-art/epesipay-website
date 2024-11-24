import React from 'react';
import { Box, Text, VStack, Container } from '@chakra-ui/react';
import pricingbg from '../../assets/pricebg.webp'
const PricingHero = () => {
  return (
    <Box
      bgImage={pricingbg}
      bgSize={"cover"}
      bgPosition={"center"}
      bgRepeat={"no-repeat"}
      height={"98vh"}
      py={{ base: 12, md: 20 }}
      px={{ base: 4, md: 8 }}
      display="flex"
      justifyContent="center"
      alignItems={"center"}
      textAlign="center"
    //   color="gray.800"
    >
      <Container maxW="container.md">
        <VStack spacing={6}>
          <Text
            fontSize={{ base: '2xl', md: '5xl' }}
            fontWeight="bold"
            color="#ffffff"
          >
            Flexible Plans to Suit Every Individual & Business
          </Text>
          <Text
            fontSize={{ base: 'md', md: 'lg' }}
            color="#f7f7f7"
            maxW="600px"
          >
            We understand that every business has unique needs, which is why we
            offer flexible pricing plans designed to scale with you.
          </Text>
        </VStack>
      </Container>
    </Box>
  );
};

export default PricingHero;