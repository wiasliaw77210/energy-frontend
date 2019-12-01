import React, { PropsWithChildren } from 'react';
import Head from 'next/head';

interface IProps {
  title: string;
}

export default ((props: PropsWithChildren<IProps>) => {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" href="/static/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div id="root">{props.children}</div>
      <style jsx global>{`
        html,
        body {
          margin: 0;
          font-size: 24px;
        }

        *,
        *::before,
        *::after {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}) as React.FC<PropsWithChildren<IProps>>;
