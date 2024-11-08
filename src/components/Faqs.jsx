import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from '@chakra-ui/react';

const Faqs = () => {
  const faqs = [
    {
      question: 'What payment methods does EpesiPay accept?',
      answer: 'EpesiPay accepts payments via bank transfers and mobile money.',
    },
    {
      question: 'Is EpesiPay reachable on social media?',
      answer:
        'Yes. We are present on all social media platforms: Facebook, LinkedIn, X, TikTok, and Instagram. Search EpesiPay.',
    },
    {
      question: 'Can I use EpesiPay internationally?',
      answer:
        'Yes, EpesiPay can be used internationally. Check our website for a list of supported countries.',
    },
    {
      question: 'Can I track my transactions?',
      answer:
        'Yes, you can view, track, and export on PDF all transactions on your EpesiPay account.',
    },
    {
      question: 'How do I contact customer support?',
      answer:
        'You can reach EpesiPay customer support via WhatsApp +254714853448, email support@epesipay.com, and phone 0714853448 or 0107174680.',
    },
  ];

  return (
    <Box padding={10} maxWidth="800px" margin="0 auto">
      <Text fontSize="lg" color="gray.500" textTransform="uppercase" mb={2}>
        FAQ
      </Text>
      <Text fontSize="4xl" fontWeight="bold" mb={8}>
        Frequently asked questions
      </Text>
      <Accordion allowToggle>
        {faqs.map((faq, index) => (
          <AccordionItem key={index} border="none" mb={4}>
            <h2>
              <AccordionButton
                padding="16px 0"
                borderBottom="1px solid"
                borderColor="gray.200"
                _expanded={{ fontWeight: "bold", borderColor: "black" }}
              >
                <Box as="span" flex="1" textAlign="left" fontSize="xl">
                  {faq.question}
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="md" color="gray.600">
              {faq.answer}
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Box>
  );
};

export default Faqs;
