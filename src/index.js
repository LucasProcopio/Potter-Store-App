import React from 'react';
import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import Routes from './routes';
import colors from './styles/colors';
import './config/ReactotronConfig';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <StatusBar backgroundColor={colors.dark} barStyle="light-content" />
      <Routes />
    </Provider>
  );
};

export default App;
