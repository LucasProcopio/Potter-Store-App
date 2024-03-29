import styled from 'styled-components/native';
import logo from '../../assets/logo.png';
import colors from '../../styles/colors';

export const SafeArea = styled.SafeAreaView`
  background: ${colors.dark};
  flex-direction: row;
`;

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
  flex-direction: row;
  padding: 20px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 95px;
  height: 30px;
`;

export const BasketWrapper = styled.TouchableOpacity`
  height: 24px;
  width: 24px;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: ${colors.primary};
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
