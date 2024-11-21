import React from 'react';
import { Box, Flex, Heading, Text, Button, Link } from '@chakra-ui/react';
import { FaArrowRight } from 'react-icons/fa';

const AboutFooterHero = () => {
  return (
    <Box bg="teal.500" py={{ base: 10, md: 20 }}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align="center"
        justify="center"
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 6, lg: 8 }}
      >
        <Box flex="1" mr={{ base: 0, md: 8 }} mb={{ base: 6, md: 0 }} maxW={600}>
          <Heading size="2xl" color="white" mb={4}>
            Open your account today and experience the next-gen transaction freedom.
          </Heading>
          <Text color="white" fontSize="lg" mb={8}>
            Start sending & receiving money and take control of your finances with our
            innovative solutions.
          </Text>
          <Link href="#" isExternal>
            <Button
              bg={"#30180D"}
              color={"#F4AE1A"}
              size="lg"
              rightIcon={<FaArrowRight />}
              transition="all 0.3s ease"
              _hover={{ transform: 'translateX(5px)' }}
            >
              Download Now
            </Button>
          </Link>
        </Box>
        {/* <Box flex="1" display={{ base: 'none', md: 'block' }}>
          <img
            src="/hero-image.png"
            alt="Hero Image"
            width="100%"
            height="auto"
          />
        </Box> */}
      </Flex>
    </Box>
  );
};

export default AboutFooterHero;