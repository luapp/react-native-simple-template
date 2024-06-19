import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Platform, Text, View, Button } from 'react-native';

function HomeScreen() {
  const [activityData, setActivityData] = useState({
    message: 'Waiting for updates...',
    timestamp: new Date().toLocaleTimeString(),
  });

  useEffect(() => {
    // Simulate live updates
    const interval = setInterval(() => {
      setActivityData({
        message: `Updated at ${new Date().toLocaleTimeString()}`,
        timestamp: new Date().toLocaleTimeString(),
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleUpdate = () => {
    setActivityData({
      message: `Manually updated at ${new Date().toLocaleTimeString()}`,
      timestamp: new Date().toLocaleTimeString(),
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Live Activities Demo</Text>
      <Text style={styles.message}>{activityData.message}</Text>
      <Text style={styles.timestamp}>Last update: {activityData.timestamp}</Text>
      <Image source={require('../assets/images/react-logo.png')} style={styles.image} />
      <Button title="Update Now" onPress={handleUpdate} />
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  message: {
    fontSize: 18,
    marginBottom: 10,
  },
  timestamp: {
    fontSize: 14,
    marginBottom: 20,
    color: 'gray',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
});

export default HomeScreen;
