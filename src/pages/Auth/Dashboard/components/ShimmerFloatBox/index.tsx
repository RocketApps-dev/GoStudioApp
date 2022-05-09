import React from 'react';
import { View } from 'react-native';

import * as S from './styles';

export const ShimmerFloatBox: React.FC = () => {
  return (
    <S.ContainerShimmer>
      <S.ImageShimmer
        delay={1000}
        shimmerColors={['#28262E', '#28262E', '#666360']}
        style={{
          borderRadius: 50,
          elevation: 10,
        }}
      />
      <S.ContainerTexts>
        <S.ShimmerTexts
          delay={1000}
          shimmerColors={['#28262E', '#28262E', '#666360']}
        />
        <View style={{ marginVertical: 5 }} />
        <S.ShimmerTexts
          delay={1000}
          style={{ width: 120 }}
          shimmerColors={['#28262E', '#28262E', '#666360']}
        />
        <View style={{ marginVertical: 5 }} />
        <S.ShimmerTexts
          delay={1000}
          style={{ width: 120 }}
          shimmerColors={['#28262E', '#28262E', '#666360']}
        />
      </S.ContainerTexts>
    </S.ContainerShimmer>
  );
};
