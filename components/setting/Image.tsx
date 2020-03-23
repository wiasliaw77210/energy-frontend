import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Container = styled.div`
  width: 200px;
  height: 200px;
  margin: 37px;
  position: relative;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: #fff;
`;

const Text = styled.span`
  color: #717171;
  font-size: 20px;
  text-align: center;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #f1f2f1;
  opacity: 0.6;
`;

export default (() => {
  const { t } = useTranslation();
  return (
    <Container>
      <Image
        src={
          'https://cdn2.iconfinder.com/data/icons/business-management-isometric-awesome-design/512/Office_Building-512.png'
        }
      />
      <Text>{t('setting.editIcon.hint')}</Text>
    </Container>
  );
}) as React.FC;
