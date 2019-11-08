export enum PowerType {
    PV = '太陽能',
    Homepage = '正常用電',
    WT = '風能',
    ESS = '儲能系統',
    EV = '充電樁'
}

export interface IPowerInfoData {
    date: string;
    time: string;
    usage: string;
    type: PowerType;
    url: string;
}