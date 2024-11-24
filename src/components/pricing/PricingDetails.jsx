import { Box, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import PricingTable from '../PricingTable'


const PricingDetails = () => {
  return (
    <Box p={10}>
        <VStack>
            <Text fontSize={"4xl"} fontWeight={700} color={"#0087D0"}>Find the Perfect Fit for You & Your Business</Text>
            <PricingTable />
        </VStack>
    </Box>
  )
}

export default PricingDetails
