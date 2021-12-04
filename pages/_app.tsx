import { AppProps } from 'next/dist/shared/lib/router/router'
import '../styles/globals.css'
import { ChakraProvider, Text, Link, Center, extendTheme, Stack } from "@chakra-ui/react"
import Layout from '../components/Layout'
import Head from 'next/head'
import "focus-visible/dist/focus-visible"

const IndicatorTheme = extendTheme({
  colors: {
    dark: '#1A202C'
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  textStyles: {
    body: {
      fontSize: '14px'
    },
    bodySecondary: {
      fontSize: '12px'
    },
    pagination: {
      fontSize: ['9px', '12px']
    }
  }
})


function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={IndicatorTheme}>
    <Layout>
      <Head>
        <title>IAPI</title>
        <meta name="description" content="Crypto indicators" />
        <link href='https://fonts.googleapis.com/css?family=Poppins:400,500,600,700' rel='stylesheet' />
        <link rel="icon" href="/logo.jpeg" />
      </Head>
      <Component {...pageProps} />

      <footer >
        <Center w='100%' h='100px'>
          <Stack spacing={1}>
            <Text textStyle='body'>© 2021 indicatorapi.com, All rights reserved.</Text>
            <Center><Link href='https://breban.ro' target='_blank'><Text textStyle='body'>@Author</Text></Link></Center>
          </Stack>
        </Center>
      </footer>
    </Layout>
  </ChakraProvider>
}

export default MyApp
