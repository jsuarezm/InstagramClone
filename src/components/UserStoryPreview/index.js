import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import ProfilePicture from '../ProfilePicture';
import styles from './styles';

const Story = ({imageUri, name}) => {

  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate("Story");
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ProfilePicture uri={imageUri} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

export default Story;
