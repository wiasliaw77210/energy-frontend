import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: inherit;
  padding: 0.5rem 0 0.5rem 0;
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
  margin: 10px;
`;

class UserInfo extends React.Component {
  render() {
    return (
      <Container>
        <UserImg src="/static/favicon.ico"/>
        <Item>
          <span>一期建物BEMS</span>
        </Item>
        <Item>
          <img src="/static/nav/wallet_icon.png"/>
          <span style={{font: '22px/25px Regular Roboto'}}>
            $ 1000.00
          </span>
        </Item>
      </Container>
    );
  }
}

export default UserInfo;
