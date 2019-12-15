import React from 'react';
import Layout from '../layout/layout';
import { Translation } from 'react-i18next';

import PowerInfoTable from '../components/power_info/PowerInfo';

const PowerInfo = () => (
  <Translation>
    {t => (
      <Layout title={t('powerInfo.title')}>
        <PowerInfoTable />
      </Layout>
    )}
  </Translation>
);

export default PowerInfo;
