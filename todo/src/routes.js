import React from 'react';
import {useSelector} from 'react-redux';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';
import Main from '~/pages/Main';
import ImageEditor from '~/pages/ImageEditor';
import BeforeAfter from '~/pages/BeforeAfter';

const Stack = createStackNavigator();

export default function Routes() {
  const signed = useSelector((state) => state.auth.signed);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!signed && (
          <>
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
          </>
        )}
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="ImageEditor" component={ImageEditor} />
        <Stack.Screen name="BeforeAfter" component={BeforeAfter} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
