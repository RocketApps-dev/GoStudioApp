import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { MiniButton } from '../../../components/MiniButton';

import * as S from './styles';

export const RegistrationConcluded: React.FC = () => {
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.LogoImage source={require('../../../assets/check.png')} />
      <S.TitlePage>Cadastramento concluído</S.TitlePage>
      <S.SubTitle>Agora é só fazer seu login.</S.SubTitle>
      <View style={{ marginVertical: 50 }} />
      <MiniButton
        title="Ok"
        pressFucntion={() => navigation.navigate('SignIn' as never)}
      />
    </S.Container>
  );
};
