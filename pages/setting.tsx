import React from 'react';
import Page from '../components/Page';
import styled from 'styled-components';
import { AMIList } from '../components/setting/AMIList';
import { UserInfoList } from '../components/setting/UserInfoList';
import { PowerType } from '../typings/PowerType';

const state = {
  UserInfos: {
    account: 'SGESC_C_BEMS',
    password: '************',
    address:
      'C., No.2001, Section 1, Zhongzheng South Road, Guiren Dist., Tainan City 711, Taiwan (R.O.C.)',
    eth_address: '0x8fBD8CB7DDEE6e1b...',
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
    {
      num: 5,
      id: '3932154d-17af-4e09-8e38-6dc11f97a394',
      type: PowerType.EV,
    },
  ],
};

const Block = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const Setting = () => (
  <Page title="Setting">
    <Block>
      <UserInfoList userInfos={state.UserInfos} />
      <AMIList amis={state.AMIs} />
    </Block>
  </Page>
);

export default Setting;
