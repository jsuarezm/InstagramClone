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
import { API, graphqlOperation } from 'aws-amplify';
import { listStorys } from '../../graphql/queries';

import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

import styles from './styles';
//import storiesData from '../../data/stories';
import ProfilePicture from '../../components/ProfilePicture';

const StoryScreen = () => {
  const [stories, setStories] = useState([]);
  const [userStories, setuserStories] = useState(null);
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);

  const route = useRoute();
  //const navigation = useNavigation();
  //const userId = route.params.userId;


  useEffect(() => {
    fetchStories();
    setActiveStoryIndex(0);
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

  const NatigateToNextUser = () => {
    navigation.push("Story", { userId: (parseInt(userId) + 1).toString() });
  };

  const NatigateToPrevUser = () => {
    navigation.push("Story", { userId: (parseInt(userId) - 1).toString() });
  };

  const handleNextStory = () => {
    if (activeStoryIndex >= stories.length - 1) {
      return;
    }
    setActiveStoryIndex(activeStoryIndex + 1);
  };

  const handlePrevStory = () => {
    if (activeStoryIndex <= 0) {
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

  if (!stories || stories.length === 0) {
    return (
      <SafeAreaView>
        <ActivityIndicator />
      </SafeAreaView>
    );
  }

  const activeStory = stories[activeStoryIndex];

  return (
    <SafeAreaView style={styles.container}>
      <TouchableWithoutFeedback onPress={handlePress} >
        <ImageBackground
          source={{uri: activeStory.image}}
          style={styles.image}
        >
          <View style={styles.userInfo}>
            <ProfilePicture uri={activeStory.user.image} size={50} />
            <Text style={styles.userName}>{activeStory.user.name}</Text>
            <Text style={styles.postedTime}>{activeStory.createdAt}</Text>
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
