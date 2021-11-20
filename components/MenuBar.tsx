import { FC, ReactNode } from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  Text,
  useColorModeValue,
  Stack,
  useColorMode,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavLink: FC<{ to?: string }> = ({ children, to }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={to ?? '#'}>
    {children}
  </Link>
);

const MenuBar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box borderRadius='12px 0 0 12px' bg={useColorModeValue('red.400', '#1A202C')} px={4} position='fixed' right='0'>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Stack direction='row' spacing={5}>
            <NavLink to='/'><Text color='#fff'>Logo</Text></NavLink>
            <NavLink to='/documentation'><Text color='#fff'>Documentation</Text></NavLink>
          </Stack>
          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button variant='simple' onClick={toggleColorMode}>
                {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

export default MenuBar