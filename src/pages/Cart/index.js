import React from 'react';
import { FlatList, Alert } from 'react-native';
import NumberFormat from 'react-number-format';
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconCom from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import colors from '../../styles/colors';
import * as cartActions from '../../store/modules/cart/actions';

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
  EmptyCart,
  NoItems,
  TotalContainer,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
} from './styles';

class Cart extends React.Component {
  handleRemoveItem = id => {
    const { removeFromCart } = this.props;
    removeFromCart(id);
  };

  decrement = prod => {
    const { updateAmountRequest } = this.props;
    if (prod.amount < 2) {
      return;
    }
    updateAmountRequest(prod.id, prod.amount - 1);
  };

  increment = prod => {
    const { updateAmountRequest } = this.props;
    updateAmountRequest(prod.id, prod.amount + 1);
  };

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
              decimalScale={2}
              fixedDecimalScale
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
            <DecreaseBtn onPress={() => this.decrement(item)}>
              <IconCom
                name="minus-circle-outline"
                color={colors.primary}
                size={20}
              />
            </DecreaseBtn>
            <ProductAmount
              editable={false}
              value={item.amount.toString()}
              multiline={false}
            />
            <IncreaseBtn onPress={() => this.increment(item)}>
              <IconCom
                name="plus-circle-outline"
                color={colors.primary}
                size={20}
              />
            </IncreaseBtn>
          </AmoutWrapper>
          <NumberFormat
            value={item.subTotal}
            decimalScale={2}
            fixedDecimalScale
            prefix="$"
            displayType="text"
            renderText={value => <ProductTotalPrice>{value}</ProductTotalPrice>}
          />
        </PriceWrapper>
      </>
    );
  };

  render() {
    const { products, total, length } = this.props;
    return (
      <Container>
        {length <= 0 ? (
          <EmptyCart>
            <Icon
              name="remove-shopping-cart"
              size={45}
              color={colors.primary}
            />
            <NoItems>You have no items in your cart yet </NoItems>
          </EmptyCart>
        ) : (
          <>
            <FlatList
              data={products}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => this.renderProduct(item)}
              keyExtractor={item => item.id.toString()}
            />
            <TotalContainer>
              <TotalText>TOTAL</TotalText>
              <NumberFormat
                value={total}
                decimalScale={2}
                fixedDecimalScale
                prefix="$"
                displayType="text"
                renderText={value => <TotalAmount>{value}</TotalAmount>}
              />
              <Order onPress={() => Alert.alert('Order succssfully sent')}>
                <OrderText>FINISH ORDER</OrderText>
              </Order>
            </TotalContainer>
          </>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    products: state.cartReducer.map(prod => ({
      ...prod,
      subTotal: prod.price * prod.amount,
    })),
    length: state.cartReducer.length,
    total: state.cartReducer.reduce(
      (total, product) => total + product.price * product.amount,
      0
    ),
  };
};

Cart.propTypes = {
  removeFromCart: PropTypes.func.isRequired,
  updateAmountRequest: PropTypes.func.isRequired,
  total: PropTypes.number.isRequired,
  length: PropTypes.number.isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      title: PropTypes.string,
      price: PropTypes.number,
    })
  ).isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(cartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
