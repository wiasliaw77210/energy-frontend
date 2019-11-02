import React from 'react';
import Page from '../components/Page';
import BiddingTable from '../components/bidding/BidSubmit';
import MaterialTableDemo from '../components/bidding/BidTest';

const state = {
  BidDatas: [
    {
      date: '2019/10/18',
      time: '15:00-16:00',
      volume: '9',
      price: '3.1',
      total_price: '27.9',
    },
    {
      date: '2019/10/18',
      time: '15:00-16:00',
      volume: '15',
      price: '3',
      total_price: '45',
    },
  ],
};

const Bidding = () => (
  <Page title="Bidding">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
    />
    {/* <BiddingTable data={ state.BidDatas } onPressPen={ null } /> */}
    <MaterialTableDemo />
  </Page>
);

export default Bidding;
