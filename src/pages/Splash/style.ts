import styled from 'styled-components/native';
import { AppColors } from '../../global/constants/AppColors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;

  background-color: ${AppColors.primary};
`;

export const LogoImage = styled.Image`
  width: 300px;
  height: 220px;
`;
