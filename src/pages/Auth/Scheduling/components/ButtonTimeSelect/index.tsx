import React from 'react';

import * as S from './styles';

type Props = {
  timeText: string;
  isSelected?: boolean;
  pressFunction?: () => void;
};

export const ButtonTimeSelect: React.FC<Props> = ({
  timeText,
  isSelected,
  pressFunction,
}) => {
  return (
    <>
      <S.BoxButton onPress={pressFunction}>
        <S.Box isSelected={isSelected}>
          <S.TextButton>{timeText}</S.TextButton>
        </S.Box>
      </S.BoxButton>
    </>
  );
};
