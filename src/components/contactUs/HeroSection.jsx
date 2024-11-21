import React from "react";
import {
  Box,
  Text,
  Button,
  VStack,
  Stack,
  useBreakpointValue,
  Image,
} from "@chakra-ui/react";
import bg from '../../assets/user.webp'

const HeroSection = () => {
  return (
    <Box
      position="relative"
      bg="gray.900"
      color="white"
      py={10}
      px={6}
      height={{ base: "auto", md: "80vh" }}
      display="flex"
      alignItems="center"
      bgImage={bg}
    >

      {/* Content Section */}
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={6}
        align="flex-start"
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 8 }}
      >
        <VStack align="flex-start" spacing={4} maxW={{ base: "100%", md: "50%" }}>
          <Text
            fontSize={useBreakpointValue({ base: "3xl", md: "5xl" })}
            fontWeight="bold"
            lineHeight="short"
          >
            Get in touch
          </Text>
          <Text
            fontSize={useBreakpointValue({ base: "md", md: "xl" })}
            lineHeight="base"
          >
            WE'RE HERE TO HELP, 24/7
          </Text>
          <Text fontSize={useBreakpointValue({ base: "sm", md: "lg" })}>
          We're here to assist you every step of the way. Whether you have questions, feedback,
          or are interested in collaborating, don't hesitate to reach out.
          </Text>
          <Button
            size="lg"
            colorScheme="teal"
            bg="teal.400"
            _hover={{ bg: "teal.500" }}
          >
            Contact Us
          </Button>
        </VStack>

        {/* Optional Spacer for Image */}
        {/* <Box
          display={{ base: "none", md: "block" }}
          flex="1"
          alignSelf="center"
        >
          <Image
            src="/path/to/your/image.jpg" // Replace with your image path
            alt="Contact Support"
            borderRadius="md"
            objectFit="cover"
          />
        </Box> */}
      </Stack>
    </Box>
  );
};

export default HeroSection;
