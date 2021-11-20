import { AppProps } from 'next/dist/shared/lib/router/router'
import '../styles/globals.css'
import { ChakraProvider, Center } from "@chakra-ui/react"
import Layout from '../components/Layout'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider>
    <Layout>
      <Head>
        <title>indicators</title>
        <meta name="description" content="Crypto indicators" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />

      <footer >
        <Center w='100%' h='100px'>
          © 2021 skypy.com, All rights reserved.
        </Center>
      </footer>
    </Layout>
  </ChakraProvider>
}

export default MyApp
