import React from 'react';
import Layout from '../layout/layout';
import StatusIndex from '../components/status';
import { Translation } from 'react-i18next';

const Status = () => (
  <Translation>
    {t => (
      <Layout title={t('status.title')}>
        <StatusIndex />
      </Layout>
    )}
  </Translation>
);

export default Status;
