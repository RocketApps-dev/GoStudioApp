import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { AppointmentsStatus } from '../../dtos/AppointmentsStatus';

import * as S from './styles';

type Props = {
  studioName?: string;
  studioImage?: string;
  appointmentDay: string;
  appointmentHour: string;
  status: AppointmentsStatus;
};

export const ItemList: React.FC<Props> = ({
  studioName = 'DuGuetto',
  appointmentDay,
  appointmentHour,
  status,
}) => {
  const [y, m, d] = appointmentDay.split('-');
  return (
    <S.BoxItem>
      <S.ImageStudio source={require('../../assets/images/image-circle.png')} />
      <S.ContainerTexts>
        <View style={{ flexDirection: 'row' }}>
          <S.TitleItem>{studioName}</S.TitleItem>
        </View>
        <View style={{ marginVertical: 5 }} />
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Icon name="calendar" size={20} color="#ff9000" />
          <S.TitleRow>
            Dia {d} Mês {m} Ano {y}
          </S.TitleRow>
        </View>
        <View
          style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
          <Icon name="clock" size={20} color="#ff9000" />
          <S.TitleRow>{appointmentHour}</S.TitleRow>
        </View>
      </S.ContainerTexts>
      <S.StatusTitleBox>
        <S.TitleItem style={{ color: 'green' }}>
          {
            //@ts-ignore
            AppointmentsStatus[status]
          }
        </S.TitleItem>
      </S.StatusTitleBox>
    </S.BoxItem>
  );
};
