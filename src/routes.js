import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Header from './components/Header';
import Main from './pages/Main';
import Cart from './pages/Cart';
import colors from './styles/colors';

const AppNavigator = createStackNavigator(
  {
    Products: Main,
    Cart,
  },
  {
    initialRouteName: 'Products',
    defaultNavigationOptions: navOptions => ({
      header: <Header navigation={navOptions.navigation} />,
    }),
    cardStyle: {
      backgroundColor: colors.dark,
    },
  }
);
const Routes = createAppContainer(AppNavigator);

export default Routes;
