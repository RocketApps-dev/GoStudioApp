import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';

import { AppColors } from '../../global/constants/AppColors';

export const LoadingView: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: AppColors.primary,
      }}>
      <Text
        style={{ fontSize: 18, marginBottom: 10, color: AppColors.terciary }}>
        Carregando...
      </Text>
      <ActivityIndicator size="large" color={AppColors.terciary} />
    </View>
  );
};
