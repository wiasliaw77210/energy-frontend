import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import CurrentTimeBlock from './CurrentTimeBlock';
import BiddingInfo from './BiddingInfo';
import GraphContainer from './GraphContainer';

const Container = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 26px;
  grid-row-gap: 26px;
  @media (max-width: 1400px) {
    grid-template-columns: 1fr;
  }
`;

const HomeContainer: FunctionComponent = () => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr' }}>
      <Container>
        <CurrentTimeBlock />
        <BiddingInfo />
      </Container>
      <GraphContainer />
    </div>
  );
};

export default HomeContainer;
