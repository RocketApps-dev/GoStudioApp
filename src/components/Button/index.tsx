import React from 'react';

import * as S from './styles';

type Props = {
  title: string;
  pressFunction: () => void;
};

export const Button: React.FC<Props> = ({ title, pressFunction }) => {
  return (
    <S.Box onPress={pressFunction}>
      <S.TextButton>{title}</S.TextButton>
    </S.Box>
  );
};
