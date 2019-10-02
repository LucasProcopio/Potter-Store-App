import React from 'react';
import { FlatList, View } from 'react-native';
import NumberFormat from 'react-number-format';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCom from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../styles/colors';
import api from '../../services/api';

import {
  Container,
  Product,
  ProductImage,
  ProductPrice,
  ProductTitle,
  RemoveBtn,
  ProductData,
  PriceWrapper,
  ProductAmount,
  AmoutWrapper,
  ProductTotalPrice,
  IncreaseBtn,
  DecreaseBtn,
} from './styles';

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = async () => {
    const response = await api.get('/products');
    this.setState({ products: response.data });
  };

  handleRemoveItem = () => {};

  renderProduct = item => {
    return (
      <>
        <Product key={item.id}>
          <ProductImage source={{ uri: item.image }} />
          <ProductData>
            <ProductTitle>{item.title}</ProductTitle>
            <NumberFormat
              value={item.price}
              thousandSeparator
              prefix="$"
              displayType="text"
              renderText={value => <ProductPrice>{value}</ProductPrice>}
            />
          </ProductData>
          <RemoveBtn onPress={() => this.handleRemoveItem(item.id)}>
            <Icon name="delete-forever" color={colors.primary} size={24} />
          </RemoveBtn>
        </Product>
        <PriceWrapper>
          <AmoutWrapper>
            <IncreaseBtn>
              <IconCom
                name="minus-circle-outline"
                color={colors.primary}
                size={20}
              />
            </IncreaseBtn>
            <ProductAmount editable={false} value="1" multiline={false} />
            <DecreaseBtn>
              <IconCom
                name="plus-circle-outline"
                color={colors.primary}
                size={20}
              />
            </DecreaseBtn>
          </AmoutWrapper>
          <NumberFormat
            value={item.price}
            thousandSeparator
            prefix="$"
            displayType="text"
            renderText={value => <ProductTotalPrice>{value}</ProductTotalPrice>}
          />
        </PriceWrapper>
      </>
    );
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <FlatList
          data={products}
          renderItem={({ item }) => this.renderProduct(item)}
          keyExtractor={item => item.id.toString()}
        />
      </Container>
    );
  }
}

export default Cart;
