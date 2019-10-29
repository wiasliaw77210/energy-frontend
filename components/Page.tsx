import React, { useState } from 'react';
import Head from 'next/head';
import Nav from './nav';

type TProps = {
  title: string;
  children?: React.ReactNode;
};

const Page: React.FC<TProps> = ({ title, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/static/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="content">
        <Nav />
        <div className="main">
          <h1 className="title">{title}</h1>
          {children}
        </div>
      </div>
      <style jsx global>{`
        html,
        body {
          margin: 0;
          font-family: 'Roboto', sans-serif;
        }
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        .title {
          font-size: 40px;
          line-height: 1.18;
          color: #707070;
          font-weight: normal;
        }

        .content {
          display: flex;
        }

        .main {
          padding: 94px 64px;
        }
      `}</style>
    </div>
  );
};

export default Page;
