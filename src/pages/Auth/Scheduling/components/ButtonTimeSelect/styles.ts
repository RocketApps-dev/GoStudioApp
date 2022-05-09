import styled from 'styled-components/native';

export const BoxButton = styled.TouchableOpacity``;

type BoxProps = {
  isSelected?: boolean;
};

export const Box = styled.View<BoxProps>`
  width: 70px;
  height: 40px;
  background-color: ${props => (props.isSelected ? '#FF9000' : '#3e3b47')};
  border-radius: 10px;

  margin: 10px;

  align-items: center;
  justify-content: center;

  border-radius: 10px;
`;

export const TextButton = styled.Text`
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #f4ede8;
`;
