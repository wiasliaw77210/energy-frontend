import React from 'react';
import Page from '../components/Page';
import styled from 'styled-components';
import { AMIList } from '../components/setting/AMIList';
import { UserInfoList } from '../components/setting/UserInfoList';
import { PowerType } from '../typing/PowerType';

const state = {
  UserInfos: {
    "帳號": "ShalunC_BEMS",
    "密碼": "************",
    "地址": "711台南市歸仁區",
    "以太坊地址": "0x207512e9c5183f0997aba…"
  },
  AMIs: [{
    num: 1,
    id: "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ…",
    type: PowerType.PV
  }, {
    num: 2,
    id: "Mtvs2Xl4GYEXCcMk4Us2xupO80PYeji…",
    type: PowerType.Homepage
  }, {
    num: 3,
    id: "AG8eyGzSMp8Bcu21QJd8JVtPQERZLXl…",
    type: PowerType.WT
  }, {
    num: 4,
    id: "H2s0Zqv4CLpHQ83ilB93UhDxvEtch8n…",
    type: PowerType.ESS
  }]
}

const ListItem = styled.li`
  margin-right: 80px;
  float: left;
  list-style-type: none;
`;

const List = styled.ul`
  width: 100%;
`;

const Setting = () => (
  <Page title="設定">
    <List>
      <ListItem>
        <UserInfoList userInfos={state.UserInfos}/>
      </ListItem>
      <ListItem>
        <AMIList amis={state.AMIs} />
      </ListItem>
    </List>
  </Page>
);

export default Setting;
