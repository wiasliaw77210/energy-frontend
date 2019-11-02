import React, { FunctionComponent } from 'react';

import styled from 'styled-components';

const BidTitle = styled.div`
  width: 100%;
  font-family: Roboto;
  font-size: 32px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 4;
  text-align: center;
  color: var(--brownish-grey);
`;

interface IProps {
  bid_type: string;
}

const BiddingTitle: React.FC<IProps> = ({ bid_type }) => {
  return <BidTitle>{bid_type}</BidTitle>;
};

export default BiddingTitle;
