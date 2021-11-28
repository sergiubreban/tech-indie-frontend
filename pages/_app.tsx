import { AppProps } from 'next/dist/shared/lib/router/router'
import '../styles/globals.css'
import { ChakraProvider, Center, extendTheme } from "@chakra-ui/react"
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
    }
  }
})

function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={IndicatorTheme}>
    <Layout>
      <Head>
        <title>indicators</title>
        <meta name="description" content="Crypto indicators" />
        <link href='https://fonts.googleapis.com/css?family=Poppins:400,500,600,700' rel='stylesheet' />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />

      <footer >
        <Center w='100%' h='100px'>
          © 2021 indicatorapi.com, All rights reserved.
        </Center>
      </footer>
    </Layout>
  </ChakraProvider>
}

export default MyApp
