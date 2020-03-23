import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import Image from './Image';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 0 40px;
`;

const Title = styled.span`
  color: #707070;
  text-align: center;
  font-size: 20px;
  margin-bottom: 61px;
`;

const P = styled.p<{ style?: React.CSSProperties }>`
  width: 100%;
  margin: 15.5px 0;
  font-size: 20px;
  color: #707070;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Bold = styled.span`
  color: #707070;
  font-size: 22px;
  font-weight: bold;
`;

const A = styled.a`
  color: #ffa000;
  cursor: pointer;
  text-decoration: none;
`;

const Button = styled.button<{ style?: React.CSSProperties }>`
  height: 40px;
  border: 0px;
  border-radius: 5px;
  font-size: 20px;
  line-height: 1.3;
  color: #fff;
  background-color: #707070;
  cursor: pointer;
  margin: 0 5px;
`;

interface IProps {
  account?: string;
  address?: string;
  eth_address?: string;
  updatePop: () => void;
}

export default ((props: IProps) => {
  const { t, i18n } = useTranslation();
  const handleChangeLangFactory = (target: 'en' | 'zh') => {
    return (event: React.SyntheticEvent) => {
      event.preventDefault();
      i18n.changeLanguage(target);
    };
  };
  return (
    <Container>
      <Image />
      <Title>一期建物BEMS</Title>
      <P>
        <Bold>{t('setting.userAttributes.account')}：</Bold>
        {props.account}
      </P>
      <P>
        <Bold>{t('setting.userAttributes.password')}：</Bold>
        {`**************`}
        <Button style={{ float: 'right' }} onClick={props.updatePop}>
          更改密碼
        </Button>
      </P>
      <P>
        <Bold>{t('setting.userAttributes.address')}：</Bold>
        {props.address}
      </P>
      <P style={{ color: '#ffa000' }}>
        <Bold>{t('setting.userAttributes.ethAddress')}：</Bold>
        <A
          target="_blank"
          href={`https://etherscan.io/address/${props.eth_address}`}
        >
          {props.eth_address}
        </A>
      </P>
      <P>
        <Bold>{t('setting.userAttributes.lang')}：</Bold>
        <Button onClick={handleChangeLangFactory('zh')}>中文</Button>
        <Button onClick={handleChangeLangFactory('en')}>ENGLISH</Button>
      </P>
    </Container>
  );
}) as React.FC<IProps>;
