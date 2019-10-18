import React, {FunctionComponent, useState, useEffect} from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import UserInfo from './user';
import Navlink from './link';

const getCurrentTime = () => dayjs().format('YYYY/MM/DD HH:mm');

const Navbar = styled.div`
  width: 262px;
  height: 100vh;
  background-color: #39625E;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const TitleImg = styled.img`
  margin: 20px 10px 10px 10px;
`;
const TimeSpan = styled.span`
  padding: 3rem 0 1.25rem 0;
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
      <Container>
        <TitleImg src="/static/nav/program_icon.png"/>
      </Container>
      <UserInfo/>
      <Navlink/>
      <Container>
        <TimeSpan>{timeString}</TimeSpan>
      </Container>
    </Navbar>
  );
};

export default Nav;
