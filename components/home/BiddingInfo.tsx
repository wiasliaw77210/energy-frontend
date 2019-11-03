import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

const Block = styled.div`
  width: 760px;
  height: 336px;
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  margin: 5px;
  padding: 20px;
`;

const Title = styled.text`
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

const BiddingInfoContainer = styled.div`
  width: 100%;
  height: 250px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  table {
    text-align: center;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    color: #707070;

    td {
      height: 50px;
    }
  }
`;

const BiddingInfo: FunctionComponent = () => {
  const testing_data = [
    {
      date: '2019/09/01',
      time: '13:00 - 14:00',
      success: true,
      value: 10,
      price: 5,
    },
    {
      date: '2019/08/25',
      time: '11:00 - 12:00',
      success: false,
      value: 10,
      price: 10,
    },
    {
      date: '2019/08/24',
      time: '18:00 - 19:00',
      success: true,
      value: 10,
      price: 5,
    },
    {
      date: '2019/08/23',
      time: '15:00 - 16:00',
      success: true,
      value: 5,
      price: 5,
    },
    {
      date: '2019/08/20',
      time: '18:00 - 19:00',
      success: true,
      value: 10,
      price: 5,
    },
    {
      date: '2019/08/08',
      time: '05:00 - 06:00',
      success: false,
      value: 10,
      price: 5,
    },
    {
      date: '2019/07/27',
      time: '23:00 - 00:00',
      success: false,
      value: 10,
      price: 5,
    },
    {
      date: '2019/07/15',
      time: '10:00 - 11:00',
      success: true,
      value: 10,
      price: 5,
    },
    {
      date: '2019/06/30',
      time: '01:00 - 02:00',
      success: true,
      value: 10,
      price: 5,
    },
    {
      date: '2019/06/26',
      time: '00:00 - 01:00',
      success: false,
      value: 10,
      price: 5,
    },
  ];
  return (
    <Block>
      <Title>得標資訊</Title>
      <BiddingInfoContainer>
        <table>
          {testing_data.map(data => (
            <tr>
              <td>{data.date}</td>
              <td>{data.time}</td>
              <td>{data.success ? '得標成功' : '未得標'}</td>
              <td>{'得標度數 : ' + data.value + 'kWh'}</td>
              <td>{'單價 : $' + data.price + '/kWh'}</td>
            </tr>
          ))}
        </table>
      </BiddingInfoContainer>
    </Block>
  );
};

export default BiddingInfo;
