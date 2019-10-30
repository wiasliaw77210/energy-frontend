import React from 'react';
import { EditUserIcon } from './EditUserIcon';

export const UserInfoList: React.FC = () => (
    <>
        <ul className="trasparent-list">
            <EditUserIcon/>
            <li className='user-tuple'>帳號</li>
            <li className='user-tuple'>密碼</li>
            <li className='user-tuple'>地址</li>
            <li className='user-tuple'>以太坊地址</li>
        </ul>
        <style>{`
            .transparent-list {
                width: 400px;
                padding: 0px;
            }
            .user-tuple {
                display: flex;
                list-style-type: none;
                justify-content: flex-start;
            }
            .edit-icon {
                display: flex;
                list-style-type: none;
                align-items: left;
            }
        `}
        </style>
    </>
);