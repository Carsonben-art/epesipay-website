import React from "react";
import { Box, VStack, Text, Heading, useBreakpointValue, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaRocket, FaQrcode, FaHandshake, FaMoneyCheckAlt } from "react-icons/fa";

// Framer Motion component
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const Features = () => {
  const isMobile = useBreakpointValue({ base: true, md: false });

  const features = [
    {
      icon: <FaRocket size={48} color="#3182CE" />,
      title: "Lightning-Fast Transactions",
      description:
        "Say goodbye to long queues and waiting times! With EpesiPay, payments are processed in a matter of seconds, allowing you to focus on what truly matters - running your business.",
    },
    {
      icon: <FaQrcode size={48} color="#3182CE" />,
      title: "Simple QR Code Payments",
      description:
        "Gone are the days of fumbling for cash or entering lengthy card details. Our seamless QR code system makes payments effortless and secure with just a quick scan.",
    },
    {
      icon: <FaHandshake size={48} color="#3182CE" />,
      title: "Merchant-Friendly Integration",
      description:
        "EpesiPay integrates smoothly into your point-of-sale system, ensuring a hassle-free setup tailored to your business needs.",
    },
    {
      icon: <FaMoneyCheckAlt size={48} color="#3182CE" />,
      title: "Affordable for All",
      description:
        "Big or small, we believe every business should have access to affordable payment solutions. Our competitive pricing supports businesses of all sizes.",
    },
  ];

  return (
    <Box bg="gray.50" py={10} px={4}>
      {/* Animated Heading Section */}
      <VStack spacing={4} textAlign="center" mb={8}>
        <MotionHeading
          as="h2"
          fontSize="3xl"
          fontWeight="bold"
          color="#0087D0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          EpesiPay Business Key Features
        </MotionHeading>
        <MotionHeading
          as="h2"
          fontSize="3xl"
          fontWeight="bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Transform How You Process Payments with EpesiPay
        </MotionHeading>
        <MotionText
          fontSize="lg"
          color="gray.600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          Streamline your business workflow and enhance customer satisfaction with our intelligent
          payment solutions.
        </MotionText>
      </VStack>

      {/* Animated Feature Cards */}
      <Flex flexWrap={"wrap"} gap={8} px={{ base: 4, md: 8 }}>
        {features.map((feature, index) => (
          <MotionBox
            key={index}
            p={6}
            bg="white"
            shadow="md"
            rounded="lg"
            borderWidth="1px"
            borderColor="gray.200"
            maxW={350}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, boxShadow: "lg" }}
          >
            <VStack spacing={4} align={"left"} maxW={"300px"}>
              {feature.icon}
              <Heading as="h3" fontSize="xl" fontWeight="semibold" textAlign={"left"}>
                {feature.title}
              </Heading>
              <Text fontSize="md" color="gray.600">
                {feature.description}
              </Text>
            </VStack>
          </MotionBox>
        ))}
      </Flex>
    </Box>
  );
};

export default Features;
