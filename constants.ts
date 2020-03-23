export interface IConnectedAMI {
  num: number;
  id: string;
  type: PowerType;
}

export interface IBidSubmitData {
  date: string;
  time: string;
  volume: string;
  price: string;
  total_price: string;
}

export enum PowerType {
  PV = '太陽能',
  Homepage = '淨負載',
  WT = '風能',
  ESS = '儲能系統',
  EV = '充電樁',
}

export interface IPowerInfoData {
  date: string;
  time: string;
  usage: string;
  type: PowerType;
  url: string;
}

/**
 * User
 */
export interface IUserInfo {
  username: string;
  avatar: string;
  balance: number;
  address: string;
  eth_address: string;
}

/**
 * AMIs
 */

export interface IAmis {
  id: string;
  name: string;
  description: string;
}
