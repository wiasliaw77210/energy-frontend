import React from 'react';
import styled from 'styled-components';
import { IConnectedAMI } from '../../constants';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  min-width: 400px;
  height: 437px;
  background-color: #fff;
  overflow-x: hiddle;
  overflow-y: auto;
`;

const P = styled.p`
  color: #707070;
  font-size: 22px;
  font-weight: bold;
  padding-left: 45px;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 25% 55% 20%;
`;

const TableSpan = styled.span<{ type?: string; align?: 'center' | 'left' }>`
  color: #707070;
  font-size: ${props => ('title' === props.type ? '22px' : '20px')};
  text-align: ${props => ('left' === props.align ? 'left' : 'center')};
  padding-bottom: 1rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Hr = styled.hr`
  margin: 0 0 1rem 0;
  padding: 0;
  border-top: 1px solid #e5e5e5;
  grid-column-start: 1;
  grid-column-end: 4;
`;

interface IProps {
  ami_array: IConnectedAMI[];
}

export default ((props: IProps) => {
  return (
    <Wrapper>
      <Container>
        <P>已連結電表</P>
        <TableRow>
          <TableSpan type="title">電表編號</TableSpan>
          <TableSpan type="title" align="left">
            電表辨識碼
          </TableSpan>
          <TableSpan type="title">名稱</TableSpan>
        </TableRow>
        {props.ami_array.map((ami: IConnectedAMI, id) => (
          <TableRow key={id}>
            <TableSpan>{ami.num}</TableSpan>
            <TableSpan align="left">{ami.id}</TableSpan>
            <TableSpan>{ami.type}</TableSpan>
            <Hr />
          </TableRow>
        ))}
      </Container>
    </Wrapper>
  );
}) as React.FC<IProps>;
