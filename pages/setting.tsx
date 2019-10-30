import React from 'react';
import Page from '../components/Page';
import { AMIList } from '../components/setting/AMIList';
import { UserInfoList } from '../components/setting/UserInfoList';
import { PowerType } from '../typing/PowerType';

const state = {
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
const Setting = () => (
  <Page title="設定">
    <UserInfoList/>
    <AMIList amis={state.AMIs}/>
  </Page>
);

export default Setting;
