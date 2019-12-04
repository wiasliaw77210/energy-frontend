import React from 'react';
import styled from 'styled-components';

import Layout from '../layout/layout';
import BiddingTable from '../components/bidding/BidSubmit';

const BidTable = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Bidding = () => (
  <Layout title="投標">
    <BidTable>
      <BiddingTable bidding_type={'buy'} />
      <BiddingTable bidding_type={'sell'} />
    </BidTable>
  </Layout>
);

export default Bidding;
