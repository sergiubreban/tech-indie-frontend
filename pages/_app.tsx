import { AppProps } from 'next/dist/shared/lib/router/router'
import '../styles/globals.css'
import { ChakraProvider, Center, extendTheme } from "@chakra-ui/react"
import Layout from '../components/Layout'
import Head from 'next/head'
import "focus-visible/dist/focus-visible"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBTV48H4R2kKolbOM4LgAIt6L6-7R0wSXE",
  authDomain: "indicator-api.firebaseapp.com",
  projectId: "indicator-api",
  storageBucket: "indicator-api.appspot.com",
  messagingSenderId: "234818492718",
  appId: "1:234818492718:web:eea75f10f8cdd3353642bf"
};

// Initialize Firebase
initializeApp(firebaseConfig);

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
          © 2021 indicatorapi.com, All rights reserved.
        </Center>
      </footer>
    </Layout>
  </ChakraProvider>
}

export default MyApp
