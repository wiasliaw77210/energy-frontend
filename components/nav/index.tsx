import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import UserInfo from './UserInfo';
import Navlinks from './Navlinks';

const getCurrentTime = () => dayjs().format('YYYY/MM/DD HH:mm');

const Navbar = styled.div`
  width: 13.6%;
  height: 100vh;
  background-color: #39625e;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
`;

const H1 = styled.div`
  font-size: 30px;
  color: #fff;
  margin-top: 23px;
`;

const TimeSpan = styled.span`
  font: 20px/24px Regular Roboto;
  letter-spacing: 0;
  color: #ffffff;
  opacity: 1;
  margin-bottom: 54px;
`;
const Flexbox = styled.div`
  display: flex;
  jusitfy-content: center;
  align-items: center;
  flex-direction: column;
`;
const Resize = styled.div`
  height: 60px;
`;

const Nav: React.FC = () => {
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
      <H1>綠能交易平台</H1>
      <Flexbox>
        <UserInfo />
        <Resize />
        <Navlinks />
      </Flexbox>
      <TimeSpan>{timeString}</TimeSpan>
    </Navbar>
  );
};

export default Nav;
