import {
    Box,
    Heading,
    Text,
    VStack,
    HStack,
    Icon,
    List,
    ListItem,
  } from "@chakra-ui/react";
  import { FaBullseye, FaLightbulb } from "react-icons/fa";
  
  const AboutDescription = () => {
    return (
      <Box bg="white" color="gray.700" py={10} px={{ base: 4, md: 16 }}>
        <VStack spacing={6} maxW="6xl" mx="auto" textAlign="center">
          <Heading
            fontSize={{ base: "2xl", md: "4xl" }}
            fontWeight="bold"
            textTransform="uppercase"
            color="gray.800"
          >
            We're Innovating Financial Transactions for the Future
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }} maxW="4xl">
            EpesiPay, a cutting-edge solution developed by <strong>Futurizac</strong>, reimagines financial transactions for the modern era. Our platform is meticulously crafted to deliver unparalleled simplicity and user-friendliness, empowering you to conduct transactions seamlessly, regardless of time or location.
          </Text>
        </VStack>
  
        <HStack
          mt={10}
          spacing={6}
          flexWrap="wrap"
          alignItems="flex-start"
          justifyContent="center"
        >
          {/* Left Section */}
          <VStack
            spacing={4}
            align="start"
            maxW={{ base: "full", md: "50%" }}
            p={6}
            // bg="gray.100"
            border="1px solid #d7d7d7"
            borderRadius="md"
            // boxShadow="md"
          >
            <Heading fontSize="lg" color="gray.800">
              Common Financial Frustrations
            </Heading>
            <List spacing={3} pl={4}>
              <ListItem>
                <Icon as={FaBullseye} color="red.500" mr={2} />
                Exorbitant transaction fees
              </ListItem>
              <ListItem>
                <Icon as={FaBullseye} color="red.500" mr={2} />
                Misdirected payments
              </ListItem>
              <ListItem>
                <Icon as={FaBullseye} color="red.500" mr={2} />
                Aggravating processing delays
              </ListItem>
              <ListItem>
                <Icon as={FaBullseye} color="red.500" mr={2} />
                Convoluted payment procedures
              </ListItem>
            </List>
          </VStack>
  
          {/* Right Section */}
          <VStack
            spacing={4}
            align="start"
            maxW={{ base: "full", md: "50%" }}
            p={6}
            // bg="gray.100"
            border="1px solid #d7d7d7"
            borderRadius="md"

            // boxShadow="md"
          >
            <Heading fontSize="lg" color="gray.800">
              Why Choose EpesiPay?
            </Heading>
            <Text fontSize="md" color="gray.700">
              EpesiPay addresses these pain points head-on. Our innovative
              approach streamlines your financial interactions, offering a robust,
              secure, and efficient alternative to conventional methods. By
              choosing EpesiPay, you're not just adopting a new payment system –
              you're embracing a forward-thinking financial ecosystem designed to
              enhance your daily transactions and overall financial management.
            </Text>
          </VStack>
        </HStack>
      </Box>
    );
  };
  
  export default AboutDescription;
  