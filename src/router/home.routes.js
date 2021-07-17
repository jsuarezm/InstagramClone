import React from 'react';
import {Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';

import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';

import logo from '../assets/images/logo.png';

const HomeStack = createStackNavigator();

const HomeRoutes = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Instagram',
          headerTitleAlign: 'center',
          headerLeft: () => (
            <Feather name="camera" size={25} color={'#545454'} />
          ),
          headerLeftContainerStyle: {
            marginLeft: 15,
          },
          headerRight: () => (
            <Ionicons name="paper-plane-outline" size={25} color={'#545454'} />
          ),
          headerRightContainerStyle: {
            marginRight: 15,
          },
          headerTitle: () => (
            // eslint-disable-next-line react-native/no-inline-styles
            <Image source={logo} resizeMode="contain" style={{width: 130}} />
          ),
        }}
      />
    </HomeStack.Navigator>
  );
};

export default HomeRoutes;
