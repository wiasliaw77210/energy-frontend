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
  width: calc(100% - 28px);
  height: auto;
  background-color: grey;
  border-radius: 50%;
  margin: 14px 0 14px 0;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;

  > span {
    font: 20px/24px Regular Roboto;
    letter-spacing: 0;
    color: #ffffff;
    opacity: 1;
    margin: 14px 0 14px 0;
  }
  > img {
    margin: 10px;
  }
`;

class UserInfo extends React.Component {
  render() {
    return (
      <Container>
        <UserImg src="https://cdn2.iconfinder.com/data/icons/business-management-isometric-awesome-design/512/Office_Building-512.png" />
        <Item>
          <Translation>{t => <span>{t('navbar.userName')}</span>}</Translation>
        </Item>
        <Item>
          <img
            style={{ margin: '14px 20px 14px 10px' }}
            src="/static/nav/wallet_icon.png"
          />
          <span style={{ font: '22px/25px Regular Roboto' }}>$ 1000.00</span>
        </Item>
      </Container>
    );
  }
}

export default UserInfo;
