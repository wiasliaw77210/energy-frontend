import React, { FunctionComponent, useState, useEffect } from 'react';
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
  margin-bottom: 28px;

  > a {
    font-size: 20px;
    letter-spacing: 0;
    color: #ffffff;
    opacity: 1;
    width: 90px;
    font-weight: 300;
    text-decoration: none;
  }

  > img {
    margin: 10px;
  }
`;

const linkConfig = [
  { name: 'HomePage', ref: '/', icon: 'home_icon' },
  { name: 'Bidding', ref: '/bidding', icon: 'b_icon' },
  { name: 'BiddingStatus', ref: '/status', icon: 'bs_icon' },
  { name: 'PowerInfo', ref: '/power_info', icon: 'flash_icon' },
  { name: 'Setting', ref: '/setting', icon: 'setting_icon' },
];

enum Color {
  WHITE = 'white_icon',
  ORANGE = 'orange_icon',
}

const Navlinks: FunctionComponent = () => {
  const [path, setPath] = useState('/');
  useEffect(() => {
    setPath(window.location.pathname);
  }, []);

  return (
    <Container>
      {linkConfig.map((link, index) => (
        <Item key={index}>
          <img
            src={`/static/nav/${
              path === link.ref ? Color.ORANGE : Color.WHITE
            }/${link.icon}.png`}
          />
          <a
            href={link.ref}
            style={path === link.ref ? { color: '#FFA000' } : {}}
          >
            {link.name}
          </a>
        </Item>
      ))}
      <Item>
        <img src="/static/nav/white_icon/logout_icon.png" />
        <a href="/">Logout</a>
      </Item>
    </Container>
  );
};

export default Navlinks;
