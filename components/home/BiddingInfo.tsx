import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Block = styled.div`
  width: calc(50% - 13px);
  border-radius: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  background-color: #fff;
  padding: 20px;
`;

const Title = styled.span`
  width: 100%;
  height: 30px;
  font-size: 22px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.14;
  letter-spacing: normal;
  color: #707070;
`;

const BiddingInfoContainer = styled.div`
  width: 100%;
  height: 250px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  margin-top: 10px;

  table {
    text-align: center;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.2;
    letter-spacing: normal;
    color: #707070;

    td {
      height: 50px;
    }
  }
`;

const testing_data = [
  {
    date: '2019/11/14',
    time: '10:00 - 11:00',
    bid_type: 'buy',
    success: true,
    value: 20,
    price: 5,
  },
  {
    date: '2019/11/14',
    time: '10:00 - 11:00',
    bid_type: 'buy',
    success: true,
    value: 20,
    price: 5,
  },
  {
    date: '2019/11/14',
    time: '10:00 - 11:00',
    bid_type: 'sell',
    success: true,
    value: 20,
    price: 5,
  },
  {
    date: '2019/11/13',
    time: '11:00 - 12:00',
    bid_type: 'sell',
    success: true,
    value: 20,
    price: 5,
  },
  {
    date: '2019/11/12',
    time: '10:00 - 11:00',
    bid_type: 'buy',
    success: false,
    value: 20,
    price: 4.5,
  },
];

const BiddingInfo: FunctionComponent = () => {
  const { t } = useTranslation();

  return (
    <Block>
      <Title>{t('home.biddingInfo.title')}</Title>
      <BiddingInfoContainer>
        <table>
          <tbody>
            {testing_data.map((data, index) => (
              <tr key={index}>
                <td>{data.date}</td>
                <td>{data.time}</td>
                <td
                  style={
                    data.bid_type === 'sell'
                      ? { color: '#D32F2F' }
                      : { color: '#2E7D32' }
                  }
                >
                  {data.bid_type === 'sell' ? t('sell') : t('buy')}
                </td>
                <td>
                  {data.success
                    ? t('home.biddingInfo.success')
                    : t('home.biddingInfo.fail')}
                </td>
                <td>
                  {t('home.biddingInfo.bidAmount') + ' : ' + data.value + 'kWh'}
                </td>
                <td>
                  {t('home.biddingInfo.unitPrice') + '$' + data.price + '/kWh'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </BiddingInfoContainer>
    </Block>
  );
};

export default BiddingInfo;
