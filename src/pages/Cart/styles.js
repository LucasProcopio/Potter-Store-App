import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  margin: 0 20px;
`;

export const Product = styled.View`
  flex: 1;
  flex-direction: row;
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
export const increaseBtn = styled.TouchableOpacity``;
export const decreaseBtn = styled.TouchableOpacity``;

export const PriceWrapper = styled.View``;
export const ProductAmount = styled.View``;
export const AmoutWrapper = styled.View``;
export const ProductTotalPrice = styled.Text``;
