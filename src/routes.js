import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Main from './pages/Main';
import Cart from './pages/Cart';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Cart,
    },
    {
      headerLayoutPreset: 'center',
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#7159c1',
        },
      },
    }
  )
);

export default Routes;
