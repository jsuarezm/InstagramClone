/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={{backgroundColor: 'green', height: 1500}}>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 300,
          fontSize: 30,
          color: 'white',
        }}>
        Profile
      </Text>
    </View>
  );
};

export default ProfileScreen;
