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

import ContactSection from "./ContactSection";
 import chat from '../../assets/chat.webp'

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
            <Image src={chat} maxWidth={500}  borderRadius={14}/>
        </Box>
        {/* Text Content Section */}
        <VStack
          flex="1"
          align="flex-start"
          spacing={4}
          maxW={{ base: "100%", md: "50%" }}
          textAlign={{ base: "center", md: "left" }}
        >
          <ContactSection />
        </VStack>
      </Stack>
    </Box>
  );
};

export default ChatSection;
