import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import CurrentTimeBlock from './CurrentTimeBlock';
import BiddingInfo from './BiddingInfo';
import GraphContainer from './GraphContainer';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const HomeContainer: FunctionComponent = () => {
  return (
    <div>
      <Container>
        <CurrentTimeBlock />
        <BiddingInfo />
      </Container>
      {/* <GraphContainer /> */}
    </div>
  );
};

export default HomeContainer;
