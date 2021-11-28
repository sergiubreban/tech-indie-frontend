
import {
  StackProps, Box, Stack, Text, Flex, Tag, Heading, Center, Table, Thead, Tbody, Tr, Td, Th
} from '@chakra-ui/react';
import { FC, useState } from 'react';

type Param = {
  name: string;
  description?: string;
  type: string;
  default?: string;
}
interface IndicatorConfig {
  name: string
  dto: Param[],
  models: Param[],
  example: { input: any, output: any };
}

const IndicatorDocumentation: FC<{ config: IndicatorConfig; api: 'rest' | 'graphql' }> = (props) => {
  const { config, api } = props;

  return <Stack spacing={6} id={config.name.split(' ').join('')}>
    <Center p='2rem'><Heading>{config.name}</Heading></Center>
    <Stack spacing={6} direction='row'>
      <FloatingPanel flex='1' spacing={4} >
        <Text alignSelf='center' fontSize='1.4rem' p='1rem 0'>Input parameters (DTO)</Text>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Type</Th>
              <Th>Default</Th>
            </Tr>
          </Thead>
          <Tbody>
            {config.dto.map((item) => <Tr key={item.name}>
              <Td><Text textStyle='body'>{item.name}</Text></Td>
              <Td><Text textStyle='body'>{item.type}</Text></Td>
              <Td><Text textStyle='body'>{item.default}</Text></Td>
            </Tr>
            )}
          </Tbody>
        </Table>
      </FloatingPanel>
      <FloatingPanel flex='1' spacing={1} >
        <Text alignSelf='center' fontSize='1.4rem' p='1rem 0'>Response (Model)</Text>
        <Box px='1rem'>
          {config.models.length > 1 && <Text fontWeight='500' textStyle='body'>{`results :  `}</Text>}
          {config.models.map((item) => <Stack key={item.name} {...(config.models.length > 1 && { pl: '1rem' })}>
            <Text fontWeight='500' textStyle='body'>{`${item.name} :  ${item.type}`}</Text>
            {item.description && <Text textStyle='bodySecondary'>{item.description}</Text>}
          </Stack>
          )}
        </Box>
      </FloatingPanel>
    </Stack>
    <FloatingPanel>
      <Flex>
        <Box flex='1' borderRight='2px' borderColor='#7A7D72'>
          <Tag size={'sm'} variant="solid" colorScheme="teal">
            <Text fontSize='8px' fontWeight='600' color='#fff'>request</Text>
          </Tag>
          {config.example.input[(api === 'graphql') ? 'gql' : 'rest']}
        </Box>
        <Box flex='1' pl='3'>
          <Tag size={'sm'} variant="solid" colorScheme="red">
            <Text fontSize='8px' fontWeight='600' color='#fff'>response</Text>
          </Tag>
          {config.example.output}
        </Box>
      </Flex>
    </FloatingPanel>
  </Stack >
}

const FloatingPanel: FC<StackProps> = (props) => {
  const [isHover, setIsHover] = useState(false);

  return <Stack
    p='3'
    border='2px solid #7A7D72'
    boxShadow={`0 0 25px ${isHover ? '10px' : '1px'} #7A7D72`}
    _hover={{ transform: 'scale(1.05)' }}
    transition='all .15s ease-out'
    onMouseEnter={() => setIsHover(true)}
    onMouseLeave={() => setIsHover(false)}
    {...props}>
    {props.children}
  </Stack>
}

export default IndicatorDocumentation