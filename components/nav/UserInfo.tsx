import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 25px;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;
  margin-bottom: 28px;

  > span {
    font: 20px/24px Regular Roboto;
    letter-spacing: 0;
    color: #ffffff;
    opacity: 1;
  }
  > img {
    margin: 10px;
  }
`;
const UserImg = styled.img`
  width: 200px;
  height: 200px;
  background-color: grey;
  border-radius: 50%;
  margin: 28px;
`;

class UserInfo extends React.Component {
  render() {
    return (
      <Container>
        <UserImg src="https://cdn2.iconfinder.com/data/icons/business-management-isometric-awesome-design/512/Office_Building-512.png" />
        <Item>
          <span>一期建物BEMS</span>
        </Item>
        <Item>
          <img style={{ marginRight: 20 }} src="/static/nav/wallet_icon.png" />
          <span style={{ font: '22px/25px Regular Roboto' }}>$ 1000.00</span>
        </Item>
      </Container>
    );
  }
}

export default UserInfo;
