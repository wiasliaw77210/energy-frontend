import React, { FunctionComponent, forwardRef, useEffect } from 'react';
import MaterialTable, { Column } from 'material-table';

import dayjs from 'dayjs';

const BidSubmitHeaders = {
  'Content-Type': 'application/json',
  Authorization:
    'Bearer 3MaTIcta709SxWZ88OkaLjKvNzgfFkxqr8WemUjeOKLZcImscV6WcziuFyfrbXjc',
};
// const BidSubmitHeaders = new Headers(httpHeaders)

const url_bidsubmit = 'http://140.116.247.120:5000/bidsubmit';

interface Row {
  date: string;
  time: number;
  volume: number;
  price: number;
  total_price: number;
}

interface TableState {
  columns: Array<Column<Row>>;
  data: Row[];
}

export default function MaterialTableDemo() {
  // useEffect(() => {
  //     fetch(url, {
  //         method: 'get',
  //         // mode: 'no-cors',
  //         // credentials: 'include',
  //         headers: new Headers({
  //             'Content-Type': 'application/json',
  //             'Authorization': 'Bearer 3MaTIcta709SxWZ88OkaLjKvNzgfFkxqr8WemUjeOKLZcImscV6WcziuFyfrbXjc',
  //         })
  //     })
  //     .then(response => console.log(response))
  //     // .then(response => console.log(response))
  //     // .then(result => )
  // }, []);
  const [state, setState] = React.useState<TableState>({
    columns: [
      {
        field: 'date',
        title: '日期',
        type: 'date',
        cellStyle: { textAlign: 'center' },
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
      { field: 'volume', title: '度數', cellStyle: { textAlign: 'center' } },
      { field: 'price', title: '單價', cellStyle: { textAlign: 'center' } },
      {
        field: 'total_price',
        title: '總金額',
        editable: 'never',
        cellStyle: { textAlign: 'center' },
      },
    ],
    data: [
      {
        // "uuid": "1234",
        date: '2019/09/01',
        time: 13,
        volume: 10,
        price: 3,
        total_price: 30,
      },
      {
        // "uuid": "5678",
        date: '2019/09/01',
        time: 13,
        volume: 10,
        price: 3,
        total_price: 30,
      },
      {
        // "uuid": "abcd",
        date: '2019/09/01',
        time: 14,
        volume: 11,
        price: 3.6,
        total_price: 39.6,
      },
    ],
  });

  return (
    <MaterialTable
      title="買"
      options={{
        actionsColumnIndex: -1,
        search: false,
        headerStyle: {
          textAlign: 'right',
        },
      }}
      columns={state.columns}
      data={query =>
        new Promise((resolve, reject) => {
          let url = url_bidsubmit;
          url += '?per_page=' + query.pageSize;
          url += '&page=' + (query.page + 1);
          url += '&bid_type=buy';
          fetch(url, {
            method: 'get',
            headers: new Headers({
              'Content-Type': 'application/json',
              Authorization:
                'Bearer 3MaTIcta709SxWZ88OkaLjKvNzgfFkxqr8WemUjeOKLZcImscV6WcziuFyfrbXjc',
            }),
          })
            .then(response => response.json())
            .then(result => {
              resolve({
                data: result.data,
                page: result.page - 1,
                totalCount: result.totalCount,
              });
            });
        })
      }
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 300);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState(prevState => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 300);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              setState(prevState => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 300);
          }),
      }}
    />
  );
}
