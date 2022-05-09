import styled from 'styled-components/native';
import { AppColors } from '../../../global/constants/AppColors';

export const Container = styled.View`
  flex: 1;

  align-items: center;
  justify-content: center;

  background-color: ${AppColors.primary};
`;

export const ImageIcon = styled.Image``;

export const Title = styled.Text`
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 500;
  font-size: 30px;
  line-height: 40px;
  text-align: center;

  /* White */

  color: #f4ede8;
`;

export const SubTitle = styled.Text`
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;

  text-align: center;

  color: #999591;
`;
