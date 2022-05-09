import React from 'react';

import * as S from './style';

export const Splash: React.FC = () => {
  return (
    <S.Container>
      <S.LogoImage source={require('../../assets/logo.png')} />
    </S.Container>
  );
};
