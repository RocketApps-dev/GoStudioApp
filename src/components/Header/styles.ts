import styled from 'styled-components/native';

import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export const BoxHeader = styled.View`
  width: 100%;
  height: 90px;

  background-color: #28262e;

  padding: 20px;
`;

export const TitleHeader = styled.Text`
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;

  color: #999591;
`;

export const UserName = styled.Text`
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;

  color: #ff9000;
`;

export const ContainerUserImage = styled.TouchableOpacity`
  position: absolute;
  right: 10px;
  top: 15px;
  right: 20px;
`;

export const ImageShimmer = styled(ShimmerPlaceHolder).attrs({})`
  width: 56px;
  height: 56px;
  
  margin: 10px;
`;

export const ImageUser = styled.Image`
  width: 56px;
  height: 56px;

  border-radius: 10px;
`;
