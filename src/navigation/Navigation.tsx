import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import React from 'react';
import {ROUTES, ROUTES_PARAMS} from '../constants/routes';
import {Home, WeatherDetail} from '../screens';

const Stack = createNativeStackNavigator<ROUTES_PARAMS>();

export const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={ROUTES.HOME}
        screenOptions={{
          gestureEnabled: true,
          headerShown: false,
          animation: 'slide_from_right',
        }}>
        <Stack.Screen name={ROUTES.HOME} component={Home} />
        <Stack.Screen name={ROUTES.WEATHER_DETAIL} component={WeatherDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
