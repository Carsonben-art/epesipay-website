import React from "react";
import { Box, Heading, Text, SimpleGrid, VStack, Link, Icon, Flex } from "@chakra-ui/react";
import { FaYoutube } from "react-icons/fa";

// Utility function to convert YouTube watch link to embed link
const getEmbedUrl = (url) => {
  const urlObj = new URL(url);
  if (urlObj.hostname.includes("youtube.com") && urlObj.searchParams.get("v")) {
    return `https://www.youtube.com/embed/${urlObj.searchParams.get("v")}`;
  } else if (urlObj.hostname.includes("youtu.be")) {
    return `https://www.youtube.com/embed${urlObj.pathname}`;
  }
  return url; // Return the original URL if it's not a valid YouTube link
};

const UserGuide = () => {
  const guides = [
    {
      title: "How to create multiwallets on EpesiPay",
      description: "Learn how to create multiple wallets for easy transactions on EpesiPay with no extra requirements.",
      videoUrl: "https://www.youtube.com/watch?v=q7fZDAB4r7w&t=44s",
    },
    {
      title: "How to Register for Epesipay",
      description: "Learn how to set up your EpesiPay account and integrate it into your business in minutes.",
      videoUrl: "https://www.youtube.com/watch?v=SYVW4AWp-vI",
    },
    {
      title: "Learn how to deposit money from M-Pesa to EpesiPay",
      description: "Understand how you can load your EpesiPay account from M-Pesa with no charges.",
      videoUrl: "https://youtu.be/3riSk8XQL5g?si=G_TgZ38VP2ejrv6Q",
    },
    {
      title: "How to Load Money on EpesiPay via QR Code",
      description: "Learn how to effortlessly load your EpesiPay wallet with just a single QR code scan.",
      videoUrl: "https://youtu.be/_Wpz7Ydsr_E?si=_JkYoXRLjPrtyslm",
    },
    {
      title: "How to send Money on epesipay",
      description: "Learn how to send money to other EpesiPay users or to other platforms supported by Epesipay.",
      videoUrl: "https://youtu.be/9xpccICqCYo?si=deo1xUDdmfbmh3NR",
    },
  ];

  return (
    <Box bg="gray.800" color="white" py={20} px={4}>
      <VStack spacing={6} textAlign="center" mb={10}>
        <Heading as="h1" fontSize="4xl" fontWeight="bold" color={"#F4AE1A"}>
          EpesiPay User Guides
        </Heading>
        <Text fontSize="lg" color="gray.400">
          Watch our video tutorials to get started and maximize the potential of EpesiPay for your business.
        </Text>
      </VStack>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} px={{ base: 4, md: 8 }}>
        {guides.map((guide, index) => (
          <Box
            key={index}
            bg="gray.700"
            p={6}
            rounded="lg"
            shadow="md"
            borderWidth="1px"
            borderColor="gray.600"
            transition="transform 0.3s"
            _hover={{ transform: "translateY(-6px)", shadow: "lg" }}
          >
            <VStack spacing={4}>
              <Flex alignItems="center" gap={3}>
                <Icon as={FaYoutube} boxSize={8} color="red.500" />
                <Heading as="h3" fontSize="xl" fontWeight="semibold" textAlign="center">
                  {guide.title}
                </Heading>
              </Flex>
              <Text fontSize="md" color="gray.300" textAlign="center">
                {guide.description}
              </Text>
              <Box w="100%" h="0" pb="56.25%" position="relative">
                <iframe
                  src={getEmbedUrl(guide.videoUrl)}
                  title={guide.title}
                  style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </Box>
              <Link
                href={guide.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                color="blue.400"
                fontWeight="medium"
              >
                Watch on YouTube
              </Link>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default UserGuide;
