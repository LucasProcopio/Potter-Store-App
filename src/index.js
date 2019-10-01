import React from 'react';
import { StatusBar } from 'react-native';
import Routes from './routes';
import colors from './styles/colors';

import './config/ReactotronConfig';

const App = () => {
  return (
    <>
      <StatusBar backgroundColor={colors.dark} barStyle="light-content" />
      <Routes />
    </>
  );
};

export default App;
