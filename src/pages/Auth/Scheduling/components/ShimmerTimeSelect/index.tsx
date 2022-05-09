import React from 'react';
import { FlatList, ScrollView, View } from 'react-native';

import * as S from './styles';

export const ShimmerTimeSelect: React.FC = () => {
  const itemsRow = 4;

  return (
    <View style={{ flexDirection: 'row' }}>
      <S.ShimmerTimeBox shimmerColors={['#28262E', '#28262E', '#666360']} />
      <S.ShimmerTimeBox shimmerColors={['#28262E', '#28262E', '#666360']} />
      <S.ShimmerTimeBox shimmerColors={['#28262E', '#28262E', '#666360']} />
      <S.ShimmerTimeBox shimmerColors={['#28262E', '#28262E', '#666360']} />
    </View>
  );
};
