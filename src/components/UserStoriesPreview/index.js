import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import Story from '../UserStoryPreview';
// import storiesData from '../../data/stories';
import { listStorys } from '../../graphql/queries';

import styles from './styles';

const Stories = () => {

  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = async () => {
    try {
      const storiesData = await API.graphql(graphqlOperation(listStorys));
      console.log(storiesData.data.listStorys.items);
      setStories(storiesData.data.listStorys.items);

    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <FlatList
      data={stories}
      keyExtractor={({user: { id }}) => id}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.container}
      renderItem={({item}) => <Story story={item} />}
    />
  );
};

export default Stories;
