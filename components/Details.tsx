import { useColorModeValue } from "@chakra-ui/color-mode"
import { Box, Button, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react"
import { Tag } from "@chakra-ui/tag"
import { FC } from "react"
import { availableIndicators, markets } from "./utils"



const ProductDetails: FC = (props) => {
  return <Box>
    <Container maxW={'7xl'} id='product-details'>
      <Stack spacing={'15rem'} >
        <Flex alignItems='center' justify='center'>
          <Stack flex='1' alignItems='center' >
            <Heading
              lineHeight={.9}
              fontWeight={500}
              textAlign='center'
              fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
              Markets we support :
            </Heading>
            <Box as='button' w='70%' h='10px' bg='teal' borderRadius='25px' />
          </Stack>
          <Box flex='1'>
            <Flex flexWrap='wrap' maxH='400px' overflowY='scroll'>
              {markets.map((market) => (
                <Tag margin='1' size={'sm'} key={market} variant="solid" colorScheme="teal">
                  <Text fontSize='11px' fontWeight='600' color='#fff'>{market}</Text>
                </Tag>
              ))}
              <Tag margin='1' size={'sm'} variant="solid" colorScheme="teal">
                <Text fontSize='11px' fontWeight='600' color='#fff'>and many others</Text>
              </Tag>
            </Flex>

          </Box>
        </Flex>
        <Flex alignItems='center' justify='center'>
          <Stack flex='1' alignItems='center' >
            <Heading
              lineHeight={.9}
              fontWeight={500}
              fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}>
              Indicators :
            </Heading>
            <Box as='button' w='45%' h='10px' bg='teal' borderRadius='25px' />
          </Stack>
          <Box flex='1'>
            <Flex flexWrap='wrap' maxH='350px' overflowY='scroll'>
              {availableIndicators.map((indicator) => (
                <Tag margin='1' size={'sm'} key={indicator} variant="solid" colorScheme="teal">
                  {indicator}
                </Tag>
              ))}
            </Flex>

          </Box>
        </Flex>
        <Flex justify='center'>
          <Button
            rounded={'full'}
            mx='4'
            size={'lg'}
            fontWeight={'normal'}
            px={6}
            colorScheme={'red'}
            bg={'red.400'}
            _hover={{ bg: 'red.500' }}>
            <Text color='#fff' fontWeight='500'> Get started</Text>
          </Button>
          <Button
            mx='4'
            rounded={'full'}
            size={'lg'}
            fontWeight={'normal'}
            px={6}
            bg={'teal'}>
            <Text color='#fff' fontWeight='500'>Documentation</Text>
          </Button>
        </Flex>
      </Stack>
    </Container>
  </Box>
}

export default ProductDetails