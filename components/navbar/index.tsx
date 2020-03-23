import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';
import UserInfo from './UserInfo';
import Navlinks from './Navlinks';
import { ClientStateContext } from '../../contexts/clientContext';
import { runtimeConfig } from '../../utils';
import { IUserInfo } from '../../constants';

const getCurrentTime = () => dayjs().format('YYYY/MM/DD HH:mm');

const Navbar = styled.div`
  width: 13.6%;
  min-width: 200px;
  height: 100vh;
  background-color: #39625e;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
`;

const H1 = styled.div`
  font-size: 26px;
  color: #fff;
  margin-top: 1rem;
  text-align: center;
`;

const TimeSpan = styled.span`
  font: 20px/24px Regular Roboto;
  letter-spacing: 0;
  color: #ffffff;
  opacity: 1;
  margin-bottom: 3rem;
`;

const Flexbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Resize = styled.div`
  height: 1.78rem;
`;

const Nav: React.FC = () => {
  const { t } = useTranslation();
  const [timeString, setTime] = useState(getCurrentTime());
  const [info, setInfo] = useState<IUserInfo>({
    username: '',
    balance: 0,
    eth_address: '',
    address: '',
    avatar: '',
  });
  const { user } = useContext(ClientStateContext);

  // timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // user info
  useEffect(() => {
    (async () => {
      if (!user) {
        return;
      }
      const response = await fetch(`${runtimeConfig.MAIN_HOST}/user`, {
        method: 'GET',
        mode: 'cors',
        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${user.bearer}`,
        }),
      });
      const rawData: IUserInfo = await response.json();
      setInfo(rawData);
    })();
  }, [user]);

  return (
    <Navbar>
      <H1>{t('navbar.title')}</H1>
      <Flexbox>
        <UserInfo info={info} />
        <Resize />
        <Navlinks />
      </Flexbox>
      <TimeSpan>{timeString}</TimeSpan>
    </Navbar>
  );
};

export default Nav;
