import React from 'react';
import { useForm } from 'react-hook-form';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Icon from 'react-native-vector-icons/Ionicons';

import {
  CreateAccountProps,
  useCreateAccount,
} from '../../../hooks/useCreateAccount';

import { MessageType } from '../../../global/constants/MessageType';
import { useDropdownMessage } from '../../../contexts/DropdownMessageContext';

import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';

import * as S from './styles';

const regexEmail =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

export const SignUp: React.FC = () => {
  //@ts-ignore
  const { ref } = useDropdownMessage();
  const { control, handleSubmit } = useForm<CreateAccountProps>();
  const { loading, createAccount } = useCreateAccount();

  const navigation = useNavigation();

  if (loading) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  const onSubmit = async ({ name, email, password }: CreateAccountProps) => {
    console.log(name, email, password);

    if (!name || name.trim().length < 6 || name.trim().length > 255) {
      ref.current.alertWithType(
        MessageType.ERROR,
        'Ops',
        'Nome é invalido, por favor tente novamente',
      );

      return;
    }

    if (!email || !regexEmail.test(email)) {
      ref.current.alertWithType(
        MessageType.ERROR,
        'Ops',
        'Email invalido, tente novamente',
      );

      return;
    }

    if (
      !password ||
      password.trim().length < 6 ||
      password.trim().length > 255
    ) {
      ref.current.alertWithType(
        MessageType.ERROR,
        'Ops',
        'Senha é invalida, por favor tente novamente',
      );

      return;
    }

    createAccount({ name, email, password });
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
              <S.TitlePage>Crie sua conta</S.TitlePage>
              <View style={{ marginTop: 20 }} />
              <Input
                icon="user"
                name="name"
                placeholder="Nome"
                control={control}
                error={null}
              />
              <Input
                icon="at-sign"
                name="email"
                placeholder="E-mail"
                control={control}
                error={null}
              />
              <Input
                icon="lock"
                name="password"
                placeholder="Senha"
                control={control}
                error={null}
                isPassword
              />

              <Button title="Entrar" pressFunction={handleSubmit(onSubmit)} />
            </S.ContainerButtons>
          </S.Container>
        </ScrollView>
      </KeyboardAvoidingView>
      <S.ButtonCreateAccount>
        <Icon name="ios-return-down-back-outline" size={20} color="#ff9000" />
        <S.TextButtonCreateAccount
          onPress={() => navigation.navigate('SignIn' as never)}>
          Voltar para o login
        </S.TextButtonCreateAccount>
      </S.ButtonCreateAccount>
    </>
  );
};
