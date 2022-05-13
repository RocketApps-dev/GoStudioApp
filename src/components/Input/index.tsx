import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { Control, Controller } from 'react-hook-form';

import { AppColors } from '../../global/constants/AppColors';

import * as S from './styles';
import { TouchableOpacity, View } from 'react-native';
import { string } from 'yup';

type Props = {
  icon: string;
  name: string;
  placeholder: string;
  control: Control<any>;
  error: string | null;
  isPassword?: boolean;
  defaultValue?: string;
  autoComplete?:
    | 'name'
    | 'cc-csc'
    | 'cc-exp'
    | 'cc-exp-month'
    | 'cc-exp-year'
    | 'cc-number'
    | 'email'
    | 'password'
    | 'postal-code'
    | 'street-address'
    | 'tel'
    | 'username'
    | 'off';
};

export const Input: React.FC<Props> = ({
  icon,
  name,
  placeholder,
  control,
  error,
  isPassword,
  autoComplete,
  defaultValue,
}) => {
  const [eyeIcon, setEyeIcon] = useState('eye');
  const [hidePass, setHidePass] = useState(isPassword);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { value, onChange } }) => (
        <S.ContainerInput>
          <View style={{ marginHorizontal: 5 }}>
            <Icon name={icon} size={20} color={AppColors.inputTextColor} />
          </View>
          <S.InputText
            value={value}
            onChangeText={onChange}
            placeholder={placeholder}
            placeholderTextColor={AppColors.inputTextColor}
            secureTextEntry={hidePass}
            autoCapitalize="none"
            autoCompleteType={autoComplete}
          />

          {isPassword && (
            <TouchableOpacity
              onPress={() => {
                setEyeIcon(eyeIcon === 'eye' ? 'eye-off' : 'eye');
                setHidePass(!hidePass);
              }}
              style={{ position: 'absolute', right: 10 }}>
              <Icon name={eyeIcon} size={20} color={AppColors.inputTextColor} />
            </TouchableOpacity>
          )}
        </S.ContainerInput>
      )}
    />
  );
};
