import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { FlatList, ScrollView } from 'react-native';
import { FloatingActionButton } from '../../../components/FloatingActionButton';
import { Header } from '../../../components/Header';
import { ItemList } from '../../../components/ItemList';
import { useAuth } from '../../../contexts/AuthContext';
import { useAppointmets } from '../../../hooks/useAppointments';
import { ShimmerFloatBox } from './components/ShimmerFloatBox';

import * as S from './styles';

export const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  const { loading, myAppointments, getMyAppointments } = useAppointmets();

  const { signOut } = useAuth();

  useEffect(() => {
    getMyAppointments();
  }, []);

  return (
    <>
      <S.Container>
        <Header />
        <S.ContainerList>
          <S.ContainerTitle>
            <S.TitleDashboard>Meus Agendamentos</S.TitleDashboard>
          </S.ContainerTitle>
          {!loading ? (
            <FlatList
              horizontal={false}
              style={{ width: '98%', paddingBottom: 40 }}
              data={myAppointments}
              renderItem={({ item }) => (
                <ItemList
                  key={item.id}
                  appointmentHour={item.appointmentTime}
                  appointmentDay={item.appointmentDate}
                  status={item.appointmentStatus}
                />
              )}
            />
          ) : (
            <ShimmerFloatBox />
          )}
        </S.ContainerList>
      </S.Container>
      <FloatingActionButton
        expandButtons={[
          {
            entIconName: 'plus',
            pressFunction: () => navigation.navigate('Scheduling' as never),
          },
          { entIconName: 'mail', pressFunction: () => {} },
          { entIconName: 'log-out', pressFunction: () => signOut() },
        ]}
      />
    </>
  );
};
