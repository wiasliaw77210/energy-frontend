import React, { useEffect, useState, FormEvent } from 'react';
import Layout from '../layout/layout';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import { Menu, AMIList, Popup } from '../components/setting';
import { IUserInfo, IAmis } from '../constants';
import { runtimeConfig } from '../utils';

const Block = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 500px 1fr;
  @media (max-width: 1400px) {
    grid-template-columns: 1fr;
  }
`;

const Setting = () => {
  const { t } = useTranslation();
  const [user, setUser] = useState<IUserInfo>({
    username: '',
    balance: 0,
    eth_address: '',
    address: '',
    avatar: '',
  });
  const [amis, setAmis] = useState<IAmis[]>([]);
  const [isPop, setPop] = useState<boolean>(false);
  const updatePop = () => {
    setPop(!isPop);
  };
  useEffect(() => {
    (async () => {
      const { bearer } = JSON.parse(localStorage.getItem('BEMS_user'));
      // user data
      const userResp = await fetch(`${runtimeConfig.MAIN_HOST}/user`, {
        method: 'GET',
        mode: 'cors',
        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${bearer}`,
        }),
      });
      const userData: IUserInfo = await userResp.json();
      setUser(userData);
      // amis
      const amisResp = await fetch(`${runtimeConfig.MAIN_HOST}/amis`, {
        method: 'GET',
        mode: 'cors',
        headers: new Headers({
          'Content-Type': 'application/json',
          Authorization: `Bearer ${bearer}`,
        }),
      });
      const amisData: IAmis[] = await amisResp.json();
      setAmis(amisData);
      return;
    })();
  }, []);
  return (
    <Layout title={t('setting.title')}>
      <Popup isPop={isPop} updatePop={updatePop} />
      <Block>
        <Menu
          account={user.username}
          address={user.address}
          eth_address={user.eth_address}
          updatePop={updatePop}
        />
        <AMIList ami_array={amis} />
      </Block>
    </Layout>
  );
};

export default Setting;
