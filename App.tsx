import { JSX } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { NavigationMain } from './src';

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <NavigationMain />
    </NavigationContainer>
  );
}

export default App;
