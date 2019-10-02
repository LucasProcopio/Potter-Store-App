import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  margin: 0 20px;
`;

export const Product = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const ProductData = styled.View`
  flex: 1;
  flex-direction: column;
  justify-content: flex-start;
`;

export const ProductImage = styled.Image`
  width: 75px;
  height: 75px;
`;

export const ProductTitle = styled.Text`
  color: #555;
  margin: 0 10px;
`;

export const ProductPrice = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin: 0px 10px;
`;
export const RemoveBtn = styled.TouchableOpacity``;
export const IncreaseBtn = styled.TouchableOpacity``;
export const DecreaseBtn = styled.TouchableOpacity``;

export const PriceWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background: #ccc;
  border-radius: 4px;
  margin: 5px 0;
`;
export const AmoutWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;
export const ProductAmount = styled.TextInput`
  width: 40px;
  height: 30px;
  text-align: center;
  line-height: 15px;
  color: #555;
  margin: 0 5px;
  padding: 0;
  background: #fff;
  border-radius: 4px;
  border: 1px solid ${colors.primary};
`;
export const ProductTotalPrice = styled.Text`
  font-weight: bold;
`;
