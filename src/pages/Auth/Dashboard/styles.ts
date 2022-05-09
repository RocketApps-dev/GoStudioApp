import styled from 'styled-components/native';
import { AppColors } from '../../../global/constants/AppColors';

export const Container = styled.View`
  flex: 1;

  align-items: center;

  background-color: ${AppColors.primary};
`;

export const ContainerTitle = styled.View`
  width: 100%;

  margin-left: 50px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

export const TitleDashboard = styled.Text`
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 500;
  font-size: 25px;
  line-height: 33px;

  color: #f4ede8;
`;

export const ContainerList = styled.View`
  width: 100%;
  height: 100%;

  align-items: center;
`;


