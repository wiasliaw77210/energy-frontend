import React, { FunctionComponent } from 'react';

import styled from 'styled-components';
import { BidSubmitData } from '../../typing/BidSubmitType';
import BiddingTitle from './BidTitle';
import BiddingField from './BidField';
import BiddingList from './BidList';

const BidBox = styled.div`
  width: 100%;
  height: 50vw;
  background: #ffffff;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  color: #707070;
`;

const BidTable = styled.table`
  width: 100%;
`;

enum BidType {
  SELL = '賣',
  BUY = '買',
}

interface IProps {
  data: BidSubmitData[];
  onPressPen: () => void;
}

const BiddingTable: React.FC<IProps> = ({ data, onPressPen }) => {
  return (
    <BidBox>
      <BiddingTitle bid_type={BidType.BUY} />
      <BidTable>
        <BiddingField />
        <BiddingList />
      </BidTable>
    </BidBox>
  );
};

export default BiddingTable;
