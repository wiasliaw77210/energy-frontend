import React from 'react';
import Layout from '../layout/layout';
import styled from 'styled-components';
import { AMIList } from '../components/setting/AMIList';
import { UserInfoList } from '../components/setting/UserInfoList';
import { PowerType } from '../typings/PowerType';

const state = {
  UserInfos: {
    帳號: 'ShalunC_BEMS',
    密碼: '************',
    地址: '台南市歸仁區高發二路360號C區',
    以太坊地址: '0xFE9181D3C196c163bECEC8aAe9250BCFE0C98F73',
  },
  AMIs: [
    {
      num: 1,
      id: '8b46ca3e-b22f-400b-a1b7-1864681ddcdf',
      type: PowerType.PV,
    },
    {
      num: 2,
      id: '7928223c-5275-48cf-b306-dd0286936866',
      type: PowerType.Homepage,
    },
    {
      num: 3,
      id: 'fe534d44-8b7c-4527-a1de-7b94b19302b8',
      type: PowerType.WT,
    },
    {
      num: 4,
      id: '1db5150f-899a-4628-92ae-b1eb51e2822d',
      type: PowerType.ESS,
    },
  ],
};

const Block = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

const Setting = () => (
  <Layout title="設定">
    <Block>
      <UserInfoList userInfos={state.UserInfos} />
      <AMIList amis={state.AMIs} />
    </Block>
  </Layout>
);

export default Setting;
