import { Table, Thead, Tbody, Tr, Th, Td, TableContainer } from '@chakra-ui/react';

const PricingTable = () => {
  return (
    <TableContainer>
      <Table
        variant="striped"
        size="md"
        sx={{
          '& thead th': { backgroundColor: '#0ca4eb', color: 'white' },
          '& tbody tr:nth-of-type(odd)': { backgroundColor: '#0087D0' }, 
          '& tbody tr:nth-of-type(even)': { backgroundColor: 'white' },
        }}
      >
        <Thead>
          <Tr>
            <Th>Min (KES)</Th>
            <Th>Max (KES)</Th>
            <Th>EpesiPay to EpesiPay</Th>
            <Th>Transfer to Other Mobile Money</Th>
            <Th>Transfer to DTB Bank</Th>
            <Th>Transfer via Pesalink</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>0</Td>
            <Td>10</Td>
            <Td>0</Td>
            <Td>Not allowed</Td>
            <Td>20</Td>
            <Td>0</Td>
          </Tr>
          <Tr>
            <Td>11</Td>
            <Td>100</Td>
            <Td>0</Td>
            <Td>0</Td>
            <Td>20</Td>
            <Td>0</Td>
          </Tr>
          <Tr>
            <Td>101</Td>
            <Td>500</Td>
            <Td>0</Td>
            <Td>11</Td>
            <Td>20</Td>
            <Td>10</Td>
          </Tr>
          <Tr>
            <Td>501</Td>
            <Td>1000</Td>
            <Td>0</Td>
            <Td>15</Td>
            <Td>20</Td>
            <Td>58</Td>
          </Tr>
          <Tr>
            <Td>1001</Td>
            <Td>1500</Td>
            <Td>0</Td>
            <Td>17</Td>
            <Td>20</Td>
            <Td>58</Td>
          </Tr>
          <Tr>
            <Td>1501</Td>
            <Td>2500</Td>
            <Td>0</Td>
            <Td>25</Td>
            <Td>20</Td>
            <Td>58</Td>
          </Tr>
          <Tr>
            <Td>2501</Td>
            <Td>3500</Td>
            <Td>0</Td>
            <Td>30</Td>
            <Td>20</Td>
            <Td>58</Td>
          </Tr>
          <Tr>
            <Td>3501</Td>
            <Td>5000</Td>
            <Td>0</Td>
            <Td>35</Td>
            <Td>20</Td>
            <Td>58</Td>
          </Tr>
          <Tr>
            <Td>5001</Td>
            <Td>7500</Td>
            <Td>0</Td>
            <Td>40</Td>
            <Td>20</Td>
            <Td>70</Td>
          </Tr>
          <Tr>
            <Td>7501</Td>
            <Td>20000</Td>
            <Td>0</Td>
            <Td>45</Td>
            <Td>20</Td>
            <Td>85</Td>
          </Tr>
          <Tr>
            <Td>20001</Td>
            <Td>50000</Td>
            <Td>0</Td>
            <Td>50</Td>
            <Td>20</Td>
            <Td>85</Td>
          </Tr>
          <Tr>
            <Td>50001</Td>
            <Td>100000</Td>
            <Td>0</Td>
            <Td>60</Td>
            <Td>20</Td>
            <Td>90</Td>
          </Tr>
          <Tr>
            <Td>100001</Td>
            <Td>150000</Td>
            <Td>0</Td>
            <Td>70</Td>
            <Td>20</Td>
            <Td>100</Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default PricingTable;
