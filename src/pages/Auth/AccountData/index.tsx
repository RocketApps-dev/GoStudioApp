import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useForm } from 'react-hook-form';

import { Input } from '../../../components/Input';
import { Button } from '../../../components/Button';
import { useCamera } from '../../../hooks/useCamera';
import { LoadingView } from '../../../components/LoadingView';
import { MessageType } from '../../../global/constants/MessageType';
import { ImageSourceDTO } from '../../../dtos/ImageSourceDTO';
import { useAuth, UserProps } from '../../../contexts/AuthContext';
import { useDropdownMessage } from '../../../contexts/DropdownMessageContext';
import { UpdateUserProps, useAccount } from '../../../hooks/useAccount';

import * as S from './styles';

export const AccountData: React.FC = () => {
  const navigation = useNavigation();

  //@ts-ignore
  const { ref } = useDropdownMessage();
  const { control, handleSubmit } = useForm<UpdateUserProps>();
  const { user: userData, signOut } = useAuth();
  const { loading, imageFile, selectImageGalery } = useCamera();
  const {
    loading: loadingUserAccount,
    updateUserData,
    updateUserAvatar,
  } = useAccount();

  const user = userData as UserProps;

  const onSubmit = (data: UpdateUserProps) => {
    const { newPassword, oldPassword, confirmPassword } = data;
    if (!oldPassword) {
      ref.current.alertWithType(
        MessageType['WARN'],
        'Ops!!!',
        'A senha anterior não pode estar vazia!!',
      );

      return;
    }

    if (newPassword !== confirmPassword) {
      ref.current.alertWithType(
        MessageType['WARN'],
        'Ops!!!',
        'As novas senhas não conferem, por favor tente novamente',
      );

      return;
    }

    updateUserData(data);
  };

  const onSubmitAvatar = () => {
    selectImageGalery().then(() => {
      updateUserAvatar(imageFile as ImageSourceDTO);
    });
  };

  if (loadingUserAccount) {
    return <LoadingView />;
  }

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
            <S.TopRowItems>
              <S.BoxLeftButton onPress={() => navigation.goBack()}>
                <S.LeftIconTopRow
                  name="arrow-left"
                  size={35}
                  color={'#999591'}
                />
              </S.BoxLeftButton>

              <S.TItlePageTopRow>Meu perfil</S.TItlePageTopRow>

              <S.BoxRightButton onPress={() => signOut()}>
                <S.RightIconTopRow name="power" size={30} color={'#999591'} />
              </S.BoxRightButton>
            </S.TopRowItems>
            <S.ContainerUserData>
              <S.BoxUserImage style={{ elevation: 5 }}>
                {!loading ? (
                  <S.ImageUser
                    source={{ uri: imageFile?.uri || user.avatar }}
                  />
                ) : (
                  <ActivityIndicator size="large" color="#FF9000" />
                )}

                <S.ButtonSelectImage onPress={() => onSubmitAvatar()}>
                  <S.ButtonSelectImageIcon
                    name="camera"
                    size={25}
                    color={'#000'}
                  />
                </S.ButtonSelectImage>
              </S.BoxUserImage>

              <Input
                icon="user"
                name="username"
                placeholder="Nome"
                control={control}
                error={null}
                defaultValue={user.name}
              />
              <Input
                icon="at-sign"
                name="email"
                placeholder="Email"
                control={control}
                error={null}
                defaultValue={user.email}
              />

              <View style={{ height: 30 }} />
              <Input
                icon="lock"
                name="oldPassword"
                placeholder="Senha atual"
                control={control}
                error={null}
                isPassword
              />
              <Input
                icon="lock"
                name="newPassword"
                placeholder="Senha atual"
                control={control}
                error={null}
                isPassword
              />
              <Input
                icon="lock"
                name="confirmPassword"
                placeholder="Senha atual"
                control={control}
                error={null}
                isPassword
              />

              <View style={{ height: 20 }} />
              <Button
                title="Confirmar mudanças"
                pressFunction={handleSubmit(onSubmit)}
              />
            </S.ContainerUserData>
          </S.Container>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};
