import React from "react";
import {
  Box,
  Flex,
  Text,
  VStack,
  HStack,
  Icon,
  Link,
} from "@chakra-ui/react";
import { FaEnvelope, FaPhoneAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

// Contact Details Component
const ContactDetails = () => {
    return (
      <Box bg="gray.800" color="white" py={12} px={6}>
        <Flex
          direction={{ base: "column", md: "row" }}
          justify="space-around"
          align="center"
          wrap="wrap"
          gap={8}
        >
          {/* Contact Information */}
          <VStack spacing={4} align="flex-start">
            <Text fontSize="2xl" fontWeight="bold">
              Contact Us
            </Text>
            <HStack>
              <Icon as={FaPhoneAlt} boxSize={5} />
              <Text>+1 (123) 456-7890</Text>
            </HStack>
            <HStack>
              <Icon as={FaEnvelope} boxSize={5} />
              <Text>support@example.com</Text>
            </HStack>
          </VStack>
  
          {/* Social Links */}
          <VStack spacing={4} align="flex-start">
            <Text fontSize="2xl" fontWeight="bold">
              Follow Us
            </Text>
            <HStack spacing={4}>
              <Link href="#" isExternal>
                <Icon as={FaFacebook} boxSize={6} />
              </Link>
              <Link href="#" isExternal>
                <Icon as={FaTwitter} boxSize={6} />
              </Link>
              <Link href="#" isExternal>
                <Icon as={FaLinkedin} boxSize={6} />
              </Link>
              <Link href="#" isExternal>
                <Icon as={FaInstagram} boxSize={6} />
              </Link>
            </HStack>
          </VStack>
        </Flex>
      </Box>
    );
  };
  export default ContactDetails;
  