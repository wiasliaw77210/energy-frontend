import React from 'react';

interface IProps {
  name: string;
  value: string;
}

export const UserInfoItem: React.FC<IProps> = ({ name, value }) => (
  <>
    <li className="user-item">
      <span className="user-item-key">{name}:</span>
      <span className="user-item-value">{value}</span>
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
                font-weight: bold;
            }
            .user-item-value{
                padding-right: 10px;
                font-family: Roboto;
                font-size: 20px;
                color: #707070;
                font-weight: bold;
            }
        `}{' '}
    </style>
  </>
);
