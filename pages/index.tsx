import React from 'react';
import Layout from '../layout/layout';
import HomeContainer from '../components/home';
import { Translation } from 'react-i18next';

const Home = () => (
  <Translation>
    {t => (
      <Layout title={t('home.title')}>
        <HomeContainer />
      </Layout>
    )}
  </Translation>
);

export default Home;
