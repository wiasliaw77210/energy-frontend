import React, { FunctionComponent, useState, useEffect } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import UserInfo from './UserInfo';
import Navlinks from './Navlinks';

const getCurrentTime = () => dayjs().format('YYYY/MM/DD HH:mm');

const Navbar = styled.div`
  width: 262px;
  background-color: #39625e;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  padding-top: 23px;
  padding-bottom: 54px;
`;

const H1 = styled.div`
  font-size: 30px;
  color: #fff;
  margin-bottom: 118px;
`;

const TimeSpan = styled.span`
  margin-top: 134px;
  font: 20px/24px Regular Roboto;
  letter-spacing: 0;
  color: #ffffff;
  opacity: 1;
`;

const Nav: FunctionComponent = () => {
  const [timeString, setTime] = useState(getCurrentTime());
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getCurrentTime());
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Navbar>
      <H1>Energy Trading</H1>
      <UserInfo />
      <Navlinks />
      <TimeSpan>{timeString}</TimeSpan>
    </Navbar>
  );
};

export default Nav;
