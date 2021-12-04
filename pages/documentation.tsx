
import {
  Box, Text, Container, Stack, Flex, Button, MenuButton, Menu, MenuItem, MenuList
} from '@chakra-ui/react';
import { FC, useEffect, useState } from "react"
import { config } from '../components/IndicatorConfig';
import IndicatorDocumentation from '../components/IndicatorDocumentation';
import { Link } from 'react-scroll';
import { useTopScrollPercent } from '../hooks';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/dist/client/router';

const DocumentationMenu: FC<{ apiHook: any }> = (props) => {
  const [isHover, setIsHover] = useState(false);
  const [api, setApi] = props.apiHook;
  const offset = useTopScrollPercent()

  const isGqlSelected = (api === 'graphql')

  return <Flex direction='column' alignItems='flex-start' justify='flex-start' position='fixed' left='25px' top='50%' transform='translate(0,-50%)' onMouseLeave={() => setIsHover(false)} >
    <Box mb='4'>
      <Menu>
        <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
          {isGqlSelected ? 'GraphQL' : 'Rest'}
        </MenuButton>
        <MenuList>
          <MenuItem key='graphql' onClick={() => setApi('graphql')}>GraphQL</MenuItem>
          <MenuItem key='rest' onClick={() => setApi('rest')}>Rest</MenuItem>
        </MenuList>
      </Menu>
    </Box>
    <Box >
      {isHover ? <Box h='80vh' bg='#F56565' overflow='scroll' p='1rem' borderRadius='8px'><Stack spacing={2} overflow='scroll' color='dark'>
        {config.indicators.map((config) => <Link key={config.name} smooth={true} spy={true} to={config.name.split(' ').join('')}>
          <Text cursor='pointer' fontSize='18px'>{config.name}</Text>
        </Link>)}
      </Stack></Box> : <Flex direction='column' h={'80vh'}>
        <Box boxSizing='border-box' bg='red.400' border='1px solid dark' borderRadius='12px' w={{ base: '.5rem', md: '1rem' }} h={`${offset / 100 * 80}vh`} />
        <Box boxSizing='border-box' bg='red.400' border='1px solid dark' borderRadius='12px' w={{ base: '.5rem', md: '1rem' }} flex='1' mt='2rem' />
      </Flex>}
    </Box>
    <Box onMouseEnter={() => setIsHover(true)} bg='red.400' border='1px solid dark' borderRadius='12px'><Text textStyle='body' color='#fff' p='1'>Legend</Text></Box>
  </Flex >
}

type API = 'graphql' | 'rest'

const Documentation: FC = () => {
  const router = useRouter()
  const { api: routeApi } = router.query as { api: API }

  const [api, setApi] = useState<API>('graphql');

  useEffect(() => { ['graphql', 'rest'].indexOf(routeApi?.toLowerCase?.()) > -1 && setApi(routeApi?.toLowerCase?.() as API) }, [routeApi])

  return <Container maxW={'5xl'} >
    <DocumentationMenu apiHook={[api, setApi]} />
    <Stack alignItems='center' >
      {config.indicators.map((config) => <Box key={config.name} p='10rem 0'>
        <IndicatorDocumentation config={config} api={api} />
      </Box>
      )}
    </Stack>
  </Container>
}


export default Documentation

