import React from 'react';
import { Box, Text, VStack, HStack, Icon, Link } from '@chakra-ui/react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaTiktok } from 'react-icons/fa';

const ContactSection = () => {
  return (
    <Box
      bg="#ffffff"
      py={{ base: 12, md: 20 }}
      px={{ base: 4, md: 8 }}
      color="gray.800"
    >
      <VStack spacing={8} align="flex-start" maxW="container.md" mx="auto">
        <VStack spacing={4} align="flex-start">
          <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" color={"#0087D0"}>
            How can we help you?
          </Text>
          <Text fontSize={{ base: 'md', md: 'lg' }} color="gray.600">
            Kindly reach us through the contact details below. You can also visit our social media pages by clicking the social icons below.
          </Text>
        </VStack>

        <VStack spacing={6} align="flex-start">
          {/* Office Address */}
          <HStack spacing={4}>
            <Icon as={FaMapMarkerAlt} boxSize={6} color="#0087D0" />
            <Box>
              <Text fontWeight="bold">Address:</Text>
              <Text>P.O Box 61901-00200 Nairobi-Kenya</Text>
            </Box>
          </HStack>

          {/* General Inquiries */}
          <HStack spacing={4}>
            <Icon as={FaEnvelope} boxSize={6} color="#0087D0" />
            <Box>
              <Text fontWeight="bold">General Inquiries:</Text>
              <Link href="mailto:support@epesipay.com" color="#0087D0" _hover={{ textDecoration: 'underline' }}>
                support@epesipay.com
              </Link>
            </Box>
          </HStack>

          {/* Toll-Free Number */}
          <HStack spacing={4}>
            <Icon as={FaPhoneAlt} boxSize={6} color="#0087D0" />
            <Box>
              <Text fontWeight="bold">Telephone:</Text>
              <Link href="tel:+254107174680" color="#0087D0" _hover={{ textDecoration: 'underline' }}>
                +254 107174680
              </Link>
              <br/>
              <Link href="tel:+254714853448" color="#0087D0" _hover={{ textDecoration: 'underline' }}>
                +254 7148534448
              </Link>
            </Box>
          </HStack>

          {/* Social Media Links */}
          <HStack spacing={6} pt={4}>
            <Link href="https://www.facebook.com/profile.php?id=61560520585438" isExternal>
              <Icon as={FaFacebook} boxSize={6} color="#0087D0" _hover={{ color: '#0269a0' }} />
            </Link>
            <Link href="https://www.instagram.com/epesipay/" isExternal>
              <Icon as={FaInstagram} boxSize={6} color="#0087D0" _hover={{ color: '#0269a0' }} />
            </Link>
            <Link href="https://x.com/EpesiPay" isExternal>
              <Icon as={FaTwitter} boxSize={6} color="#0087D0" _hover={{ color: '#0269a0' }} />
            </Link>
            <Link href="https://www.linkedin.com/company/epesipay/" isExternal>
              <Icon as={FaLinkedin} boxSize={6} color="#0087D0" _hover={{ color: '#0269a0' }} />
            </Link>
            <Link href="https://www.tiktok.com/@epesipay" isExternal>
              <Icon as={FaTiktok} boxSize={6} color="#0087D0" _hover={{ color: '#0269a0' }} />
            </Link>
          </HStack>
        </VStack>
      </VStack>
    </Box>
  );
};

export default ContactSection;
