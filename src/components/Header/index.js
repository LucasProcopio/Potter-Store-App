import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { SafeArea, Container, Logo, BasketWrapper, ItemCount } from './styles';

function Header({ navigation, intemQt }) {
  const handleNavigate = screen => {
    navigation.navigate(screen);
  };

  return (
    <SafeArea>
      <Container>
        <TouchableOpacity onPress={() => handleNavigate('Products')}>
          <Logo />
        </TouchableOpacity>
        <BasketWrapper onPress={() => handleNavigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{intemQt}</ItemCount>
        </BasketWrapper>
      </Container>
    </SafeArea>
  );
}

Header.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  intemQt: state.cartReducer.length,
});

export default connect(mapStateToProps)(Header);
