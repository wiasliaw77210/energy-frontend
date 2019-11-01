import React, { FunctionComponent, useState, useEffect } from 'react';
import styled from 'styled-components';

const InfoBlock = styled.div`
  width: auto;
  height: 45px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: center;

  .sub-title {
    font-size: 32px;
    margin-right: 28px;
  }

  .detail {
    font-size: 28px;
    color: #707070;
  }
`;

interface Detail {
  subTitle: string;
  value: string;
  price: string;
}

const MarketInfoDetail: React.FunctionComponent<Detail> = (props: Detail) => {
  const buyStyle = {
    color: '#2e7d32',
  };

  const sellStyle = {
    color: '#d32f2f',
  };

  return (
    <InfoBlock>
      {/* <text className="sub-title" style={props.buy ? buyStyle : sellStyle}>{props.subTitle}</text> */}
      <text
        className="sub-title"
        style={props.subTitle == '買' ? buyStyle : sellStyle}
      >
        {props.subTitle}
      </text>
      <text className="detail">
        {props.value + 'kWh  $' + props.price + '/kWh'}
      </text>
    </InfoBlock>
  );
};

export default MarketInfoDetail;
