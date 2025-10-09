import { createStackNavigator } from '@react-navigation/stack';

import { RootStackMainParams } from '../types';
import { Details, Home } from '../screen';

const Stack = createStackNavigator<RootStackMainParams>();

export const NavigationMain = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        detachPreviousScreen: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
};
