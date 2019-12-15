import React from 'react';
import styled from 'styled-components';
import { Translation } from 'react-i18next';

import Layout from '../layout/layout';
import BiddingTable from '../components/bidding/BidSubmit';

const BidTable = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Bidding = () => (
  <Translation>
    {t => (
      <Layout title={t('bidding.title')}>
        <BidTable>
          <BiddingTable bidding_type={'buy'} />
          <BiddingTable bidding_type={'sell'} />
        </BidTable>
      </Layout>
    )}
  </Translation>
);

export default Bidding;
