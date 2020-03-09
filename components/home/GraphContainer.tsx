import React from 'react';
import styled from 'styled-components';

const Block = styled.div`
  width: 100%;
  height: 464px;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  margin-top: 26px;
`;

const GraphContainer: React.FC = () => {
  const svgRef = React.createRef<SVGSVGElement>();
  return (
    <Block>
      <svg ref={svgRef} />
    </Block>
  );
};

export default GraphContainer;
