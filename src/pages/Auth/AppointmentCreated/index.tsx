import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { MiniButton } from '../../../components/MiniButton';

import * as S from './styles';

export const AppointmentCreated: React.FC = () => {
  const navigation = useNavigation();

  return (
    <S.Container>
      <S.ImageIcon source={require('../../../assets/check.png')} />
      <S.Title>Agendamento concluído</S.Title>
      <View style={{ height: 40 }} />
      {/* <S.SubTitle>
        Terça, dia 14 de março de 2020 às 12:00h com Diego Fernandes
      </S.SubTitle> */}
      <View style={{ height: '30%' }} />
      <MiniButton
        title="OK"
        pressFucntion={() => navigation.navigate('Dashboard' as never)}
      />
    </S.Container>
  );
};
