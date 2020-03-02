import React, { useState, useContext, createRef } from 'react';
import Router from 'next/router';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { ClientStateContext } from '../contexts/clientContext';
import { runtimeConfig } from '../utils';
import '../i18n';

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
  const { dispatch } = useContext(ClientStateContext);
  const formRef = createRef<HTMLFormElement>();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    let loginData = {};
    new FormData(formRef.current).forEach((value, key) => {
      loginData = { ...loginData, [key]: value };
    });

    const response: { id: string; bearer: string } = await fetch(
      `${runtimeConfig.MAIN_HOST}/login`,
      {
        method: 'POST',
        body: JSON.stringify(loginData),
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
      },
    )
      .then(resp => resp.json())
      .catch(() => null);

    if (response) {
      dispatch({
        type: 'UPDATE',
        payload: {
          userID: response.id,
          bearer: response.bearer,
        },
      });
      localStorage.setItem('BEMS_user', JSON.stringify(response));
      Router.push('/');
    }
  };

  return (
    <Form onSubmit={handleSubmit} ref={formRef}>
      <h1>綠能交易平台</h1>
      <DivCenter>
        <label htmlFor="account">{t('login.account')}</label>
        <input type="text" id="account" name="account" />
        <label htmlFor="password">{t('login.password')}</label>
        <input type="password" id="password" name="password" />
        <DivList onClick={() => setRemem(!isRemem)}>
          <SpanSelect isClick={isRemem}>{t('login.rememberMe')}</SpanSelect>
          <span className="list">{t('login.forget')}</span>
        </DivList>
      </DivCenter>
      <Button type="submit">{t('login.login')}</Button>
      <style jsx>{`
        h1 {
          font-family: NotoSerifTC;
          font-size: 37px;
          margin: 0;
          color: #39625e;
        }
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
        label {
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
