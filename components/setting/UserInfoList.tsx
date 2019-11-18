import React from 'react';
import { EditUserIcon } from './EditUserIcon';
import { UserInfoItem } from './UserInfoItem';

const attributes = ['account', 'password', 'address', 'eth_address'];

interface IProps {
  userInfos: object;
}

export const UserInfoList: React.FC<IProps> = ({ userInfos }) => (
  <>
    <div className="trasparent-list">
      <EditUserIcon />
      <ul>
        {attributes.map((k, index) => (
          <UserInfoItem name={k} value={userInfos[k]} key={index} />
        ))}
      </ul>
    </div>
    <style>
      {`
            .trasparent-list {
                width: 30%;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }
        `}
    </style>
  </>
);
