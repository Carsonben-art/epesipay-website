import React from 'react';
import { Box, Heading, Text, VStack, HStack, Divider, Circle } from '@chakra-ui/react';

const steps = [
  { number: '01', title: 'Registeration', description: 'On the registeration page, please write your phone number in the format required & create a strong password. ' },
  { number: '02', title: 'Confirmation', description: 'Input the 6-digit code sent to your phone number in the field. Request another code incase you received none.' },
  { number: '03', title: 'PIN Creation', description: 'On the next stage, you need to create your PIN that will be used to unlock the app. Please remeer the code and DO NOT share to anyone.' },
  { number: '04', title: 'Details Input', description: 'Insert your details according to your official documents. Take note to the fields format.' },
  { number: '05', title: 'Documents Upload', description: 'Select your document type and fill in the details required from your document. Take a photo of your document for both sides and upload.' },
  { number: '06', title: 'Taking Selfie', description: 'Please take a selfie photo that is clear, with no shadows or reflection. Avoid glasses or hats.' },
  { number: '07', title: 'Wait for Approval', description: 'We will check your documents for approval. You can click on the check button to now the status of your approval. After approval you will be directed to the main screen of EpesiPay app.' },
];

const OnboardingSection = () => {
  return (
    <VStack spacing={8} align="center" bg="#ffffff" p={8} borderRadius="md">
      <Heading fontSize="5xl" fontWeight="bold" color="#30180D" textAlign="center">
        A Simple and Seamless <br /> Registeration Process
      </Heading>
      <HStack spacing={4} align="center" justify="center" width="100%">
        {steps.map((_, index) => (
          <React.Fragment key={index}>
            <Circle size="10px" bg="#0087D0" />
            {index < steps.length - 1 && <Divider orientation="horizontal" borderColor="#0087D0" flex="1" />}
          </React.Fragment>
        ))}
      </HStack>
      <HStack spacing={4} wrap="wrap" justify="center">
        {steps.map((step, index) => (
          <Box
            key={index}
            // bg="#efefef"
            p={4}
            m={2}
            borderRadius="md"
            maxWidth="400px"
            // boxShadow="md"
            textAlign="left"
            border={"1px solid #f7f7f7"}
          >
            <Text fontWeight="bold" color="#0087D0" mb={2}>
              {step.number}
            </Text>
            <Heading fontSize="lg" mb={2} color={"#30180D"}>
              {step.title}
            </Heading>
            <Text color="gray.600">{step.description}</Text>
          </Box>
        ))}
      </HStack>
    </VStack>
  );
};

export default OnboardingSection;