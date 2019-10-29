import React from "react";

import { PowerInfoData } from "../../typing/PowerInfoType";
import { InfoListItem } from "./InfoListItem";

const columConfig = [
    { name: "date", value: "日期" },
    { name: "time", value: "紀錄時間" },
    { name: "volume", value: "度數(kWh)" },
    { name: "type", value: "用產電種類" },
    { name: "url", value: "證據" }
];

interface Props {
    infos: PowerInfoData[];
};

export const PowerInfoList: React.FC<Props> = ({ infos }) => (
    <>
        <ul className="list">
            <li className="tuple" key="attribute">
                {columConfig.map((v, idx) => (
                    <span className="list-attr" key={v.name}>{v.value}</span>
                ))}
            </li>
            {infos.map((info, idx) => (
                <InfoListItem info={info} key={idx} />
            ))}
        </ul>
        <style jsx global>{`
            .list {
                width: 800px;
                background-color: white;
                align-self: center;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
              }
        `}
        </style>
    </>
);