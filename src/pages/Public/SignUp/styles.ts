import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { AppColors } from '../../../global/constants/AppColors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${AppColors.primary};

  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;

export const ImageLogo = styled.Image`
  width: 250px;
  height: 180px;

  position: absolute;
  top: 10px;
`;

export const ContainerButtons = styled.View`
  width: 90%;
  height: 80%;

  align-items: center;
  justify-content: center;

  padding: 10px;
  padding-top: 70px;
`;

export const TitlePage = styled.Text`
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  text-align: center;

  color: #f4ede8;
`;

export const TextBotton = styled.Text`
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;

  color: #f4ede8;
`;

export const ButtonCreateAccount = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0%;
  right: 0;

  height: 50px;

  background: #312e38;
  border-top-width: 1px;
  border-color: #232129;

  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

export const TextButtonCreateAccount = styled.Text`
  color: #ff9000;
  font-size: 18px;
  font-family: 'RobotoSlab-Regular';
  margin-left: 16px;
`;
