import React from 'react';
import { FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NumberFormat from 'react-number-format';
import api from '../../services/api';
// import { formatPrice } from '../../util/format';
import {
  Container,
  AddButton,
  AddButtonText,
  ProductImage,
  ProductAmount,
  ProductAmountText,
  Product,
  ProductTitle,
  ProductPrice,
  AmountWrapper,
} from './styles';

class Main extends React.Component {
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

    const data = response.data.map(product => {
      return {
        ...product,
        formattedPrice: product.price,
      };
    });
    console.tron.log(data);
    this.setState({ products: data });
  };

  handleAddProduct = () => {};

  renderProduct = item => {
    return (
      <Product key={item.id}>
        <ProductImage source={{ uri: item.image }} />
        <ProductTitle>{item.title}</ProductTitle>
        <NumberFormat
          value={item.price}
          thousandSeparator
          prefix="$"
          displayType="text"
          renderText={value => <ProductPrice>{value}</ProductPrice>}
        />
        <AddButton onPress={() => this.handleAddProduct(item.id)}>
          <ProductAmount>
            <AmountWrapper>
              <Icon name="add-shopping-cart" color="#FFF" size={20} />
              <ProductAmountText>0</ProductAmountText>
            </AmountWrapper>
            <AddButtonText>ADD PRODUCT</AddButtonText>
          </ProductAmount>
        </AddButton>
      </Product>
    );
  };

  render() {
    const { products } = this.state;
    return (
      <Container>
        <FlatList
          data={products}
          horizontal
          renderItem={({ item }) => this.renderProduct(item)}
          keyExtractor={item => item.id.toString()}
        />
      </Container>
    );
  }
}

export default Main;
