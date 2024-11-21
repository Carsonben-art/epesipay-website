import React from "react";
import { Box, Heading, Text, VStack, HStack, Icon, Divider } from "@chakra-ui/react";
import { FaRegFileAlt, FaDollarSign, FaDatabase } from "react-icons/fa";

const StatisticsSection = () => {
  return (
    <Box bg="white" color="gray.700" py={10} px={{ base: 4, md: 16 }}>
      {/* Heading Section */}
      <VStack spacing={4} textAlign="center" maxW="4xl" mx="auto">
        <Heading fontSize={{ base: "2xl", md: "4xl" }} fontWeight="bold">
          The numbers reflect our reputation.
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }}>
          Your success is our mission. At EpesiPay, we offer expert guidance, unlocking your potential for seamless transactions and financial growth.
        </Text>
      </VStack>

      {/* Icons Section */}
      <HStack justify="center" spacing={8} mt={8}>
        <Icon as={FaRegFileAlt} w={12} h={12} color="#30180D" />
        <Icon as={FaDollarSign} w={12} h={12} color="#30180D" />
        <Icon as={FaDatabase} w={12} h={12} color="#30180D" />
      </HStack>

      <Divider my={8} borderColor="gray.300" />

      {/* Statistics Section */}
      <HStack
        justify="space-around"
        flexWrap="wrap"
        spacing={8}
        textAlign="center"
      >
        {/* Stat 1 */}
        <VStack spacing={2} maxWidth={300}>
          <Heading fontSize="3xl" color="#30180D">
            1000+
          </Heading>
          <Text fontSize="md" color="gray.600">
            Active users enjoying EpesiPay flexible services for their transactions.
          </Text>
        </VStack>

        {/* Stat 2 */}
        <VStack spacing={2} maxWidth={300}>
          <Heading fontSize="3xl" color="#30180D">
            100k+
          </Heading>
          <Text fontSize="md" color="gray.600">
            Amounts saved daily by clients using our cheap transaction fees.
          </Text>
        </VStack>

        {/* Stat 3 */}
        <VStack spacing={2} maxWidth={300}>
          <Heading fontSize="3xl" color="#30180D">
            10M+
          </Heading>
          <Text fontSize="md" color="gray.600">
            Targeted active users after one year of our launch.
          </Text>
        </VStack>
      </HStack>
    </Box>
  );
};

export default StatisticsSection;
