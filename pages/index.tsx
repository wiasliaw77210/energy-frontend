import React from 'react';
import styled from 'styled-components';
import Page from '../components/Page';
import CurrentTimeBlock from '../components/home/CurrentTimeBlock';
import BiddingInfo from '../components/home/BiddingInfo';
import GraphContainer from '../components/home/GraphContainer';

const UpperContainer = styled.div`
  width: 100%;
  height: 336px;
  display: flex;
  flex-direction: row;
  margin-top: -70px;
`;

const Home = () => (
  <Page title="首頁">
    <UpperContainer>
      <CurrentTimeBlock></CurrentTimeBlock>
      <BiddingInfo></BiddingInfo>
    </UpperContainer>
    <GraphContainer />
  </Page>
);

export default Home;
