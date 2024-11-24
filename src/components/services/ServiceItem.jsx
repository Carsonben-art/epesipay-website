import React from 'react';
import { Box, Heading, Text, VStack, HStack, Circle, Divider } from '@chakra-ui/react';

const ServiceItem = ({ number, title, description }) => (
  <HStack align="start" spacing={4}>
    <VStack spacing={0} align="center">
      <Circle size="40px" bg="blue.50" color="blue.600">
        <Text fontWeight="bold">{number}</Text>
      </Circle>
      <Divider orientation="vertical" borderColor="blue.200" height="50px" />
    </VStack>
    <VStack align="start" spacing={1}>
      <Heading fontSize="lg">{title}</Heading>
      <Text color="gray.600">{description}</Text>
    </VStack>
  </HStack>
);

const ServicesSection = () => {
  return (
    <Box p={8} maxWidth="800px" mx="auto">
      <VStack spacing={6} align="start">
        <Heading fontSize="2xl" fontWeight="bold">
          Providing You With All of Our Hearts
        </Heading>
        <Text color="gray.600">
          Explore this space to discover the genuine care and passion we've
          embedded into every aspect of our app, making your journey towards
          financial success as heartfelt as it is effective.
        </Text>
        <VStack spacing={8} align="start">
          <ServiceItem
            number="01"
            title="Affordable Transfers"
            description="Free transfers within EpesiPay, and incredibly low market rates for external transactions—get unlimited transfers with a small monthly fee."
          />
          <ServiceItem
            number="02"
            title="Fast and Secure Transactions"
            description="Experience ultra-fast payments, fortified by state-of-the-art security. Your payments are never more than a scan away, and always encrypted for your safety."
          />
          <ServiceItem
            number="03"
            title="Multiple Wallets"
            description="Manage your funds like never before—store money in multiple wallets and earn yield, maximizing your financial potential."
          />
        </VStack>
      </VStack>
    </Box>
  );
};

export default ServicesSection;