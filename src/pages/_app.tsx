import React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import Page from '../app/page';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Bozo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          {`
            @import url("https://fonts.googleapis.com/css?family=Lexend:600|Lexend+Zetta:400|Rubik+Mono+One:400|IBM+Plex+Sans+Condensed:600|Lexend+Deca:400");
          `}
        </style>
        <style>
          {`
            @import url("https://cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css");
            * {
              -webkit-font-smoothing: antialiased;
              box-sizing: border-box;
            }
            html,
            body {
              margin: 0px;
              height: 100%;
            }
            a {
              text-decoration: none;
            }
          `}
        </style>
      </Head>
      <body>
        <div id="app">
          <Page />
        </div>
      </body>
    </>
  );
};

export default App;