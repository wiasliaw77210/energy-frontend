import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';

const Bidding = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel='icon' href='/static/favicon.ico' />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Head>
    <Nav />
    <style jsx global>{`
      html, body {
        margin: 0;
      }
      *, *::before, *::after  {
        box-sizing: border-box;
      }
    `}</style>
  </div>
);

export default Bidding;
