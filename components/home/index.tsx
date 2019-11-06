import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import CurrentTimeBlock from './CurrentTimeBlock';
import BiddingInfo from './BiddingInfo';
import GraphContainer from './GraphContainer';

const UpperContainer = styled.div`
  width: 100%;
  height: 336px;
  display: flex;
  flex-direction: row;
  margin-top: -70px;
`;

const HomeContainer: FunctionComponent = () => {
  return (
    <div>
      <UpperContainer>
        <CurrentTimeBlock />
        <BiddingInfo />
      </UpperContainer>
      <GraphContainer />
    </div>
  );
};

export default HomeContainer;
