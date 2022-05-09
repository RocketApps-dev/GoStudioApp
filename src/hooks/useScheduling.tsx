import { api } from '../services/api';
import AsyncStorage from '@react-native-community/async-storage';
import { AxiosError } from 'axios';
import { useCallback, useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useDropdownMessage } from '../contexts/DropdownMessageContext';

import { MessageType } from '../global/constants/MessageType';
import { useNavigation } from '@react-navigation/native';

export const useScheduling = () => {
  const navigation = useNavigation();

  //@ts-ignore
  const { ref } = useDropdownMessage();
  const { signOut } = useAuth();

  const [loading, setLoading] = useState(true);
  const [availableTimes, setAvailableTimes] = useState<string[]>([]);
  const [creatingAppointment, setCreatingAppointment] = useState(false);

  const searchAvailableTimes = useCallback(async (currentDate: string) => {
    try {
      setLoading(true);
      const token = await AsyncStorage.getItem('@gostudio:token');

      if (!token) {
        ref.current.alertWithType(
          MessageType.ERROR,
          'Ops!!!',
          'Sua sessão expirou, faça login novamente!!!',
        );
      }

      const response = await api.get('/appointments/search-available-times', {
        headers: {
          Authorization: `Bearer ${token}`,
          date: currentDate,
        },
      });

      const availableTimes: string[] = response.data.availableTimes;

      if (availableTimes.length == 0) {
        ref.current.alertWithType(
          MessageType.WARN,
          'Ops!!!',
          'Não existe nenhum horario disponivel para a data selecionada, por favor selecione outro horario!!!',
        );
      }

      setAvailableTimes(availableTimes);
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

  const createAppointments = useCallback(
    async (appointmentDate: string, appointmentHour: string) => {
      if (!appointmentDate || appointmentDate == '') {
        ref.current.alertWithType(
          MessageType.WARN,
          'Ops!!!',
          'Você não selecionou uma data para o agendamento!',
        );

        return;
      }

      if (!appointmentHour || appointmentHour == '') {
        ref.current.alertWithType(
          MessageType.WARN,
          'Ops!!!',
          'Você não selecionou uma hora para o agendamento!',
        );

        return;
      }

      try {
        setCreatingAppointment(true);
        const token = await AsyncStorage.getItem('@gostudio:token');

        await api.post(
          '/appointments/',
          { appointmentDate, appointmentHour },
          { headers: { Authorization: `Bearer ${token}` } },
        );

        setCreatingAppointment(false);

        navigation.navigate(
          'AppointmentCreated' as never,
          {
            appointmentDate,
            appointmentHour,
          } as never,
        );
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

        setCreatingAppointment(false);
      }
    },
    [],
  );

  return {
    loading,
    availableTimes,
    searchAvailableTimes,
    creatingAppointment,
    createAppointments,
  };
};
