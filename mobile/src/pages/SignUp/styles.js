import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  background-color: #fff;
  align-items: center;
  justify-content: space-around;
`;

export const Content = styled.View`
  width: 100%;
  height: 50%;
  align-items: center;
`;

export const FormView = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
  justifyContent: 'space-between',
})`
  width: 80%;
`;

export const Duo = styled.View`
  margin-bottom: 11%;
  height: 15%;
`;

export const Footer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const ToSignIn = styled.Text`
  font-size: 18px;
  line-height: 24px;
  display: flex;
  align-items: center;
  text-decoration-line: underline;
  color: #138a72;
  font-family: 'MontserratAlternates-Regular';
`;
