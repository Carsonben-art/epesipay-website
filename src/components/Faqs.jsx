import React from 'react'
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Box } from '@chakra-ui/react';


const Faqs = () => {
    const faqs = [
        {
          question: 'What payment methods does EpesiPay accept?',
          answer: 'EpesiPay accepts payments via bank transfers, and mobile money.',
        },
        {
          question: 'Is EpesiPay reachable on social media?',
          answer: 'Yes. We are present on all social media platforms: Facebook, LinkedIn, X, TikTok, and Instagram. Search EpesiPay.',
        },
        {
          question: 'Can I use EpesiPay internationally?',
          answer: 'Yes, EpesiPay can be used internationally. Check our website for a list of supported countries.',
        },
        {
          question: 'Can I track my transactions?',
          answer: 'Yes, you can view, track, and export on PDF all transactions on your EpesiPay account.',
        },
        {
          question: 'How do I contact customer support?',
          answer: 'You can reach EpesiPay customer support via WhatsApp +254714853448, email support@epesipay.com, and phone 0714853448 or 0107174680.',
        },
      ];
  return (
    <Box padding={2}>
    <Accordion allowToggle>
      {faqs.map((faq, index) => (
        <AccordionItem key={index}>
          <h2>
            <AccordionButton>
              <Box as="span" flex="1" textAlign="left" fontWeight={700}>
                {faq.question}
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            {faq.answer}
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>

    </Box>
  )
}

export default Faqs
