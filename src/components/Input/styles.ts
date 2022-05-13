import styled from 'styled-components/native';
import { AppColors } from '../../global/constants/AppColors';

export const ContainerInput = styled.View`
  background-color: ${AppColors.secondary};

  flex-direction: row;

  border-radius: 10px;
  padding-left: 5px;
  padding-right: 5px;

  margin-top: 10px;
  margin-bottom: 10px;

  align-items: center;
  /* justify-content: center; */
`;

export const InputText = styled.TextInput`
  width: 295px;
  height: 50px;

  color: white;

  font-size: 18px;
`;
