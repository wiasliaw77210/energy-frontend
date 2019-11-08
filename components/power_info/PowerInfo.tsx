import 'date-fns';
import React, { FunctionComponent, forwardRef, useEffect } from 'react';
import dayjs from 'dayjs';
import MaterialTable, { Column } from 'material-table';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import styled from 'styled-components';

const PowerInfoHeaders = {
  'Content-Type': 'application/json',
  Authorization: 'Bearer xxx',
};

const url_powerinfo = 'http://140.116.247.120:5000/power_info';

interface IPowerInfoData {
  id: string;
  date: string;
  time: string;
  power_display: number;
  data_type: string;
  address: string;
}

interface ITableState {
  columns: Array<Column<IPowerInfoData>>;
}

const Field: ITableState = {
  columns: [
    {
      field: 'date',
      title: '日期',
      type: 'string',
      cellStyle: {
        textAlign: 'center',
      },
    },
    {
      field: 'time',
      title: '紀錄時間',
      type: 'string',
      cellStyle: {
        textAlign: 'center',
      },
    },
    {
      field: 'power_display',
      title: '度數(kWh)',
      type: 'string',
      cellStyle: {
        textAlign: 'center',
      },
    },
    {
      field: 'data_type',
      title: '用產電種類',
      type: 'string',
      cellStyle: {
        textAlign: 'center',
      },
    },
    {
      field: 'address',
      title: '連結',
      type: 'string',
      cellStyle: {
        textAlign: 'center',
      },
      render: rowData => (
        <a target="_blank" href={rowData.address}>
          URL
        </a>
      ),
    },
  ],
};

const DatePicker = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`;

function PowerInfoTable() {
  const [state] = React.useState<ITableState>(Field);
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date(dayjs().format('YYYY/MM/DD')),
  );
  // `tableRef` type finding
  const tableRef = React.createRef<any>();

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    tableRef.current.onQueryChange();
  };
  return (
    <>
      <DatePicker>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Choose Data Date"
            format="yyyy/MM/dd"
            value={selectedDate}
            onChange={handleDateChange}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </DatePicker>
      <MaterialTable
        title={'電力資訊'}
        options={{
          search: false,
          headerStyle: {
            textAlign: 'center',
          },
        }}
        tableRef={tableRef}
        columns={state.columns}
        data={query =>
          new Promise((resolve, reject) => {
            let url = url_powerinfo;
            url += '?per_page=' + query.pageSize;
            url += '&page=' + (query.page + 1);
            url += '&time=' + dayjs(selectedDate).format('YYYY/MM/DD');
            fetch(url, {
              method: 'get',
              headers: new Headers(PowerInfoHeaders),
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
      />
    </>
  );
}

export default PowerInfoTable;
