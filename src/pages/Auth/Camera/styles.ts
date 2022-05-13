import styled from 'styled-components/native';
import FeaIcon from 'react-native-vector-icons/Feather';

import { AppColors } from '../../../global/constants/AppColors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${AppColors.primary};
`;

export const ButtonCapture = styled.TouchableOpacity`
  width: 50px;
  height: 50px;

  background-color: ${AppColors.terciary};
  border-radius: 100px;

  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 40px;
`;

export const IconButton = styled(FeaIcon).attrs({})``;
