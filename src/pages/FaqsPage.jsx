import { Box, Button, Heading, Text, Image, VStack, Stack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Faqs from '../components/Faqs';
import faqImage from '../assets/Faq.jpeg';

const FaqsPage = () => {
  return (
    <Box
      p={{ base: 4, md: 8, lg: 10 }} // Adjust padding for different screen sizes
      pt={{ base: "5rem", md: "6rem", lg: "7rem" }} // Adjust padding top for responsiveness
    >
      {/* Use Stack for responsiveness */}
      <Stack
        direction={{ base: 'column', md: 'row' }} // Column layout on mobile, row on larger screens
        spacing={{ base: 6, md: 10 }} // Adjust spacing between elements based on screen size
        align={{ base: 'stretch', md: 'center' }} // Stretch on mobile for full width
      >
        {/* VStack appears first on mobile */}
        <VStack align="start" maxW={{ base: "100%", md: 600 }} spacing={{ base: 4, md: 6 }}>
          <Text fontWeight="bold" fontSize={{ base: 'md', md: 'lg' }} color="gray.600">
            FAQ
          </Text>
          <Heading fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold">
            FREQUENTLY ASKED QUESTIONS AND ANSWERS!
          </Heading>
          <Text fontSize={{ base: 'sm', md: 'md' }} color="gray.700">
            Still Have Questions? We're Here to Help!
          </Text>
          {/* Update the Button to use Link */}
          <Button
            as={Link} // Use Link for navigation
            to="/contacts" // Navigate to /contacts route
            colorScheme="blue"
            size="md"
            width={{ base: "full", md: 150 }} // Full width on mobile, fixed width on larger screens
          >
            Contact Us
          </Button>
          <Image
            src={faqImage}
            maxW={{ base: "100%", md: 450 }}
            borderRadius={24}
            objectFit="cover" // Ensures the image scales nicely
          />
        </VStack>

        {/* Faqs Component */}
        <Faqs />
      </Stack>
    </Box>
  );
};

export default FaqsPage;
