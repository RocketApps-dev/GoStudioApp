import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import { createShimmerPlaceholder } from 'react-native-shimmer-placeholder';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

export const ShimmerTimeBox = styled(ShimmerPlaceHolder).attrs({

})`
  width: 70px;
  height: 40px;
  background-color: '#666360';
  border-radius: 10px;

  margin: 10px;
`;
