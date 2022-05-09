import { useNavigation } from '@react-navigation/native';
import { AxiosError } from 'axios';
import { useCallback, useState } from 'react';
import { useDropdownMessage } from '../contexts/DropdownMessageContext';
import { MessageType } from '../global/constants/MessageType';
import { api } from '../services/api';

export type CreateAccountProps = {
  name: string;
  email: string;
  password: string;
};

export const useCreateAccount = () => {
  //@ts-ignore
  const { ref } = useDropdownMessage();
  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);

  const createAccount = useCallback(
    async ({ name, email, password }: CreateAccountProps) => {
      setLoading(true);

      try {
        await api.post('/users/', {
          name: name,
          email: email,
          password: password,
          passwordConfirmation: password,
        });

        ref.current.alertWithType(
          MessageType.SUCCESS,
          'Sucesso',
          'Conta criada com sucesso, faça login!!!',
        );

        navigation.navigate('RegistrationConcluded' as never);
      } catch (err: any) {
        if (err.response) {
          const error = err as AxiosError;
          const message = error.response?.data as any;

          ref.current.alertWithType(
            MessageType.ERROR,
            'Ops!!!',
            message.error || 'Erro inesperado',
          );
        }

        setLoading(false);
      }
    },
    [],
  );

  return { loading, createAccount };
};
