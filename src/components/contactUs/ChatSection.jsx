import React from "react";
import {
  Box,
  Text,
  Button,
  VStack,
  Stack,
  Image,
  useBreakpointValue,
} from "@chakra-ui/react";
import man from '../../assets/man.jpg'
import card from '../../assets/epesipay-bg.webp'

const ChatSection = () => {
  return (
    <Box
      bg="white"
      py={10}
      px={6}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={8}
        align="center"
        maxW="1200px"
        w="100%"
        mx="auto"
      >
        
        <Box>
            <Image src={man} width={400} height={300} borderRadius={14}/>
        </Box>
        {/* Text Content Section */}
        <VStack
          flex="1"
          align="flex-start"
          spacing={4}
          maxW={{ base: "100%", md: "50%" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <Text
            fontSize={useBreakpointValue({ base: "2xl", md: "3xl" })}
            fontWeight="bold"
          >
            CHAT TO US DIRECTLY
          </Text>
          <Text fontSize={useBreakpointValue({ base: "md", md: "lg" })} color="gray.600">
            Speak to our EpesiPay support team via secure WhatsApp chat. Tap
            on the button bellow or the WhatsApp icon in the bottom right of your screen to reach our help desk directly.
          </Text>
          <Button
            size="lg"
            colorScheme="blackAlpha"
            bg="black"
            color="white"
            _hover={{ bg: "gray.700" }}
          >
            Chat on WhatsApp
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default ChatSection;
