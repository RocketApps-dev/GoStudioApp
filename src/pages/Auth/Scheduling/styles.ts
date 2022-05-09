import styled from 'styled-components/native';


import { AppColors } from '../../../global/constants/AppColors';

export const Container = styled.View`
  flex: 1;

  align-items: center;

  background-color: ${AppColors.primary};
`;

export const ContainerCalendarScheduling = styled.View`
  width: 100%;
  height: 100%;

  align-items: center;
`;

export const TitlePage = styled.Text`
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 33px;

  color: #f4ede8;

  margin-left: 15px;
`;

