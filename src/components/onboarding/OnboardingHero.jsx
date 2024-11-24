import React from 'react';
import { Box, Heading, Text, VStack, Image, List, ListItem } from '@chakra-ui/react';
import onboard from '../../assets/onboardhero.webp'
const OnboardingHero = () => {
  return (
    <Box
      bg="#fffffff"
      p={8}
      paddingTop="7rem"
      borderRadius="md"
      display="flex"
      flexDirection={['column', 'column', 'row']}
      alignItems="center"
      justifyContent="space-between"
    >
      <VStack align="start" spacing={6} maxW="lg">
        <Heading fontSize={['2xl', '3xl']} fontWeight="bold" color="green.900">
          Onboarding steps Simplified
        </Heading>
        <Text fontSize={['sm', 'md']} color="gray.700">
         This steps will guide you through getting started with EpesiPay. It is a simple and easy process.
        </Text>
        <Text color="#30180D" fontSize="2rem" fontWeight={700}>
          What to Prepare
        </Text>
        <List spacing={3} pt={4}>
          <ListItem fontSize="sm" color="gray.800">
            01. Download EpesiPay App
          </ListItem>
          <ListItem fontSize="sm" color="gray.800">
            02. Original Passport or National ID
          </ListItem>
          <ListItem fontSize="sm" color="gray.800">
            03. A well lit space
          </ListItem>
          <ListItem fontSize="sm" color="gray.800">
            04. About 5 minutes
          </ListItem>
          
        </List>
      </VStack>

      <Image
        src={onboard}
        alt="Payment processing"
        borderRadius="md"
        boxSize={['100%', '100%', '400px']}
        objectFit="cover"
        mt={[4, 4, 0]}
      />
    </Box>
  );
};

export default OnboardingHero;