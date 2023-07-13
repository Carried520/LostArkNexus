import React from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import "../styles/global.css";

import { ChakraProvider } from '@chakra-ui/react'
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar/Navbar";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
       <Head>
        <title>Lost Ark Nexus</title>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="description" content="Community Guide Hub" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width , user-scalable=no"
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


