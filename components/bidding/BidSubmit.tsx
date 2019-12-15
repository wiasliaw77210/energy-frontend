import React, { FunctionComponent, forwardRef, useEffect } from 'react';
import MaterialTable, { Column } from 'material-table';
import styled from 'styled-components';
import dayjs from 'dayjs';
import { useTranslation } from 'react-i18next';

const BidSubmitHeaders = {
  'Content-Type': 'application/json',
  Authorization:
    'Bearer ' +
    '3MaTIcta709SxWZ88OkaLjKvNzgfFkxqr8WemUjeOKLZcImscV6WcziuFyfrbXjc',
};

const url_bidsubmit = 'http://140.116.247.120:5000' + '/bidsubmit';

interface IProps {
  bidding_type: string;
}

interface IRow {
  id: string;
  date: string;
  time: number;
  volume: number;
  price: number;
  total_price: number;
}

interface ITableState {
  columns: Array<Column<IRow>>;
}

const Field: ITableState = {
  columns: [
    {
      field: 'id',
      title: 'id',
      type: 'string',
      hidden: true,
    },
    {
      field: 'date',
      title: '日期',
      type: 'date',
      cellStyle: {
        textAlign: 'center',
        width: '120px',
      },
      render: rowData => dayjs(rowData.date).format('YYYY/MM/DD'),
    },
    {
      field: 'time',
      title: '時段',
      lookup: {
        0: '0:00-1:00',
        1: '1:00-2:00',
        2: '2:00-3:00',
        3: '3:00-4:00',
        4: '4:00-5:00',
        5: '5:00-6:00',
        6: '6:00-7:00',
        7: '7:00-8:00',
        8: '8:00-9:00',
        9: '9:00-10:00',
        10: '10:00-11:00',
        11: '11:00-12:00',
        12: '12:00-13:00',
        13: '13:00-14:00',
        14: '14:00-15:00',
        15: '15:00-16:00',
        16: '16:00-17:00',
        17: '17:00-18:00',
        18: '18:00-19:00',
        19: '19:00-20:00',
        20: '20:00-21:00',
        21: '21:00-22:00',
        22: '22:00-23:00',
        23: '23:00-24:00',
      },
      cellStyle: { textAlign: 'center' },
    },
    {
      field: 'volume',
      title: '度數',
      cellStyle: { textAlign: 'center', width: '120px' },
      render: rowData => `${rowData.volume}kWh`,
    },
    {
      field: 'price',
      title: '單價',
      cellStyle: { textAlign: 'center', width: '120px' },
      render: rowData => `$${rowData.price}/kWh`,
    },
    {
      field: 'total_price',
      title: '總金額',
      editable: 'never',
      cellStyle: { textAlign: 'center' },
    },
  ],
};

const BiddingMaterialTable = styled.div`
  .MuiToolbar-root:not(.MuiTablePagination-toolbar) {
    padding: 50px 0;
  }
  .MuiTablePagination-toolbar {
    justify-content: end;
    color: #707070;
  }
  .MuiToolbar-root > div:first-child {
    position: absolute;
    width: 100%;
    text-align: center;
  }
  .MuiToolbar-root > div:first-child > h6 {
    color: ${props => (props.color === 'sell' ? '#2e7d32' : '#d32f2f')};
    font-size: 32px;
  }
  .MuiToolbar-gutters {
    padding-left: 0;
  }
  .MuiButtonBase-root[title='Edit'] {
    color: #ffa000;
  }
  .MuiButtonBase-root[title='Delete'] {
    color: #c43f38;
  }
  .MuiTableSortLabel-icon {
    position: absolute;
    right: -30px;
  }
  .MuiButtonBase-root {
    font-weight: 300;
  }
  .MuiInputBase-root.MuiInput-root {
    width: 100%;
  }
  .MuiTableCell-root {
    font-size: 20px;
  }
`;

const BiddingTable: React.FC<IProps> = ({ bidding_type }) => {
  const { t } = useTranslation();
  const [state] = React.useState<ITableState>(Field);
  return (
    <BiddingMaterialTable color={bidding_type}>
      <MaterialTable
        title={`${bidding_type === 'sell' ? t('sell') : t('buy')}`}
        options={{
          actionsColumnIndex: -1,
          search: false,
          headerStyle: {
            textAlign: 'center',
            color: '#707070',
            fontSize: '20px',
          },
          pageSize: 10,
        }}
        style={{
          width: '38vw',
          height: 'auto',
          boxShadow: '0 0 0',
          color: '#707070',
          fontSize: '20px',
        }}
        localization={{
          header: {
            actions: '',
          },
        }}
        columns={state.columns}
        data={async query => {
          const url = `${url_bidsubmit}?per_page=${
            query.pageSize
          }&page=${query.page + 1}&bid_type=${bidding_type}`;

          const result = await fetch(url, {
            method: 'get',
            headers: new Headers(BidSubmitHeaders),
          }).then(resp => resp.json());
          return {
            data: result.data,
            page: result.page - 1,
            totalCount: result.totalCount,
          };
        }}
        editable={{
          onRowAdd: newData =>
            new Promise(resolve => {
              setTimeout(() => {
                const data = {
                  date: dayjs(newData.date).format('YYYY/MM/DD'),
                  bid_type: bidding_type,
                  start_time:
                    dayjs(newData.date).format('YYYY/MM/DD ') + newData.time,
                  end_time:
                    dayjs(newData.date).format('YYYY/MM/DD ') +
                    (Number(newData.time) + 1),
                  value: newData.volume,
                  price: newData.price,
                };
                fetch(url_bidsubmit, {
                  method: 'post',
                  headers: new Headers(BidSubmitHeaders),
                  body: JSON.stringify(data),
                }).then(response => response.json());
                resolve();
              }, 600);
            }),
          onRowUpdate: (newData, oldData) =>
            new Promise(resolve => {
              setTimeout(() => {
                const data = {
                  id: oldData.id,
                  date: dayjs(newData.date).format('YYYY/MM/DD'),
                  bid_type: bidding_type,
                  start_time:
                    dayjs(newData.date).format('YYYY/MM/DD ') + newData.time,
                  end_time:
                    dayjs(newData.date).format('YYYY/MM/DD ') +
                    (Number(newData.time) + 1),
                  value: newData.volume,
                  price: newData.price,
                };
                fetch(url_bidsubmit, {
                  method: 'put',
                  headers: new Headers(BidSubmitHeaders),
                  body: JSON.stringify(data),
                }).then(response => response.json());
                resolve();
              }, 600);
            }),
          onRowDelete: oldData =>
            new Promise(resolve => {
              setTimeout(() => {
                const data = { id: oldData.id };
                fetch(url_bidsubmit, {
                  method: 'delete',
                  headers: new Headers(BidSubmitHeaders),
                  body: JSON.stringify(data),
                }).then(response => response.json());
                resolve();
              }, 600);
            }),
        }}
      />
    </BiddingMaterialTable>
  );
};

export default BiddingTable;
