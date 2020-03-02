import React from 'react';
import styled from 'styled-components';
import { IUserInfo } from '../../constants';

interface IProps {
  info: IUserInfo;
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const UserImg = styled.img`
  max-width: 200px;
  min-width: 170px;
  width: calc(100% - 1.3rem);
  height: auto;
  background-color: grey;
  border-radius: 50%;
  margin: 1.56rem 0 1.56rem 0;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;
  margin-bottom: 1.56rem;
  > span {
    font: 20px/24px Regular Roboto;
    text-align: center;
    letter-spacing: 0;
    color: #ffffff;
    opacity: 1;
  }
`;

export default ((props: IProps) => (
  <Container>
    <UserImg src="https://cdn2.iconfinder.com/data/icons/business-management-isometric-awesome-design/512/Office_Building-512.png" />
    <Item>
      <span style={{ padding: '0 20px 0 20px' }}>{props.info.username}</span>
    </Item>
    <Item>
      <img style={{ marginRight: '20px' }} src="/static/nav/wallet_icon.png" />
      <span style={{ font: '22px/25px Regular Roboto' }}>
        $ {props.info.balance}
      </span>
    </Item>
  </Container>
)) as React.FC<IProps>;
