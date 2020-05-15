import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Container = styled(RectButton)`
  width: 66%;
  height: 62px;
  background: #138a72;
  border-radius: 100px;
  margin-top: 52px;
  align-items: center;
  justify-content: center;
  font-family: 'MontserratAlternates-Regular';
`;

export const Text = styled.Text`
  color: #fff;
  font-size: 22px;
  font-weight: bold;
  font-family: 'MontserratAlternates-Regular';
`;
