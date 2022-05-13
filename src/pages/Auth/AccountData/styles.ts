import styled from 'styled-components/native';
import FeaIcon from 'react-native-vector-icons/Feather';

import { AppColors } from '../../../global/constants/AppColors';

export const Container = styled.View`
  flex: 1;

  align-items: center;

  background-color: ${AppColors.primary};
`;

export const TopRowItems = styled.View`
  width: 100%;
  height: 10%;

  flex-direction: row;

  align-items: center;
  justify-content: center;
`;

export const BoxLeftButton = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
`;

export const LeftIconTopRow = styled(FeaIcon).attrs({})``;

export const TItlePageTopRow = styled.Text`
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 600;
  font-size: 25px;
  line-height: 28px;

  color: #f4ede8;
`;

export const BoxRightButton = styled.TouchableOpacity`
  position: absolute;
  right: 20px;
`;

export const RightIconTopRow = styled(FeaIcon).attrs({})``;

export const ContainerUserData = styled.View`
  width: 100%;
  height: 100%;

  align-items: center;
`;

export const BoxUserImage = styled.View`
  width: 195px;
  height: 195px;

  background-color: #232129;

  border-radius: 100px;

  align-items: center;
  justify-content: center;
`;

export const ImageUser = styled.Image`
  width: 195px;
  height: 195px;

  border-radius: 100px;
`;

export const ButtonSelectImage = styled.TouchableOpacity`
  width: 50px;
  height: 50px;

  background-color: #ff9000;

  border-radius: 100px;

  position: absolute;
  right: 10px;
  bottom: 0;

  align-items: center;
  justify-content: center;
`;

export const ButtonSelectImageIcon = styled(FeaIcon).attrs({})``;
