import React from 'react';
import { Box, Flex, Text, Button, VStack, HStack, Image, Icon } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { FaArrowUp } from 'react-icons/fa';
import pos from '../../assets/pos.webp';
import graph from '../../assets/graph.webp';

const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionImage = motion(Image);

const BusinessHero = () => {
  return (
    <Box
      bg="#ffffff"
      py={{ base: 10, md: 20 }}
      px={{ base: 6, md: 12 }}
      color="gray.800"
      paddingTop="7rem"
    >
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="space-between"
        maxW="container.xl"
        mx="auto"
      >
        {/* Text Content with Animation */}
        <VStack
          align="flex-start"
          spacing={6}
          maxW={{ base: 'full', md: '50%' }}
        >
          <MotionText
            fontSize={{ base: '3xl', md: '5xl' }}
            fontWeight="bold"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Discover EpesiPay - Your Key to Business Growth
          </MotionText>
          <MotionText
            fontSize={{ base: 'md', md: 'lg' }}
            color="gray.600"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          >
            Unlock a world of opportunities with EpesiPay's range of services and features. We're
            dedicated to empowering your business with the tools it needs to thrive in today's
            fast-paced digital landscape.
          </MotionText>
          <HStack spacing={4}>
            <MotionButton
              bg="#0087D0"
              color="#ffffff"
              size="lg"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              as="a"
              href="https://business.epesipay.com/" 
            >
              Register Now
            </MotionButton>
          </HStack>
        </VStack>

        {/* Image and Widgets with Animations */}
        <Box position="relative" mt={{ base: 10, md: 0 }} w={{ base: 'full', md: '50%' }}>
          <MotionImage
            src={pos}
            alt="Marketing Dashboard"
            borderRadius="lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          />

          {/* Floating Data Widgets */}
          <MotionBox
            position="absolute"
            top="5%"
            right="5%"
            bg="white"
            p={2}
            borderRadius="md"
            boxShadow="lg"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Text fontSize="1rem">Digital Product</Text>
            <Text fontSize="xl" fontWeight="bold" color="#0087D0">
              8,230
            </Text>
          </MotionBox>

          <MotionBox
            position="absolute"
            top="20%"
            right="-8%"
            bg="white"
            p={2}
            borderRadius="md"
            boxShadow="lg"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Text fontSize="xl">Physical Product</Text>
            <Text fontSize="xl" fontWeight="bold" color="#0087D0">
              9,420
            </Text>
          </MotionBox>

          {/* Total Sales Widget */}
          <MotionBox
            position="absolute"
            bottom="-10%"
            left="-5%"
            bg="white"
            p={4}
            borderRadius="md"
            boxShadow="lg"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Text fontSize="lg" fontWeight="bold">
              Total Sales
            </Text>
            <HStack spacing={2}>
              <Text fontSize="2xl" fontWeight="bold">
                17,650
              </Text>
              <Icon as={FaArrowUp} color="green.600" />
              <Text color="green.600" fontWeight="bold">
                22.8%
              </Text>
            </HStack>
            <Image src={graph} alt="Sales Graph" mt={2} w="160px" h="80px" />
          </MotionBox>
        </Box>
      </Flex>
    </Box>
  );
};

export default BusinessHero;
