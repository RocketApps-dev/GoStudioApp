import React from 'react';

import * as S from './styles';

type Props = {
  title: string;
  pressFucntion: () => void;
};

export const MiniButton: React.FC<Props> = ({ title, pressFucntion }) => {
  return (
    <S.Box onPress={pressFucntion}>
      <S.TitleButton>{title}</S.TitleButton>
    </S.Box>
  );
};
