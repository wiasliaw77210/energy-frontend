import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Layout from '../layout/loginLayout';
import LoginForm from '../components/loginForm';
import LoginPic from '../static/login/login_pic.png';

const Block = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Layout title={t('login.title')}>
      <Block
        style={{
          backgroundImage: `url(${LoginPic})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          float: 'left',
        }}
      />
      <Block
        style={{
          float: 'right',
          backgroundColor: '#f1f2f1',
        }}
      >
        <LoginForm />
      </Block>
      <style jsx global>{`
        html,
        body {
          margin: 0;
          font-family: Roboto, sans-serif;
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
    </Layout>
  );
};

export default Login;
