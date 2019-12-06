import React from 'react';

interface IProps {
  name: string;
  value: string;
}

export const UserInfoItem: React.FC<IProps> = ({ name, value }) => (
  <>
    <li
      className="user-item"
      style={
        name === '以太坊地址' || name === 'eth_address'
          ? { flexDirection: 'column' }
          : {}
      }
    >
      <span
        className="user-item-key"
        style={
          name === '以太坊地址' || name === 'eth_address'
            ? { minWidth: '130px' }
            : { minWidth: '60px' }
        }
      >
        {name}:
      </span>
      {name === '以太坊地址' || name === 'eth_address' ? (
        <a
          className="user-item-value"
          target="_blank"
          href={`https://etherscan.io/address/${value}`}
          style={{
            textDecoration: 'none',
            color: '#ffa000',
            cursor: 'pointer',
          }}
        >
          {value}
        </a>
      ) : (
        <span className="user-item-value">{value}</span>
      )}
    </li>
    <style>
      {`
            .user-item {
                padding: 22px;
                display: flex;
                list-style-type: none;
                justify-content: flex-start;
                align-items: center;
            }
            .user-item-key {
                padding-right: 10px;
                font-family: Roboto;
                font-size: 22px;
                color: #707070;
                align-self: start;
                font-weight: bold;
            }
            .user-item-value{
                padding-right: 10px;
                font-family: Roboto;
                font-size: 20px;
                color: #707070;
                word-break: break-all;
            }
        `}{' '}
    </style>
  </>
);
