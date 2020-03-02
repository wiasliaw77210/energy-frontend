import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const InfoBlock = styled.div`
  width: auto;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.19;
  letter-spacing: normal;
  text-align: center;
  margin: 0.25rem 0 0.25rem 0;

  .sub-title {
    font-size: 1.78rem;
    margin-right: 1.56rem;
  }

  .detail {
    font-size: 1.56rem;
    color: #707070;
  }
`;

interface IDetail {
  subTitle: string;
  value: string;
  price: string;
}

const MarketInfoDetail: FunctionComponent<IDetail> = (props: IDetail) => {
  const buyStyle = {
    color: '#2e7d32',
  };

  const sellStyle = {
    color: '#d32f2f',
  };

  return (
    <InfoBlock>
      <span
        className="sub-title"
        style={
          props.subTitle === '買' || props.subTitle === 'buy'
            ? buyStyle
            : sellStyle
        }
      >
        {props.subTitle}
      </span>
      <span className="detail">
        {props.value + 'kWh  $' + props.price + '/kWh'}
      </span>
    </InfoBlock>
  );
};

export default MarketInfoDetail;
