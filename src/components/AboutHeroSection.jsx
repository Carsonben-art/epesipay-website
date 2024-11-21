import { Box, Button, Heading, Text, VStack } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import bgImage from '../assets/aboutbg.jpg'
const AboutHeroSection = () => {
  return (
    <Box
      position="relative"
      bgImage={`url(${bgImage})`}
      bgSize="cover"
      bgPosition="center"
      bgRepeat="no-repeat"
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      color="white"
    >
      <VStack
        spacing={4}
        textAlign="center"
        // bgColor="rgba(0, 0, 0, 0.5)"
        p={8}
        borderRadius="lg"
      >
        <Text fontSize="lg" fontWeight="bold" color="#F4AE1A">
          About us
        </Text>
        <Heading fontSize={{ base: "2xl", md: "4xl" }}>
        Revolutionizing Transactions, Anytime, Anywhere
        </Heading>
        <Text fontSize={{ base: "md", md: "lg" }} maxW="lg">
        Experience Epesipay by Futurizac—the ultimate platform for effortless financial transactions. 
        Built with innovation and simplicity at its core, Epesipay empowers you to manage your money 
        seamlessly, anytime, anywhere.
        </Text>
        <Button
          rightIcon={<FaArrowRight />}
          colorScheme="blue"
          size="lg"
        >
          Register Now
        </Button>
      </VStack>
    </Box>
  );
};

export default AboutHeroSection;
