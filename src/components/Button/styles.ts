import styled from 'styled-components/native';
import { AppColors } from '../../global/constants/AppColors';

export const Box = styled.TouchableOpacity`
  width: 295px;
  height: 50px;

  margin: 10px;

  background: ${AppColors.terciary};
  border-radius: 10px;

  align-items: center;
  justify-content: center;
`;

export const TextButton = styled.Text`
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 18px;
  text-align: center;

  color: #312e38;
`;
