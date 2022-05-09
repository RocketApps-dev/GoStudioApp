import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { AppColors } from '../global/constants/AppColors';
import { Splash } from '../pages/Splash';
import { AuthRoutes } from './auth.routes';
import { PublicRoutes } from './public.routes';

export const Routes: React.FC = () => {
  const { loading, user } = useAuth();

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: AppColors.primary,
        }}>
        <ActivityIndicator size="large" color={AppColors.terciary} />
      </View>
    );
  }

  return user ? <AuthRoutes /> : <PublicRoutes />;
};
