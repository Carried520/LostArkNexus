import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";
import '../styles/globals.css'

import { ChakraProvider } from '@chakra-ui/react'
import Footer from "@/components/Footer"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Lost Ark Nexus</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          name="viewport"
          content="minimum-scale=1, maximum-scale=1, initial-scale=1, width=device-width, user-scalable=no" 
        />
      </Head>
      <ChakraProvider cssVarsRoot={undefined}>
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </React.Fragment>
  );
}
