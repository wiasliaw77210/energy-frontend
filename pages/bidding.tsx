import React from 'react';
import styled from 'styled-components';

import Page from '../components/Page';
import BiddingTable from '../components/bidding/BidSubmit';

const BidTable = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Bidding = () => (
  <Page title="Bidding">
    <BidTable>
      <BiddingTable bidding_type={'buy'} />
      <BiddingTable bidding_type={'sell'} />
    </BidTable>
  </Page>
);

export default Bidding;
