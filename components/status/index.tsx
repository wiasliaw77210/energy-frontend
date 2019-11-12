import React, { useState } from 'react';
import DisplayData from './displayData';
import TableData from './tableData';

import { fakedata, initdata } from './data';

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

const StatusIndex: React.FC = () => {
  const [display, setDisplay] = useState<IData>(initdata);

  const handleSetDisplay = (data: IData) => {
    setDisplay(data);
    return;
  };

  return (
    <div className="container">
      <DisplayData data={display} />
      <TableData data={fakedata} handleSetData={handleSetDisplay} />
      <style jsx>{`
        .container {
          width: 1239px;
          display: flex;
          margin: auto;
          flex-direction: column;
        }
      `}</style>
    </div>
  );
};

export default StatusIndex;
