import React, { FunctionComponent } from 'react';

import styled from 'styled-components';

const BidField = styled.thead`
  width: 100%;
  height: 50px;
  line-height: 50px;
`;

const FieldName = styled.th`
  font-size: 20px;
  padding: 0;
  font-weight: 300;
`;

const columConfig = [
  { name: 'date', value: '日期' },
  { name: 'time', value: '時段' },
  { name: 'volume', value: '度數' },
  { name: 'price', value: '單價' },
  { name: 'total_price', value: '總金額' },
  { name: 'edit', value: '' },
];

const BiddingField: React.FC = () => {
  return (
    <BidField>
      <tr>
        {columConfig.map((v, idx) => (
          <FieldName key={v.name}>{v.value}</FieldName>
        ))}
      </tr>
    </BidField>
  );
};

export default BiddingField;
