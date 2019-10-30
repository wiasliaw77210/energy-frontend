import React from 'react';

interface UProps {
    name: string,
    value: string
}

export const UserInfoItem: React.FC<UProps> = ({ name, value }) => (
    <>
        <li className='user-item'>
            <div className='user-item-key'>{name}:</div>
            <div className='user-item-value'>{value}</div>
        </li>
        <style>{`
            .user-item {
                padding: 20px;
                display: flex;
                list-style-type: none;
                justify-content: flex-start;
            }
            .user-item-key {
                padding-right: 10px;
                font-family: Roboto;
                font-size: 22px;
                color: #707070;
                font-weight: bold;
            }
            .user-item-value{

            }
        `} </style>
    </>
);
