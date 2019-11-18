import React, { FunctionComponent, useState, useEffect } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import MarketInfoDetail from './MarketInfoDetail';

const getCurrentTime = () => dayjs().format('HH');
const getNextTime = () =>
  dayjs()
    .add(1, 'hour')
    .format('HH');

const Block = styled.div`
  width: calc(50% - 13px);
  height: 336px;
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  padding: 20px;
`;

const Title = styled.span`
  width: 100%;
  height: 30px;
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  color: #707070;
`;

const TimeContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 45px;
  margin-bottom: 45px;

  img {
    width: 4vh;
    height: 4vh;
  }
`;

const Time = styled.span`
  font-family: Roboto;
  font-size: 56px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.18;
  letter-spacing: normal;
  text-align: center;
  color: #ffa000;
  margin-left: 5px;
`;

const MarketInfo = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const CurrentTimeBlock: FunctionComponent = () => {
  const [hour, setHour] = useState(getCurrentTime());
  useEffect(() => {
    const timer = setInterval(() => {
      setHour(getCurrentTime());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <Block>
      <Title>Current Trading Hours</Title>
      <TimeContainer>
        <img src={`/static/home/green_b_icon.png`} alt="b_icon" />
        <Time>{hour + ' : 00 - ' + getNextTime() + ' : 00'}</Time>
      </TimeContainer>
      <MarketInfo>
        <MarketInfoDetail subTitle={'Buy'} value={'40'} price={'5'} />
        <MarketInfoDetail subTitle={'Sell'} value={'20'} price={'5'} />
      </MarketInfo>
    </Block>
  );
};

export default CurrentTimeBlock;
