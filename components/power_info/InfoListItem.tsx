import React from "react";
import { PowerInfoData } from "../../typing/PowerInfoType";

interface Props {
    info: PowerInfoData;
};

export const InfoListItem: React.FC<Props> = ({ info }) => {
    return (
        <>
            <li className="tuple value">
                <span className="power-info-item">{info.date}</span>
                <span className="power-info-item">{info.time}</span>
                <span className="power-info-item">{info.usage}</span>
                <span className="power-info-item">{info.type}</span>
                <span className="power-info-item"><a className="power-info-item-link" href={info.url} target="_blank"> &lt; URL &gt; </a></span>
            </li>
            <style>{`
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

                  .value {
                    border-bottom-style: solid;
                    border-color: #E8E8E8;
                  }

                  .power-info-item {
                    width: 200px;
                    text-align: center;
                    font: Regular 20px/24px Roboto;
                  }

                  a.power-info-item-link:link,
                  a.power-info-item-link:visited {
                    color: #FFA000;
                    text-decoration: none;
                  }
            `}
            </style>
        </>
    );
};