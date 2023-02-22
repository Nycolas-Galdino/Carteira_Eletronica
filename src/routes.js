import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from './pages/home';
import Form from './pages/form';
import List from './pages/card-list';
import Info from './pages/card-info';

const Stack = createNativeStackNavigator();

export default () => {
  console.log('Chegou a Routes.js');

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="List" component={List} />
        <Stack.Screen name="Info" component={Info} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
