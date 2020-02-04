import React, { FunctionComponent, useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';

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
  margin-bottom: 1.56rem;

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
    margin-right: 10px;
    vertical-align: middle;
  }
`;

enum Color {
  WHITE = 'white_icon',
  ORANGE = 'orange_icon',
}

const Navlinks: FunctionComponent = () => {
  const { t } = useTranslation();
  const [path, setPath] = useState('/');
  const { pathname } = useRouter();
  useEffect(() => {
    setPath(pathname);
  }, []);

  const linkConfig = [
    { name: t('navbar.page.home'), ref: '/', icon: 'home_icon' },
    { name: t('navbar.page.bidding'), ref: '/bidding', icon: 'b_icon' },
    { name: t('navbar.page.status'), ref: '/status', icon: 'bs_icon' },
    {
      name: t('navbar.page.powerInfo'),
      ref: '/power_info',
      icon: 'flash_icon',
    },
    { name: t('navbar.page.setting'), ref: '/setting', icon: 'setting_icon' },
  ];

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
        <a href="/">{t('navbar.logout')}</a>
      </Item>
    </Container>
  );
};

export default Navlinks;
