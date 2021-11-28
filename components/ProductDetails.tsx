import { Link, Box, Button, Container, Flex, Heading, Stack, Text, Center, Input, Table, Thead, Tbody, Th, Td, Tr } from "@chakra-ui/react"
import { FC, useEffect, useState } from "react"
import CurrenciesTable from "./CurrenciesTable"
import { availableIndicators } from "./utils"

const CallToAction: FC<{ label: string, href: string }> = (props) => {
  const [isHover, setIsHover] = useState(false)

  const { label, href } = props

  return <Link href={href} target='_blank'>
    <Center
      boxShadow={`0 0 25px ${isHover ? '8px' : '2px'} #7A7D72`}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      p='5rem 2rem'
    w='250px'
    h='200px'
    >
      <Text as='h2' fontSize='24px' fontWeight='600'>{label}</Text>
    </Center>
  </Link>
}

const substr = (resource: string, target: string) => resource.toLowerCase().indexOf(target.toLowerCase()) > -1

const IndicatorsTable: FC<{ query?: string }> = ({ query }) => {
  const [filteredIndicators, setFilteredIndicators] = useState(() => availableIndicators);

  useEffect(() => {
    setFilteredIndicators(() => !query ? availableIndicators : availableIndicators.filter((item) => substr(item.resource, query) || substr(item.name, query)))
  }, [query, availableIndicators])

  return <Stack spacing={2}>
    <Text textStyle='body' fontWeight='500' pl='5'>{`Total: ${availableIndicators.length}`}</Text>
    <Table variant="simple" pb='20px'>
      <Thead>
        <Tr>
          <Th>name</Th>
          <Th>resource id</Th>
        </Tr>
      </Thead>
      <Tbody>
        {filteredIndicators.map((indicator) => {
          return <Tr key={indicator.resource}>
            <Td><Text fontWeight='500'>{indicator.name}</Text></Td>
            <Td><Text fontWeight='500'>{indicator.resource}</Text></Td>
          </Tr>
        })}
      </Tbody>
    </Table>
  </Stack>
}
const ProductDetails: FC = (props) => {
  const [currencyQuery, setCurrencyQuery] = useState('');
  const [indicatorQuery, setIndicatorQuery] = useState('');

  return <Box>
    <Container maxW={'7xl'}>
      <Center pb='25rem' id='get-started'>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={'5rem'}>
          <CallToAction label='GraphQL API' href='https://rapidapi.com/breban.sergiu@gmail.com/api/crypto-indicators'></CallToAction>
          <CallToAction label='REST API' href='https://rapidapi.com/breban.sergiu@gmail.com/api/crypto-indicators-rest'></CallToAction>
        </Stack>
      </Center>
      <Stack spacing={'15rem'} id='product-details'>
        <Stack direction={{ base: 'column', md: 'row' }} >
          <Stack flex='1' spacing={5} alignItems='center' >
            <Heading
              lineHeight={.9}
              fontWeight={500}
              textAlign='center'
              fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
              Currencies
            </Heading>
            <Box as='button' w='45%' h='10px' bg='teal' borderRadius='25px' />
            <Box>
              <Input placeholder='Search...' type='text' value={currencyQuery} onChange={(e) => setCurrencyQuery(e.target.value)} />
            </Box>
          </Stack>
          <Box flex='1'>
            <CurrenciesTable query={currencyQuery} />
          </Box>
        </Stack>
        <Stack direction={{ base: 'column', md: 'row' }} >
          <Stack flex='1' alignItems='center' >
            <Heading
              lineHeight={.9}
              fontWeight={500}
              fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
              Indicators
            </Heading>
            <Box as='button' w='45%' h='10px' bg='teal' borderRadius='25px' />
            <Box>
              <Input placeholder='Search...' type='text' value={indicatorQuery} onChange={(e) => setIndicatorQuery(e.target.value)} />
            </Box>
          </Stack>
          <Box flex='1'>
            <Flex flexWrap='wrap' maxH='350px' overflowY='scroll' >
              <IndicatorsTable query={indicatorQuery} />
            </Flex>
          </Box>
        </Stack>
        <Flex justify='center'>
          <Link href='/documentation'>
            <Button
              mx='4'
              rounded={'full'}
              size={'lg'}
              fontWeight={'normal'}
              px={6}
              bg={'teal'}>
              <Text color='#fff' fontWeight='500'>Documentation</Text>
            </Button>
          </Link>
        </Flex>
      </Stack>
    </Container>
  </Box>
}


export default ProductDetails