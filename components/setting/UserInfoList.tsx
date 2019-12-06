import React from 'react';
import { EditUserIcon } from './EditUserIcon';
import { UserInfoItem } from './UserInfoItem';
import { useTranslation } from 'react-i18next';

interface IProps {
  userInfos: object;
}

export const UserInfoList: React.FC<IProps> = ({ userInfos }) => {
  const { t } = useTranslation();
  const attributes = [
    t('setting.userAttributes.account'),
    t('setting.userAttributes.password'),
    t('setting.userAttributes.address'),
    t('setting.userAttributes.ethAddress'),
  ];

  return (
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
};
