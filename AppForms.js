import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';

export default function AppForms() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Item para compra</Text>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.input} 
        placeholder='O que está faltando em casa?'
        clearButtonMode='always'/>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D93600',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
