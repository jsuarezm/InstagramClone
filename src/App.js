/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strictimport {
 -local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView, StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import DiscoveryScreen from './screens/DiscoveryScreen';
import CreatePostScreen from './screens/CreatePostScreen';
import NotificationScreen from './screens/NotificationScreen';
import ProfileScreen from './screens/ProfileScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Tab = createBottomTabNavigator();

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Home') {
              return <Foundation name="home" size={size} color={color} />;
            }
            if (route.name === 'Discovery') {
              return <Feather name="search" size={size} color={color} />;
            }
            if (route.name === 'Post') {
              return <Feather name="plus-square" size={size} color={color} />;
            }
            if (route.name === 'Post') {
              return <Feather name="plus-square" size={size} color={color} />;
            }
            if (route.name === 'Notifications') {
              return <AntDesign name="hearto" size={size} color={color} />;
            }
            if (route.name === 'Profile') {
              return <Ionicons name="person-outline" size={size} color={color} />;
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: '#000',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Discovery" component={DiscoveryScreen} />
        <Tab.Screen name="Post" component={CreatePostScreen} />
        <Tab.Screen name="Notifications" component={NotificationScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
