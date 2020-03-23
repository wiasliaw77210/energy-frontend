import React from 'react';
import Head from 'next/head';
import Navbar from '../components/navbar';
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
        <link
          href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className="container">
        <Navbar />
        <div style={{ width: '13.6%', minWidth: '200px' }} />
        <div className="main">
          <h1 className="title">{title}</h1>
          <div className="content">{children}</div>
        </div>
      </div>
      <style jsx global>{`
        html,
        body {
          margin: 0;
          width: 100%;
          font-size: 18px;
          overflow-x: hidden;
          overflow-y: auto;
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
          padding: 5rem 3.5rem 5rem 3.5rem;
          flex: 1;
          flex-direction: column;
          background-color: #f1f2f1;
        }

        @media (max-width: 1280px) {
          html,
          body {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default Page;
