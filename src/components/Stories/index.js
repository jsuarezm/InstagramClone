import React from 'react';
import {FlatList} from 'react-native';
import Story from '../Story';
import styles from './styles';

const data = [
  {
    imageUri:
      'https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg',
    name: 'Bruce',
  },
  {
    imageUri:
      'https://images.freeimages.com/images/large-previews/c2b/leopard-profile-portrait-1400889.jpg',
    name: 'Logan',
  },
  {
    imageUri:
      'https://images.freeimages.com/images/large-previews/b2b/lana-1250967.jpg',
    name: 'Lana',
  },
  {
    imageUri:
      'https://images.freeimages.com/images/large-previews/391/portrait-of-a-coyote-1475613.jpg',
    name: 'Carl',
  },
  {
    imageUri:
      'https://images.freeimages.com/images/large-previews/b9a/learning-to-read-the-alphabet-1437092.jpg',
    name: 'Kara',
  },
  {
    imageUri:
      'https://media.istockphoto.com/photos/gorgeous-ginger-cat-on-isolated-black-background-picture-id1018078858',
    name: 'Miau',
  },
];

const Stories = () => {
  return (
    <FlatList
      data={data}
      keyExtractor={({name}) => name}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      renderItem={({item}) => (
        <Story imageUri={item.imageUri} name={item.name} />
      )}
    />
  );
};

export default Stories;
