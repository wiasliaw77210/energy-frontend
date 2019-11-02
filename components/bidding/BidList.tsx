import React, { FunctionComponent } from 'react';

import styled from 'styled-components';

const BidList = styled.tbody`
  width: 100%;
  height: 50px;
  line-height: 50px;
`;

const FieldRow = styled.tr`
  text-align: center;
  box-shadow: 0 1px 0px 0 rgba(0, 0, 0, 0.16);
`;

const FieldName = styled.td`
  font-size: 20px;
  min-width: 50px;
  font-weight: 300;
`;

const Pen = styled.img`
  vertical-align: middle;
  width: 20px;
`;

const columConfig = [
  {
    uuid: '1234',
    date: '2019/09/01',
    time: '15:00-16:00',
    volume: 10,
    price: 3,
    total_price: 30,
  },
  {
    uuid: '5678',
    date: '2019/09/01',
    time: '15:00-16:00',
    volume: 10,
    price: 3,
    total_price: 30,
  },
  {
    uuid: 'abcd',
    date: '2019/09/01',
    time: '16:00-17:00',
    volume: 11,
    price: 3.6,
    total_price: 39.6,
  },
];

const BiddingList: React.FC = () => {
  return (
    <BidList>
      {columConfig.map((v, idx) => (
        <FieldRow key={v.uuid}>
          <FieldName>{v.date}</FieldName>
          <FieldName>{v.time}</FieldName>
          <FieldName>{v.volume}kWh</FieldName>
          <FieldName>${v.price}/kWh</FieldName>
          <FieldName>${v.total_price}</FieldName>
          <FieldName>
            <Pen src="/static/bidding/edit_pen_icon@2x.png" />
          </FieldName>
        </FieldRow>
      ))}
      <FieldRow key={1}>
        <FieldName>{'___'}</FieldName>
        <FieldName>{'___'}</FieldName>
        <FieldName>{'___'}kWh</FieldName>
        <FieldName>${'___'}/kWh</FieldName>
        <FieldName>${'___'}</FieldName>
        <FieldName>
          <Pen src="/static/bidding/edit_pen_icon@2x.png" />
        </FieldName>
      </FieldRow>
    </BidList>
  );
};

export default BiddingList;
