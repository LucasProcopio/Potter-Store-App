import styled from 'styled-components/native';
import { darken } from 'polished';
import colors from '../../styles/colors';

export const Container = styled.SafeAreaView`
  background: ${colors.dark};
`;
export const ProductImage = styled.Image`
  width: 200px;
  height: 200px;
`;

export const AddButton = styled.TouchableOpacity`
  border-radius: 4px;
  background: ${colors.primary};
  margin-top: auto;
`;

export const AmountWrapper = styled.View`
  background: ${darken(0.03, colors.primary)};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  padding: 5px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const ProductAmount = styled.View`
  flex-direction: row;
  align-items: center;
  height: 40px;
  padding: 0px 10px 0 0;
`;
export const AddButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  margin-left: 15px;
`;

export const ProductAmountText = styled.Text`
  margin: 0 8px;
  color: #fff;
`;

export const Product = styled.View`
  background: #fff;
  border-radius: 4px;
  padding: 15px;
  margin: 15px;
  width: 220px;
`;
export const ProductTitle = styled.Text`
  color: #555;
  font-weight: bold;
  margin: 10px 0;
`;
export const ProductPrice = styled.Text`
  color: #555;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 14px;
`;
