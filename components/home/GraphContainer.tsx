import React, { FunctionComponent, useState } from 'react';
import styled from 'styled-components';

const Block = styled.img`
  width: 1530px;
  height: 464px;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  margin-top: 25px;
`;

const GraphContainer: FunctionComponent = () => {
  return (
    <Block
      src={`/static/home/4_new_building_with_percentage_.gif`}
      alt="building"
    />
  );
};

export default GraphContainer;
