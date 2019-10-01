import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { SafeArea, Container, Logo, BasketWrapper, ItemCount } from './styles';

export default function Header({ navigation, cartSize }) {
  return (
    <SafeArea>
      <Container>
        <Logo />
        <BasketWrapper>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <ItemCount>{cartSize || 0}</ItemCount>
        </BasketWrapper>
      </Container>
    </SafeArea>
  );
}
