import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "./global.css";

import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Lost Ark Nexus</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </React.Fragment>
  );
}

export default MyApp;
