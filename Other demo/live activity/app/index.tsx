import { Image, StyleSheet, Platform } from 'react-native';
import {Text, View} from 'react-native';

function HomeScreen() {
  return (
    <View>
      <Text>Hello, world from react native !</Text>
      <Text>Platform: {Platform.OS}</Text>
      <Text>Version: {Platform.Version}</Text>
      <Text>Simple Template Using Expo</Text>
      <Image source={require('../assets/images/react-logo.png')} />
    </View>
  );
}

export default HomeScreen;
