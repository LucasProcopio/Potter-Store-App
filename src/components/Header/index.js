import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';
import { SafeArea, Container, Logo, BasketWrapper, ItemCount } from './styles';

export default function Header({ navigation }) {
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
          <ItemCount>0</ItemCount>
        </BasketWrapper>
      </Container>
    </SafeArea>
  );
}
