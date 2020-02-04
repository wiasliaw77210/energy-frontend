import React from 'react';
import styled from 'styled-components';
import { Translation } from 'react-i18next';

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

export default (() => (
  <Container>
    <UserImg src="https://cdn2.iconfinder.com/data/icons/business-management-isometric-awesome-design/512/Office_Building-512.png" />
    <Item>
      <Translation>{t => <span>{t('navbar.userName')}</span>}</Translation>
    </Item>
    <Item>
      <img style={{ marginRight: '20px' }} src="/static/nav/wallet_icon.png" />
      <span style={{ font: '22px/25px Regular Roboto' }}>$ 1000.00</span>
    </Item>
  </Container>
)) as React.FC;
