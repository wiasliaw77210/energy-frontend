import React from 'react';
import { ConnectedAMI } from '../../typings/ConnectedAMI';

interface IProps {
  ami: ConnectedAMI;
}

export const AMIListItem: React.FC<IProps> = ({ ami }) => {
  return (
    <>
      <li className="tuple value">
        <span className="ami-item">{ami.num}</span>
        <span className="ami-item-id">{ami.id}</span>
        <span className="ami-item">{ami.type}</span>
      </li>
      <style>
        {`
                  .value {
                    border-bottom-style: solid;
                    border-color: #E8E8E8;
                  }
                  .ami-item {
                    width: 25%;
                    text-align: center;
                    font: 20px/24px Regular Roboto;
                  }
                  .ami-item-id {
                    width: 50%;
                    text-align: left;
                    font: 20px/24px Regular Roboto;
                  }
            `}
      </style>
    </>
  );
};
