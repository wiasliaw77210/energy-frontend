import React from 'react';
import Head from 'next/head';
import '../i18n';

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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main>{children}</main>
      <style jsx global>{`
        html,
        body {
          margin: 0;
          font-family: 'Roboto', sans-serif;
          width: 100%;
        }
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
        main {
          width: 100vw;
          height: 100vh;
        }
      `}</style>
    </div>
  );
};

export default Page;
