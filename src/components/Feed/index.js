import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import { API, graphqlOperation } from 'aws-amplify';
import Post from '../Post';
import Stories from '../UserStoriesPreview';
import { listPosts } from '../../graphql/queries';

const data = [
  {
    id: '1',
    user: {
      imageUri:
        'https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg',
      name: 'Bruce',
    },
    imageUri:
      'https://images.freeimages.com/images/large-previews/b2b/power-plant-1-1442057.jpg',
    caption: 'Electric Plant',
    likesCount: 1234,
    postedAt: '6 minutes ago',
  },
  {
    id: '2',
    user: {
      imageUri:
        'https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg',
      name: 'Bruce',
    },
    imageUri:
      'https://images.freeimages.com/images/large-previews/55b/fish-lots-of-fish-pt-2-1388256.jpg',
    caption: 'Under see',
    likesCount: 1234,
    postedAt: '6 minutes ago',
  },
  {
    id: '3',
    user: {
      imageUri:
        'https://i.insider.com/5d03aa8e6fc9201bc7002b43?width=1136&format=jpeg',
      name: 'Bruce2',
    },
    imageUri:
      'https://images.freeimages.com/images/large-previews/ebe/movie-prop-2-1542122.jpg',
    caption: 'Beatiful park',
    likesCount: 123,
    postedAt: '6 minutes ago',
  },
];

const Feed = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const postsData = await API.graphql(graphqlOperation(listPosts));
      setPosts(postsData.data.listPosts.items);

    } catch (e) {
      console.log(e.message);
    }
  }

  return (
    <FlatList
      data={posts}
      renderItem={({item}) => <Post post={item} />}
      keyExtractor={({id}) => id}
      ListHeaderComponent={Stories}
    />
  );
};

export default Feed;
