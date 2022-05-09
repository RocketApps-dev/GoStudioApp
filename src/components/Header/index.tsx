import React from 'react';
import { TouchableOpacity } from 'react-native';
import { useAuth, UserProps } from '../../contexts/AuthContext';

import * as S from './styles';

export const Header: React.FC = () => {
  const { user } = useAuth();

  const userdata = user as UserProps;

  return (
    <S.BoxHeader>
      <S.TitleHeader>Bem vindo, </S.TitleHeader>
      <S.UserName> {user ? userdata.name : 'In development'} </S.UserName>
      <S.ContainerUserImage>
        <S.ImageShimmer
          delay={1000}
          shimmerColors={['#28262E', '#28262E', '#666360']}
          style={{
            borderRadius: 10,
            elevation: 1,
          }}
        />
        {/* <S.ImageUser source={require('../../assets/images/user-photo.png')} /> */}
      </S.ContainerUserImage>
      {/* <S.ImageUser
        source={
          user
            ? { uri: userdata.name }
            : require('../../assets/images/user-photo.png')
        }
      /> */}
    </S.BoxHeader>
  );
};
