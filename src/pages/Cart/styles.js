import styled from 'styled-components/native';
import colors from '../../styles/colors';

export const Container = styled.View`
  background: #fff;
  border-radius: 4px;
  padding: 10px;
  margin: 0 20px;
  /* height: ${props => (props.empty ? 'initial' : '500px')}; */
`;

export const EmptyCart = styled.View`
  justify-content: center;
  align-items: center;
  padding: 10px;
`;

export const NoItems = styled.Text`
  color: #555;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
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
  background: #f1f1f1;
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

export const TotalContainer = styled.View`
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  background: #fff;
`;

export const TotalText = styled.Text`
  color: #555;
  font-weight: bold;
`;

export const TotalAmount = styled.Text`
  color: ${colors.primary};
  font-size: 22px;
  padding: 10px;
`;

export const Order = styled.TouchableOpacity`
  border-radius: 4px;
  padding: 10px 20px;
  background: ${colors.primary};
`;

export const OrderText = styled.Text`
  color: #fff;
  text-align: center;
`;
