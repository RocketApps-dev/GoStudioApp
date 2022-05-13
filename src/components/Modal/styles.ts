import styled from 'styled-components/native';
import { AppColors } from '../../global/constants/AppColors';

export const Modal = styled.Modal``;

export const Container = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;

  margin-top: 22px;

  margin: 20px;
`;

export const BoxModal = styled.View`
  background-color: white;

  border-radius: 20px;

  padding: 30px;

  align-items: center;
`;

export const TitleModal = styled.Text`
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;

  color: black;

  margin-bottom: 50px;
`;

export const TextModal = styled.Text`
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;

  color: black;

  margin-bottom: 50px;
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

export const ButtonLeft = styled.TouchableOpacity`
  width: 120px;
  height: 50px;

  margin: 10px;

  background: ${AppColors.terciary};
  border-radius: 10px;

  align-items: center;
  justify-content: center;
`;

export const ButtonRight = styled.TouchableOpacity`
  width: 120px;
  height: 50px;

  margin: 10px;

  background: ${AppColors.inputTextColor};
  border-radius: 10px;

  align-items: center;
  justify-content: center;
`;
