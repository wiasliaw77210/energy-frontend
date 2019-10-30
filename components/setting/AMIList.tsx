import React from "react";

import { ConnectedAMI } from "../../typing/ConnectedAMI";
import { AMIListItem } from "./AMIListItem";

const columConfig = [
    { name: "num", value: "電表編號" , class: "ami-item"},
    { name: "id", value: "電表名稱", class: "ami-item-id"},
    { name: "type", value: "種類", class: "ami-item"}
];

interface Props {
    amis: ConnectedAMI[];
};

export const AMIList: React.FC<Props> = ({ amis }) => (
    <>
        <ul className="list">
            <li className="sub-title" key="sub-title">
                已連結電表
            </li>
            <li className="tuple" key="attribute">
                {columConfig.map((v, idx) => (
                    <span className={v.class} key={v.name}>{v.value}</span>
                ))}
            </li>
            {amis.map((ami, idx) => (
                <AMIListItem ami={ami} key={idx} />
            ))}
        </ul>
        <style>{`
            .list {
                width: 40em;
                padding: 0px;
                background-color: white;
                align-self: center;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
            }
            .sub-title {
                padding-top: 30px;
                margin-left: 30px;
                font-size: 24px;
                list-style-type: none;
                font-weight: bold;
                font-stretch: normal;
                font-style: normal;
                letter-spacing: normal;
                text-align: left;
                color: #707070;
            }
            .tuple {
                height: 70px;
                display: flex;
                flex-flow: row;
                align-items: center;
                justify-content: space-around;
                list-style-type: none;
                color: #707070;
                opacity: 1;
                letter-spacing: 0;
            }
        `}
        </style>
    </>
);