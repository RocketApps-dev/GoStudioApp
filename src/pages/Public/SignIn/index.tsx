import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';

import { useForm } from 'react-hook-form';
import Icon from 'react-native-vector-icons/Entypo';

import { Button } from '../../../components/Button';
import { Input } from '../../../components/Input';

import * as S from './style';
import { useNavigation } from '@react-navigation/native';
import { MessageType } from '../../../global/constants/MessageType';
import { useDropdownMessage } from '../../../contexts/DropdownMessageContext';
import { useAuth } from '../../../contexts/AuthContext';

type SignInCredential = {
  email: string;
  password: string;
};

export const SignIn: React.FC = () => {
  const navigation = useNavigation();

  //@ts-ignore
  const { ref } = useDropdownMessage();
  const { signIn } = useAuth();

  const { control, handleSubmit } = useForm<SignInCredential>();

  const onSubmit = ({ email, password }: SignInCredential) => {
    if (!email) {
      ref.current.alertWithType(
        MessageType.ERROR,
        'Ops',
        'Email não pode estar vazio',
      );

      return;
    }

    if (!password) {
      ref.current.alertWithType(
        MessageType.ERROR,
        'Ops',
        'Senha não pode estar vazio',
      );

      return;
    }

    signIn({ email, password });
  };

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}>
          <S.Container>
            <S.ImageLogo source={require('../../../assets/logo.png')} />
            <S.ContainerButtons>
              <View style={{ marginTop: 80 }} />
              <S.TitlePage>Faça seu login</S.TitlePage>
              <View style={{ marginTop: 20 }} />
              <Input
                icon="at-sign"
                name="email"
                placeholder="E-mail"
                control={control}
                error={null}
                autoComplete="email"
              />
              <Input
                icon="lock"
                name="password"
                placeholder="Senha"
                control={control}
                error={null}
                isPassword
                autoComplete="password"
              />

              <Button title="Entrar" pressFunction={handleSubmit(onSubmit)} />
              <TouchableOpacity>
                <S.TextBotton>Esqueci minha senha!</S.TextBotton>
              </TouchableOpacity>
            </S.ContainerButtons>
          </S.Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <S.ButtonCreateAccount>
        <Icon name="login" size={20} color="#ff9000" />
        <S.TextButtonCreateAccount
          onPress={() => navigation.navigate('SignUp' as never)}>
          Criar uma conta
        </S.TextButtonCreateAccount>
      </S.ButtonCreateAccount>
    </>
  );
};
