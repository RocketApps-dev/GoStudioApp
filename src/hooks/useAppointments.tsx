import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';
import { AxiosError } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useDropdownMessage } from '../contexts/DropdownMessageContext';
import { AppointmentsStatus } from '../dtos/AppointmentsStatus';
import { MessageType } from '../global/constants/MessageType';
import { api } from '../services/api';

export type AppointmentDTO = {
  id: string;
  userId: string;
  appointmentDate: string;
  appointmentStatus: AppointmentsStatus;
  appointmentTime: string;
};

export const useAppointmets = () => {
  const navigation = useNavigation();

  //@ts-ignore
  const { ref } = useDropdownMessage();
  const { signOut } = useAuth();

  const [loading, setLoading] = useState(true);
  const [myAppointments, setMyAppointments] = useState<AppointmentDTO[]>([]);

  const getMyAppointments = useCallback(async () => {
    const token = await AsyncStorage.getItem('@gostudio:token');

    try {
      setLoading(true);
      const token = await AsyncStorage.getItem('@gostudio:token');

      const response = await api.get('/appointments/', {
        headers: { Authorization: `Bearer ${token}` },
      });

      const myAppointmentsList: AppointmentDTO[] = response.data.appointments;

      setMyAppointments(myAppointmentsList);
      setLoading(false);
    } catch (err: any) {
      if (err.response) {
        const error = err as AxiosError;
        const message = error.response?.data as any;

        if (error.response?.status == 403 || error.response?.status == 401) {
          ref.current.alertWithType(
            MessageType.ERROR,
            'Ops!!!',
            'Sua sessão expirou, faça login novamente!!',
          );

          signOut();
          return;
        }

        ref.current.alertWithType(
          MessageType.ERROR,
          'Ops!!!',
          message.error || 'Erro inesperado',
        );
      }

      setLoading(false);
    }
  }, []);

  const cancelAppointment = useCallback(async (appointmentId: string) => {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem('@gostudio:token');

      await api.delete('/appointments/cancel', {
        headers: { Authorization: `Bearer ${token}` },
        params: { id: appointmentId },
      });

      ref.current.alertWithType(
        MessageType.SUCCESS,
        'Sucesso!',
        'O agendamento foi cancelado com sucesso!',
      );

      getMyAppointments();
      setLoading(false);
    } catch (err: any) {
      if (err.response) {
        const error = err as AxiosError;
        const message = error.response?.data as any;

        if (error.response?.status == 403 || error.response?.status == 401) {
          ref.current.alertWithType(
            MessageType.ERROR,
            'Ops!!!',
            'Sua sessão expirou, faça login novamente!!',
          );

          signOut();
          return;
        }

        ref.current.alertWithType(
          MessageType.ERROR,
          'Ops!!!',
          message.error || 'Erro inesperado',
        );
      }

      setLoading(false);
    }
  }, []);

  return { loading, myAppointments, getMyAppointments, cancelAppointment };
};
