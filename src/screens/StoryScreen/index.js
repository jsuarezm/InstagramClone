import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  ImageBackground,
  ActivityIndicator,
  TextInput,
  TouchableWithoutFeedback,
  Dimensions,
} from 'react-native';
import {useRoute, useNavigation} from '@react-navigation/native';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
import storiesData from '../../data/stories';
import ProfilePicture from '../../components/ProfilePicture';

const StoryScreen = () => {
  const [userStories, setuserStories] = useState(storiesData[0]);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [activeStory, setActiveStory] = useState([]);

  const route = useRoute();
  const navigation = useNavigation();
  const userId = route.params.userId;
  console.log("user " + userId + "-----" + activeStoryIndex);


  useEffect(() => {
    const userStories = storiesData.find(
      storyData => storyData.user.id === userId,
    );
    console.log(userStories);
    setuserStories(userStories);
    setActiveStoryIndex(0);
    setActiveStory(userStories.stories[0]);
  }, []);

  useEffect(() => {
    if (!userStories) {
      return;
    }
    setActiveStory(userStories.stories[activeStoryIndex])
  }, [activeStoryIndex]);

  const NatigateToNextUser = () => {
    navigation.push("Story", { userId: (parseInt(userId) + 1).toString() });
  };

  const NatigateToPrevUser = () => {
    navigation.push("Story", { userId: (parseInt(userId) - 1).toString() });
  };

  const handleNextStory = () => {
    if (activeStoryIndex >= userStories.stories.length - 1) {
      NatigateToNextUser();
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePrevStory = () => {
    if (activeStoryIndex <= 0) {
      NatigateToPrevUser();
      return;
    }
    setActiveStoryIndex(activeStoryIndex - 1);
  };

  const handlePress = (evt) => {
    const x = evt.nativeEvent.locationX;
    const screenWidth = Dimensions.get('window').width;
    if (x < screenWidth/2) {
      handlePrevStory();
    } else {
      handleNextStory();
    }
  };

  if (!activeStory) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress} >
        <ImageBackground
          source={{uri: activeStory.imageUri}}
          style={styles.image}
        >
          <View style={styles.userInfo}>
            <ProfilePicture uri={userStories.user.imageUri} size={50} />
            <Text style={styles.userName}>{userStories.user.name}</Text>
            <Text style={styles.postedTime}>{activeStory.postedTime}</Text>
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.cameraButton}>
              <Feather name="camera" size={30} color={'#ffffff'} />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput 
                style={styles.textInput}
                editable 
                placeholder="Send Message"
                placeholderTextColor={"white"}  
              />
            </View>
            <View style={styles.messageButton}>
              <Ionicons name="paper-plane-outline" size={35} color={'#ffffff'} />
            </View>
            
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default StoryScreen;
