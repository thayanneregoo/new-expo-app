import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function AppList() {
  return (
    <View style={styles.container}>
      <Text>List!</Text>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00d9d3',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

