import styled from 'styled-components/native';
import { AppColors } from '../../global/constants/AppColors';

export const BoxButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;

  background-color: ${AppColors.terciary};

  position: absolute;
  bottom: 20px;
  right: 30px;

  border-radius: 60px;

  align-items: center;
  justify-content: center;

  z-index: +1;
`;

export const ContainerExpandedButtons = styled.View`
  width: 50px;

  padding-bottom: 60px;
  padding-top: 10px;

  position: absolute;
  bottom: 20px;
  right: 30px;
`;

export const ExpandedButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;

  align-items: center;
  justify-content: center;

  background-color: ${AppColors.terciary};

  margin-bottom: 10px;

  border-radius: 50px;
`;
