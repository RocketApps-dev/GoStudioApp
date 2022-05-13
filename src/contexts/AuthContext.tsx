import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

import { useDropdownMessage } from './DropdownMessageContext';

import { Buffer } from 'buffer';

import { api } from '../services/api';
import { AxiosError } from 'axios';
import { MessageType } from '../global/constants/MessageType';

export type UserAuthProps = {
  name: string;
  email: string;
};

interface AuthState {
  token: string;
  user: object;
}

export interface SignInCredentials {
  email: string;
  password: string;
}

export type UserProps = {
  id: string;
  name: string;
  email: string;
  deviceToken: string;
  accountAmbient: string;
  accountDocumentStatus: string;
  roles: string[];
  avatar?: string;
};

interface AuthContextProps {
  user: object;
  loading: boolean;
  signIn(credentials: SignInCredentials): Promise<void>;
  signOut(): void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
  //@ts-ignore
  const { ref } = useDropdownMessage();

  const [data, setData] = useState<AuthState>({} as AuthState);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData(): Promise<void> {
      const [token, user] = await AsyncStorage.multiGet([
        '@gostudio:token',
        '@gostudio:user',
      ]);

      if (token[1] && user[1]) {
        setData({ token: token[1], user: JSON.parse(user[1]) });
      }

      setLoading(false);
    }

    loadStorageData();
  }, []);

  const signIn = async ({
    email,
    password,
  }: SignInCredentials): Promise<void> => {
    try {
      setLoading(true);
      const credentials = Buffer.from(`${email}:${password}`).toString(
        'base64',
      );

      const response = await api.post('/users/singin', null, {
        headers: {
          Authorization: `Basic ${credentials}`,
        },
      });

      const { token, user } = response.data;

      await AsyncStorage.multiSet([
        ['@gostudio:token', token],
        ['@gostudio:user', JSON.stringify(user)],
      ]);

      setData({ token, user });
      setLoading(false);

      ref.current.alertWithType(
        MessageType.INFO,
        'Sucesso!',
        'Usuário logado com sucesso!',
      );
    } catch (err: any) {
      if (err.response) {
        const error = err as AxiosError;
        const message = error.response?.data as any;
        console.log(message);

        ref.current.alertWithType(
          MessageType.ERROR,
          'Ops!!!',
          message.error || 'Erro inesperado',
        );
      }

      setLoading(false);
    }
  };

  const signOut = useCallback(async () => {
    setLoading(true);
    await AsyncStorage.multiRemove(['@gostudio:token', '@gostudio:user']);

    setData({} as AuthState);
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within an AuthProvider');

  return context;
};
