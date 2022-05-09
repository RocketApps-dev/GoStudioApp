import styled from 'styled-components/native';

export const BoxItem = styled.TouchableOpacity`
  width: 95%;
  height: 112px;

  background: #3e3b47;

  border-radius: 10px;

  padding: 10px;
  margin: 10px;

  flex-direction: row;
  align-items: center;
`;

export const ImageStudio = styled.Image`
  margin: 10px;
`;

export const ContainerTexts = styled.View`
  height: 80%;
`;

export const TitleItem = styled.Text`
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 24px;

  color: #f4ede8;
`;

export const TitleRow = styled.Text`
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;

  color: #999591;

  margin-left: 10px;
`;


export const StatusTitleBox = styled.View`
  position: absolute;
  right: 10px;
  bottom: 10px;
`;
