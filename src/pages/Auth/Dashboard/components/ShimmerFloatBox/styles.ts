import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export const ContainerShimmer = styled.TouchableOpacity`
  background: #3e3b47;
  width: 95%;
  height: 112px;

  background: #3e3b47;

  border-radius: 10px;

  padding: 10px;
  margin: 10px;

  flex-direction: row;
  align-items: center;
`;

export const ImageShimmer = styled(ShimmerPlaceHolder).attrs({})`
  width: 72px;
  height: 72px;

  margin: 10px;
`;

export const ContainerTexts = styled.View`
  height: 80%;
`;

export const ShimmerTexts = styled(ShimmerPlaceHolder).attrs({})`
  border-radius: 10px;
`;
