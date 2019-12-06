import 'date-fns';
import React, { FunctionComponent, useEffect, useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import dayjs from 'dayjs';
import MaterialTable, { Column } from 'material-table';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const PowerInfoHeaders = {
  'Content-Type': 'application/json',
  Authorization:
    'Bearer ' +
    '3MaTIcta709SxWZ88OkaLjKvNzgfFkxqr8WemUjeOKLZcImscV6WcziuFyfrbXjc',
};

const url_powerinfo = 'http://140.116.247.120:5000' + '/power_info';

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
        <a
          target="_blank"
          href={rowData.address}
          style={{
            textDecoration: 'none',
            color: '#ffa000',
            pointerEvents: 'initial',
          }}
        >
          {'< URL >'}
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

interface ICharts {
  name: string;
  Demand: number;
  Ess: number;
  EV: number;
  PV: number;
  WT: number;
}

const ChartsContainer = styled(ResponsiveContainer)`
  background-color: #fff;
`;

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
    font-size: 32px;
  }
  .MuiToolbar-gutters {
    padding-left: 0;
  }
  .MuiTableSortLabel-icon {
    position: absolute;
    right: -30px;
  }
  .MuiButtonBase-root {
    font-weight: 300;
  }
  .MuiTableCell-root {
    font-size: 20px;
  }
`;

const PowerInfoTable: FunctionComponent = () => {
  const { t } = useTranslation();
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

  const [chart_data, setChart] = useState<ICharts[]>([]);

  async function fetchMyAPI() {
    const url = `${url_powerinfo}?start_time=${dayjs(selectedDate).format(
      'YYYY/MM/DD',
    )}&end_time=${dayjs(selectedDate).format('YYYY/MM/DD')}`;
    const response = await fetch(url, {
      method: 'get',
      headers: PowerInfoHeaders,
    }).then(resp => resp.json());
    setChart(response);
  }
  useEffect(() => {
    fetchMyAPI();
  }, []);

  return (
    <>
      <ChartsContainer height={340}>
        <LineChart
          data={chart_data}
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="name"
            label={{
              value: '日期',
              position: 'insideBottomRight',
              offset: -10,
            }}
          />
          <YAxis
            label={{ value: 'kWh', position: 'insideTopLeft', offset: 0 }}
          />
          <Tooltip />
          <Legend
            align="right"
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={{ paddingLeft: '20px' }}
          />
          <Line
            type="monotone"
            dataKey="Demand"
            name="NetLoad"
            stroke="#1184ff"
            dot={false}
            connectNulls
            activeDot={{ r: 8 }}
            strokeWidth={2}
          />
          <Line
            type="monotone"
            dataKey="ESS"
            stroke="#939496"
            dot={false}
            connectNulls
          />
          <Line
            type="monotone"
            dataKey="PV"
            stroke="#f4d35e"
            dot={false}
            connectNulls
          />
          <Line
            type="monotone"
            dataKey="WT"
            stroke="#ee964b"
            dot={false}
            connectNulls
          />
          <Line
            type="monotone"
            dataKey="EV"
            stroke="#f95738"
            dot={false}
            connectNulls
          />
        </LineChart>
      </ChartsContainer>
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
      <BiddingMaterialTable>
        <MaterialTable
          title={t('powerInfo.title')}
          options={{
            search: false,
            headerStyle: {
              textAlign: 'center',
              color: '#707070',
              fontSize: '20px',
            },
          }}
          style={{
            boxShadow: '0 0 0',
            color: '#707070',
            fontSize: '20px',
          }}
          tableRef={tableRef}
          columns={state.columns}
          data={async query => {
            const url = `${url_powerinfo}?per_page=${
              query.pageSize
            }&page=${query.page + 1}&time=${dayjs(selectedDate).format(
              'YYYY/MM/DD',
            )}`;
            const response = await fetch(url, {
              method: 'get',
              headers: new Headers(PowerInfoHeaders),
            });
            const result = await response.json();
            return {
              data: result.data,
              page: result.page - 1,
              totalCount: result.totalCount,
            };
          }}
        />
      </BiddingMaterialTable>
    </>
  );
};

export default PowerInfoTable;
