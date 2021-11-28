
import {
  Box,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import ProductDetails from '../components/ProductDetails';
import Landing from '../components/Landing';

export default function Home() {
  return (
    <main >
      <Stack spacing={10}>
        <Box p='15rem 0'>
          <Landing />
        </Box>
        <Banner />
        <Box p='10rem 0'>
          <ProductDetails />
        </Box>
      </Stack>
    </main>
  )
}
//useColorModeValue('#1A202C', 'red.400')
const Banner = () => {
  return <Box w='100%' h='20vh' bg={`repeating-linear-gradient(
    0deg,
    ${useColorModeValue('#F56565', '#def')},
    ${useColorModeValue('#F56565', '#def')} 10px,
     ${useColorModeValue('#F56565', '#1A202C')} 10px,
     ${useColorModeValue('#F56565', '#1A202C')} 30px
  )`} />
}
