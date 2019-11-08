import React from 'react';
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
      <div className="container">
        <Nav />
        <div className="main">
          <h1 className="title">{title}</h1>
          <div className="content">{children}</div>
        </div>
      </div>
      <style jsx global>{`
        html,
        body {
          margin: 0;
          font-family: 'Roboto', sans-serif;
          width: 100%;
          overflow: hidden;
        }
        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }

        .container {
          display: flex;
        }

        .title {
          font-size: 40px;
          line-height: 1.18;
          color: #707070;
          font-weight: normal;
          margin: 20px 0 20px 0;
        }

        .main {
          display: flex;
          padding: 94px 64px;
          flex: 1;
          flex-direction: column;
          background-color: #f1f2f1;
        }
      `}</style>
    </div>
  );
};

export default Page;
