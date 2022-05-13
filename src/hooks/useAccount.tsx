import AsyncStorage from '@react-native-community/async-storage';
import { AxiosError } from 'axios';
import { useState, useCallback } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { useDropdownMessage } from '../contexts/DropdownMessageContext';
import { ImageSourceDTO } from '../dtos/ImageSourceDTO';
import { MessageType } from '../global/constants/MessageType';
import { api } from '../services/api';

export type UpdateUserProps = {
  email: string;
  username: string;
  oldPassword: string;
  newPassword?: string;
  confirmPassword: string;
};

export const useAccount = () => {
  //@ts-ignore
  const { ref } = useDropdownMessage();
  const { signOut } = useAuth();

  const [loading, setLoading] = useState(false);

  const updateUserData = useCallback(
    async ({ email, username, oldPassword, newPassword }: UpdateUserProps) => {
      const token = await AsyncStorage.getItem('@gostudio:token');
      try {
        setLoading(true);

        await api.put(
          '/users/',
          {
            email,
            username,
            oldPassword,
            newPassword,
          },
          { headers: { Authorization: `Bearer ${token}` } },
        );

        ref.current.alertWithType(
          MessageType.SUCCESS,
          'Sucesso',
          'Seus dados foram atualizados com sucesso, faça login novamente!!!',
        );

        signOut();

        setLoading(false);
      } catch (err: any) {
        if (err.responde) {
          const error = err as AxiosError;
          const status = error.response?.status;
          if (status === 401 || status === 3) {
            ref.current.alertWithType(
              MessageType.ERROR,
              'Ops!!!',
              'Sua sessão expirou, faça login novamente!!',
            );

            signOut();
            return;
          }
        }

        ref.current.alertWithType(
          MessageType.ERROR,
          'Ops!!!',
          `Erro ao atualizar dados do usuario: ${
            err.response.data.error || err.message
          }`,
        );

        setLoading(false);
      }
    },
    [],
  );

  const updateUserAvatar = useCallback(async (image: ImageSourceDTO) => {
    setLoading(true);
    //@ts-ignore
    const { ref } = useDropdownMessage();
    try {
      const token = await AsyncStorage.getItem('@gostudio:token');

      const { name, type, uri } = image;

      const dataFile = new FormData();
      dataFile.append('file', { uri, name, type });

      await api.put('/users/avatar/', dataFile, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      setLoading(false);
    } catch (err: any) {
      console.log(err);
      if (err.responde) {
        const error = err as AxiosError;
        const status = error.response?.status;
        if (status === 401 || status === 3) {
          ref.current.alertWithType(
            MessageType.ERROR,
            'Ops!!!',
            'Sua sessão expirou, faça login novamente!!',
          );

          signOut();
          return;
        }
      }

      ref.current.alertWithType(
        MessageType.ERROR,
        'Ops!!!',
        `Erro ao atualizar foto do usuario: ${
          err.response.data.error || err.message
        }`,
      );

      setLoading(false);
    }
  }, []);

  return { loading, updateUserData, updateUserAvatar };
};
