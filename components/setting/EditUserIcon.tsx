import React from 'react';

export const EditUserIcon: React.FC = () => (
  <>
    <ul>
      <li className='tuple'>
        <img className='icon' src="https://cdn2.iconfinder.com/data/icons/business-management-isometric-awesome-design/512/Office_Building-512.png" />
      </li>
      <li className='tuple'>
        <button>更改頭像</button>
      </li>
      <li className='tuple'>
        一期建物 BEMS
      </li>
    </ul>
    <style>{`
    .icon {
        width: 200px;
        height: 200px;
        background-color: grey;
        border-radius: 50%;
        margin: 28px;
    }
  `}
    </style>
  </>
);