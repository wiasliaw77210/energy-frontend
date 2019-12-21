import React from 'react';
import Head from 'next/head';

import LoginForm from '../components/login';

const Login: React.FC = () => (
  <div>
    <Head>
      <title>Login</title>
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
    <main>
      <LoginForm />
    </main>
    <style jsx global>{`
      html,
      body {
        margin: 0;
        font-family: 'Roboto', sans-serif;
        width: 100%;
        overflow-x: hidden;
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

export default Login;
