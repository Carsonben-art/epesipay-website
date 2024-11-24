import React from 'react';
import { Box, Flex, Text, VStack, HStack, Icon, Link, Button } from '@chakra-ui/react';
import { FaMoneyCheckAlt, FaBusinessTime, FaUserCheck} from 'react-icons/fa';
import { GiClockwork } from "react-icons/gi";

const features = [
  {
    icon: FaMoneyCheckAlt,
    title: 'Boost Your Sales',
    description: "Offering EpesiPay as a payment option expands your customer base. With an increasing number of Kenyans adopting digital payments, you'll be poised to tap into this lucrative market.",
  },
  {
    icon: FaUserCheck,
    title: 'User-Friendly Experience',
    description: "We've designed our platform to be intuitive and easy to navigate. No complex processes or technical jargon here - just a user-friendly experience for everyone.",
  },
  {
    icon: FaBusinessTime,
    title: 'Business Solutions',
    description: "EpesiPay caters to businesses of all sizes, from street vendors to large retailers. Our scalable solutions ensure that you can adapt to your business's evolving needs effortlessly.",
  },
  {
    icon: GiClockwork,
    title: 'Quick Setup',
    description: "Getting started with EpesiPay is easy and fast. Our onboarding process is straightforward, allowing you to start accepting payments in no time.",
  },
];

const FeaturesSection = () => {
  return (
    <Box bg="#ffffff" py={{ base: 10, md: 20 }} px={{ base: 6, md: 12 }} color="gray.800">
      <VStack spacing={6} mb={8} align="left">
        <Text fontSize={{ base: '3xl', md: '5xl' }} fontWeight="bold" color={"#30180D"}>
          Why choose us?
        </Text>
      </VStack>

      <Flex
        direction={{ base: 'column', md: 'row' }}
        justify="space-between"
        wrap="wrap"
        gap={8}
      >
        {features.map((feature, index) => (
          <VStack
            key={index}
            w={{ base: 'full', md: '45%', lg: '22%' }}
            p={6}
            align={"left"}
            textAlign="left"
            spacing={4}
          >
            <Icon as={feature.icon} w={10} h={10} color="#0087D0" />
            <Text fontSize="1rem" fontWeight="bold" color="#0087D0">{feature.title}</Text>
            <Text color="gray.600" fontSize="md">{feature.description}</Text>
            
          </VStack>
        ))}
      </Flex>

      
    </Box>
  );
};

export default FeaturesSection;
