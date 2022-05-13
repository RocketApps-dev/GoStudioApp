import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { useAuth, UserProps } from '../../contexts/AuthContext';

import * as S from './styles';

export const Header: React.FC = () => {
  const navigation = useNavigation();

  const { user: userData } = useAuth();

  const user = userData as UserProps;

  return (
    <S.BoxHeader>
      <S.TitleHeader>Bem vindo, </S.TitleHeader>
      <S.UserName> {user ? user.name : 'In development'} </S.UserName>
      <S.ContainerUserImage
        onPress={() => navigation.navigate('AccountData' as never)}>
        {!user.avatar ? (
          <S.ImageShimmer
            delay={1000}
            shimmerColors={['#28262E', '#28262E', '#666360']}
            style={{
              borderRadius: 10,
              elevation: 1,
            }}
          />
        ) : (
          <S.ImageUser source={{ uri: user.avatar }} />
        )}
      </S.ContainerUserImage>
    </S.BoxHeader>
  );
};
