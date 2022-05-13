import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { FloatingActionButton } from '../../../components/FloatingActionButton';
import { Header } from '../../../components/Header';
import { ItemList } from '../../../components/ItemList';
import { Modal } from '../../../components/Modal';
import { useAuth } from '../../../contexts/AuthContext';
import { useAppointmets } from '../../../hooks/useAppointments';
import { ShimmerFloatBox } from './components/ShimmerFloatBox';

import * as S from './styles';

export const Dashboard: React.FC = () => {
  const navigation = useNavigation();

  const [appointmentId, setAppointmentId] = useState('');

  const [modalVisible, setModalVisible] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalText, setModalText] = useState('');

  const { signOut } = useAuth();
  const { loading, myAppointments, getMyAppointments, cancelAppointment } =
    useAppointmets();

  useEffect(() => {
    getMyAppointments();
  }, []);

  function handleModal() {
    if (modalVisible) {
      return (
        <Modal
          title={modalTitle}
          message={modalText}
          visible={modalVisible}
          buttons={{
            buttonOk: {
              title: 'OK',
              function: () => {
                setModalVisible(false);
                cancelAppointment(appointmentId);
              },
            },
            buttonCancel: {
              title: 'Sair',
              function: () => setModalVisible(false),
            },
          }}
        />
      );
    }
  }

  return (
    <>
      <S.Container>
        <Header />
        <S.ContainerList>
          <S.ContainerTitle>
            <S.TitleDashboard>Meus Agendamentos</S.TitleDashboard>
          </S.ContainerTitle>
          <S.ContainerListItems>
            {!loading ? (
              <FlatList
                horizontal={false}
                style={{ width: '98%' }}
                data={myAppointments}
                renderItem={({ item }) => (
                  <ItemList
                    key={item.id}
                    appointmentHour={item.appointmentTime}
                    appointmentDay={item.appointmentDate}
                    status={item.appointmentStatus}
                    onLongPress={() => {
                      setModalTitle('Cancelar Agendamento!');
                      setModalText(
                        `Deseja cancelar o agendamento do dia ${item.appointmentDate} as ${item.appointmentTime}`,
                      );
                      setAppointmentId(item.id);
                      setModalVisible(true);
                    }}
                  />
                )}
              />
            ) : (
              <ShimmerFloatBox />
            )}
          </S.ContainerListItems>
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

      {handleModal()}
    </>
  );
};
