import { FC } from 'react';
import {
  Box,
  Flex,
  Link,
  Button,
  Text,
  Image,
  useColorModeValue,
  Stack,
  useColorMode,
  LinkProps,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

const NavLink: FC<LinkProps> = ({ children, ...props }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
    }}
    {...props}>
    {children}
  </Link>
);

const MenuBar: FC = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box borderRadius='12px 0 0 12px' bg={useColorModeValue('red.400', 'dark')} px={4} position='fixed' right='0'>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Stack direction='row' spacing={5} alignItems='center'>
            <NavLink href='/'><Text color='#fff'>
              <Image
                alt={'logo'}
                fit={'cover'}
                align={'center'}
                w={'30px'}
                h={'30px'}
                borderRadius='50%'
                src={
                  '/logo.jpeg'
                }
              /></Text></NavLink>
            <NavLink href='/documentation'><Text color='#fff'>Documentation</Text></NavLink>
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