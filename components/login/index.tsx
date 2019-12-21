import React from 'react';
import styled from 'styled-components';
import LoginForm from './loginForm';
import '../../i18n';
import LoginPicPng from '../../static/login/login_pic.png';

const Block = styled.div<{
  url?: any;
  float: 'left' | 'right';
}>`
  width: 50%;
  height: 100%;
  float: ${props => props.float};
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #f1f2f1;
  background-image: url(${props => (props.url ? props.url : '')});
`;

export default (() => (
  <React.Fragment>
    <Block url={LoginPicPng} float="left" />
    <Block float="right">
      <LoginForm />
    </Block>
  </React.Fragment>
)) as React.FC;
