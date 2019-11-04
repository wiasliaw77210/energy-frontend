import React from 'react';
import { EditUserIcon } from './EditUserIcon';
import { UserInfoItem } from './UserInfoItem';

const attributes = [
    "帳號",
    "密碼",
    "地址",
    "以太坊地址"
]

interface UProps {
    userInfos: object
}

export const UserInfoList: React.FC<UProps> = ({ userInfos }) => (
    <>
        <ul className="trasparent-list">
            <EditUserIcon />
            {attributes.map((k) => (
                <UserInfoItem name={k} value={userInfos[k]} />
            ))}
        </ul>
        <style>{`
            .trasparent-list {
                width: 30em;
                padding: 0px;
            }
        `}
        </style>
    </>
);