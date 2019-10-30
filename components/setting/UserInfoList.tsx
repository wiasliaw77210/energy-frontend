import React from 'react';
import { EditUserIcon } from './EditUserIcon';
import { UserInfoItem } from './UserInfoItem';

const attributes = [
    "帳號",
    "密碼",
    "地址",
    "以太坊地址"
]

export const UserInfoList: React.FC = () => (
    <>
        <ul className="trasparent-list">
            <EditUserIcon/>
            {attributes.map((k) => (
                <UserInfoItem name={k} value='value'/>
            ))}
        </ul>
        <style>{`
            .trasparent-list {
                width: 20em;
                padding: 0px;
            }
        `}
        </style>
    </>
);