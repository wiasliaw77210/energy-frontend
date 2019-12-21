import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { fetchLogin } from '../../utils';
import LoginLogo from '../../static/login/login_logo.png';
import '../../i18n';

const Form = styled.form`
  width: 476px;
  height: 588px;
  padding: 58px 61px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
`;
const Button = styled.button`
  width: 100%;
  height: 52px;
  font-family: Roboto;
  font-size: 20px;
  color: #fff;
  background-color: #39625e;
  border-radius: 5px;
  padding: 12px;
`;
const DivCenter = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: baseline;
  flex-direction: column;
`;
const DivList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SpanSelect = styled.span<{ isClick: boolean }>`
  font-family: Roboto;
  font-size: 15px;
  color: #707070;
  &::before {
    content: '';
    width: 16px;
    height: 16px;
    border: solid 1px #707070;
    background-color: ${props => (props.isClick ? '#39625e' : '#fff')};
    display: inline-block;
    vertical-align: -10%;
    margin-right: 5px;
  }
`;

const Login: React.FC = () => {
  const { t } = useTranslation();
  const [isRemem, setRemem] = useState(false);
  const [loginInfo, setLoginInfo] = useState({ account: '', password: '' });

  useEffect(() => {
    if (
      null !== localStorage.getItem('BEMS_user_id') &&
      null !== localStorage.getItem('BEMS_bearer')
    ) {
      Router.push('/');
    }
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const response = await fetchLogin(loginInfo.account, loginInfo.password);

    if (!!response.id && !!response.bearer) {
      localStorage.setItem('BEMS_user_id', response.id);
      localStorage.setItem('BEMS_bearer', response.bearer);
      Router.push('/');
    }
  };

  const handleAccount = (event: React.FormEvent<HTMLInputElement>) =>
    setLoginInfo({
      ...loginInfo,
      account: event.currentTarget.value,
    });
  const handlePassword = (event: React.FormEvent<HTMLInputElement>) =>
    setLoginInfo({
      ...loginInfo,
      password: event.currentTarget.value,
    });

  return (
    <Form onSubmit={handleSubmit}>
      <img src={LoginLogo} />
      <DivCenter>
        <span>{t('login.account')}</span>
        <input type="text" id="account" onChange={handleAccount} />
        <span>{t('login.password')}</span>
        <input type="password" id="password" onChange={handlePassword} />
        <DivList onClick={() => setRemem(!isRemem)}>
          <SpanSelect isClick={isRemem}>{t('login.rememberMe')}</SpanSelect>
          <span className="list">{t('login.forget')}</span>
        </DivList>
      </DivCenter>
      <Button type="submit">{t('login.login')}</Button>
      <style jsx>{`
        input {
          border-top: 0px;
          border-left: 0px;
          border-right: 0px;
          border-bottom: 1px solid #707070;
          width: 100%;
          margin-top: 10px;
          margin-bottom: 10px;
          font-family: Roboto;
          font-size: 20px;
          color: #707070;
        }
        input:placeholder {
          font-family: Roboto;
          font-size: 20px;
          color: #707070;
        }
        span {
          font-family: Roboto;
          font-size: 20px;
          color: #707070;
          margin-top: 10px;
          margin-bottom: 10px;
          font-family: Roboto;
        }
        .list {
          font-family: Roboto;
          font-size: 15px;
          color: #707070;
        }
      `}</style>
    </Form>
  );
};

export default Login;
