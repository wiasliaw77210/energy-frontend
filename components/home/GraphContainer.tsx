import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

const Block = styled.img`
  width: 100%;
  height: 464px;
  min-width: 1530px;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  margin-top: 26px;
`;

const GraphContainer: FunctionComponent = () => {
  return <Block src={`/static/home/4_building_fps15.gif`} alt="building" />;
};

export default GraphContainer;
