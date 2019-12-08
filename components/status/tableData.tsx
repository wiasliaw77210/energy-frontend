import React, { useState } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

enum EFilter {
  ALL,
  BIDDING,
  PROCESS,
  FINALLY,
}

interface IData {
  id: string;
  date: string;
  time: string;
  bid_type: string;
  status: number;
  transaction_hash?: string;
  upload?: string;
  counterpart?: {
    name?: string;
    address?: string;
  };
  bid_value: number;
  average_price: number;
  win?: {
    value?: number;
    total_price?: number;
  };
  achievement?: string;
  settlement: number;
}

interface IProps {
  data: IData[];
  handleSetData: (data: any) => void;
}

const FilterSelect = styled.a<{ isSelect: boolean }>`
  width: 25%;
  height: 44px;
  border: 1px solid #d8d8d8;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px 5px 0 0;
  background-color: ${props => (props.isSelect ? '#ffa200' : '#fff')};
  > span {
    font-family: Roboto;
    font-size: 22px;
    color: ${props => (props.isSelect ? '#fff' : '#707070')};
  }
`;
const DisplaySelect = styled.a<{ isSelect: boolean }>`
  width: 14px;
  height: 14px;
  border: 1px solid #707070;
  display: inline-block;
  background-color: ${props => (props.isSelect ? '#39625e' : 'transparent')};
`;
const TxLink = styled.a<{ disabled: boolean }>`
  text-decoration: none;
  color: ${props => (props.disabled ? '#707070' : '#ffa000')};
  pointer-events: ${props => (props.disabled ? 'none' : 'initial')};
`;

const TableData: React.FC<IProps> = (props: IProps) => {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<EFilter>(EFilter.ALL);
  const [displayID, setDisplayID] = useState<string>('');

  const StatusString = {
    '0': t('status.table.status0'),
    '1': t('status.table.status1'),
    '2': t('status.table.status2'),
    '3': t('status.table.status3'),
    '4': t('status.table.status4'),
    '5': t('status.table.status5'),
    '6': t('status.table.status6'),
  };

  return (
    <div className="container">
      <div className="filter">
        <FilterSelect
          isSelect={filter === EFilter.ALL ? true : false}
          onClick={() => setFilter(EFilter.ALL)}
        >
          <span>{t('status.table.pageAll')}</span>
        </FilterSelect>
        <FilterSelect
          isSelect={filter === EFilter.BIDDING ? true : false}
          onClick={() => setFilter(EFilter.BIDDING)}
        >
          <span>{t('status.table.pageBidden')}</span>
        </FilterSelect>
        <FilterSelect
          isSelect={filter === EFilter.PROCESS ? true : false}
          onClick={() => setFilter(EFilter.PROCESS)}
        >
          <span>{t('status.table.pageTrading')}</span>
        </FilterSelect>
        <FilterSelect
          isSelect={filter === EFilter.FINALLY ? true : false}
          onClick={() => setFilter(EFilter.FINALLY)}
        >
          <span>{t('status.table.pageSettlement')}</span>
        </FilterSelect>
      </div>
      <div className="table">
        <div className="col caption">
          <span style={{ width: '20%' }}>{/*for block*/}</span>
          <span style={{ width: '25%' }}>{t('status.table.colBidType')}</span>
          <span style={{ width: '40%' }}>{t('status.table.colStatus')}</span>
          <span style={{ width: '40%' }}>{t('status.table.colProgress')}</span>
          <span style={{ width: '40%' }}>{t('status.table.colDate')}</span>
          <span style={{ width: '40%' }}>{t('status.table.colPeriod')}</span>
          <span style={{ width: '40%' }}>{t('status.table.colAvgPrice')}</span>
          <span style={{ width: '40%' }}>{t('status.table.colLink')}</span>
        </div>
        {props.data
          .filter(item => {
            switch (filter) {
              case EFilter.ALL:
                return item;
              case EFilter.BIDDING:
                return item.status === 2 || item.status === 3;
              case EFilter.PROCESS:
                return item.status === 4;
              case EFilter.FINALLY:
                return item.status === 5 || item.status === 6;
            }
          })
          .map((item, index) => (
            <div
              className="col"
              key={index}
              style={{ borderTop: index !== 0 ? 'solid 1px #f1f2f1' : '' }}
              onClick={() => {
                setDisplayID(item.id);
                props.handleSetData(item);
              }}
            >
              <span style={{ width: '20%' }}>
                <DisplaySelect isSelect={displayID === item.id} />
              </span>
              <span style={{ width: '25%' }}>
                <span
                  style={{
                    color: item.bid_type === 'buy' ? '#d32f2f' : '#2e7d32',
                  }}
                >
                  {item.bid_type === 'buy' ? t('buy') : t('sell')}
                </span>
              </span>
              <span style={{ width: '40%' }}>{StatusString[item.status]}</span>
              <span style={{ width: '40%' }}>
                <img src={`/static/status/${item.status}_pro_bar.png`} />
              </span>
              <span style={{ width: '40%' }}>{item.date}</span>
              <span style={{ width: '40%' }}>{item.time}</span>
              <span style={{ width: '40%' }}>${item.average_price}/kWh</span>
              <span style={{ width: '40%' }}>
                <TxLink
                  target="_blank"
                  href={
                    item.transaction_hash
                      ? `https://ropsten.etherscan.io/tx/${item.transaction_hash}`
                      : ''
                  }
                  disabled={item.transaction_hash ? false : true}
                >
                  {'< URL >'}
                </TxLink>
              </span>
            </div>
          ))}
      </div>
      <style jsx>{`
        .container {
          width: 100%;
          background-color: #fff;
          margin-top: 33px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .filter {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .table {
          width: 100%;
        }
        .col {
          width: 100%;
          display: flex;
          justify-content: center;
        }
        .col > span {
          font-family: Roboto;
          font-size: 22px;
          color: #707070;
          text-align: center;
          margin: 28px 0 28px 0;
          text-overflow: ellipsis;
          overflow: hidden;
        }
        .caption {
          font-weight: bold;
        }
      `}</style>
    </div>
  );
};

export default TableData;
