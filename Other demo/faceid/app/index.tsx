import React, { useState } from 'react';
import { Image, StyleSheet, Platform, Text, View, Button, Alert } from 'react-native';
import * as LocalAuthentication from 'expo-local-authentication';

function HomeScreen() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authenticate = async () => {
    try {
      const hasHardware = await LocalAuthentication.hasHardwareAsync();
      if (!hasHardware) {
        Alert.alert('Error', 'This device does not support Face ID or Touch ID.');
        return;
      }

      const supportedTypes = await LocalAuthentication.supportedAuthenticationTypesAsync();
      if (!supportedTypes.length) {
        Alert.alert('Error', 'No Face ID or Touch ID available.');
        return;
      }

      const { success } = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Authenticate with Face ID or Touch ID',
      });

      if (success) {
        setIsAuthenticated(true);
      } else {
        Alert.alert('Authentication failed', 'Please try again.');
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert('An error occurred', error.message);
      } else {
        Alert.alert('An unknown error occurred');
      }
    }
  };

  const signOut = () => {
    setIsAuthenticated(false);
  };

  return (
    <View style={styles.container}>
      {isAuthenticated ? (
        <>
          <Text>Hello, world from React Native!</Text>
          <Text>Platform: {Platform.OS}</Text>
          <Text>Version: {Platform.Version}</Text>
          <Text>Simple Template Using Expo</Text>
          <Image source={require('../assets/images/react-logo.png')} style={styles.image} />
          <Button title="Sign Out" onPress={signOut} />
        </>
      ) : (
        <>
          <Text>Please authenticate to continue</Text>
          <Button title="Authenticate" onPress={authenticate} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginTop: 20,
  },
});

export default HomeScreen;
