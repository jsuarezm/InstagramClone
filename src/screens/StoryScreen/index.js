import React, {useState, useEffect} from 'react';
import {
  Text,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import {useRoute} from '@react-navigation/native';

import styles from './styles';
import storiesData from '../../data/stories';

const StoryScreen = () => {
  const [userStories, setuserStories] = useState(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [activeStory, setActiveStory] = useState(null);

  const route = useRoute();

  useEffect(() => {
    const userId = route.params.userId;
    const userStories = storiesData.find(
      storyData => storyData.user.id === userId,
    );
    console.log("stories");
    console.log(userStories);
    setuserStories(userStories);
    setActiveStoryIndex(0);
    setActiveStory(userStories.stories[0]);
    return() => {
      console.log("fisrt running");
    };
  }, []);

  useEffect(() => {
    if (userStories && userStories.stories.length > activeStoryIndex - 1) {
      setActiveStory(userStories.stories[activeStoryIndex]);
    };
    return() => {
      console.log("second running");
    };
  }, [activeStoryIndex]);

  if (!activeStory) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  };
  console.log("active story");
  console.log(activeStory);
  console.log(activeStory.imageUri);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={{uri: activeStory.imageUri}}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
    </SafeAreaView>
  );
};

export default StoryScreen;
