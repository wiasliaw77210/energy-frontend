import React from 'react';
import styled from 'styled-components';

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
  data: IData;
}

const Circle = styled.div<{ isSelect: boolean }>`
  width: 101px;
  height: 101px;
  border: 10px solid ${props => (props.isSelect ? '#ffa200' : '#ebebeb')};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #fff;
  margin-left: 42px;
  z-index: 10;
`;

const DisplayData: React.FC<IProps> = (props: IProps) => {
  return (
    <div className="container">
      <div className="left">
        <img src="/static/status/box_grey.png" />
        <span>
          {props.data.achievement !== null ? props.data.achievement : '--%'}
        </span>
      </div>
      <div className="right">
        <div className="circlelist">
          <Circle isSelect={props.data.status === 1}>Bidding</Circle>
          <Circle isSelect={props.data.status === 2}>Bidden</Circle>
          <Circle
            isSelect={props.data.status === 3}
            style={
              props.data.status === 0
                ? { borderColor: '#757575' }
                : { borderColor: '#ebebeb' }
            }
          >
            Win
            <br />
            or
            <br />
            Fail
          </Circle>
          <Circle isSelect={props.data.status === 4}>Trading</Circle>
          <Circle isSelect={props.data.status === 5}>Settlement</Circle>
          <Circle isSelect={props.data.status === 6}>Complete</Circle>
        </div>
        <div className="datalist">
          <div className="col">
            <span style={{ width: '50%', marginLeft: '30px' }}>
              Tx ID：{props.data.id}
            </span>
            <span style={{ width: '50%', marginLeft: '30px' }}>
              Upload Time：{!!props.data.upload ? props.data.upload : '--'}
            </span>
          </div>
          <div className="col">
            <span style={{ width: '25%', marginLeft: '30px' }}>
              Counterpart：
              {!!props.data.counterpart ? props.data.counterpart.name : '--'}
            </span>
            <span style={{ width: '75%', marginLeft: '30px' }}>
              Address：
              {!!props.data.counterpart ? props.data.counterpart.address : '--'}
            </span>
          </div>
          <div className="col">
            <span style={{ width: '25%', marginLeft: '30px' }}>
              Bid：{props.data.bid_value}
            </span>
            <span style={{ width: '25%', marginLeft: '30px' }}>
              Win：{!!props.data.win ? props.data.win.value : '0'}
            </span>
            <span style={{ width: '25%', marginLeft: '30px' }}>
              Total Price：{!!props.data.win ? props.data.win.total_price : '0'}
            </span>
            <span style={{ width: '25%', marginLeft: '30px' }}>
              Settlement：
              {!!props.data.settlement ? props.data.settlement : '0'}
            </span>
          </div>
        </div>
      </div>
      <style jsx>{`
        .container {
          width: 100%;
        }
        .left {
          width: 25%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
          float: left;
          color: #707070;
          font-family: Roboto;
          font-size: 30px;
        }
        .left > img {
          width: 120px;
          height: 120px;
          margin: 20px;
        }
        .left > span {
          font-family: Roboto;
          font-size: 56px;
          color: #707070;
        }
        .right {
          width: 75%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          float: right;
        }
        .circlelist {
          width: 100%;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: row;
          position: relative;
          font-family: Roboto;
          font-size: 16px;
          color: #707070;
          padding: 28px 0 28px 0;
        }
        .circlelist::after {
          content: '';
          width: 80%;
          height: 20px;
          background-color: #39625e;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 5;
        }
        .circle {
          width: 101px;
          height: 101px;
          border: 10px solid #ebebeb;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          background-color: #fff;
          margin-left: 42px;
          z-index: 10;
        }
        .datalist {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .col {
          width: 100%;
          font-family: Roboto;
          font-size: 20px;
          color: #707070;
          margin: 13px 0 0 0;
        }
      `}</style>
    </div>
  );
};

export default DisplayData;
