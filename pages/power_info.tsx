import React from 'react';
import Page from '../components/Page';
import Head from 'next/head';
import Nav from '../components/nav';
import { PowerType } from '../typing/PowerInfoType';
import { PowerInfoList } from '../components/power_info/PowerInfoList';

const state = {
  powerInfos: [{
    date: "2019/10/18",
    time: "18:19",
    usage: "0.01",
    type: PowerType.Homepage,
    url: "https://www.google.com"
  }, {
    date: "2019/10/18",
    time: "18:19",
    usage: "0.01",
    type: PowerType.Homepage,
    url: "https://www.google.com"
  }]
};

const PowerInfo = () => (
  <Page title="電力資訊">
    <PowerInfoList infos={state.powerInfos} />
  </Page>
);

export default PowerInfo;
