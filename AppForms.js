import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'

export default function AppForms({ navigation }) {
  const [descricao, setDescricao] = useState('')
  const [quantidade, setQuantidade] = useState('')
  function handleDescripitionChange(descricao) {
    setDescricao(descricao)
  }
  function handleQuantityChange(quantidade) {
    setQuantidade(quantidade)
  }
  async function handleButtonPress() {
    const listItem={ id: new Date().getTime(), 
      descricao, quantidade }
    let saveItems = []
    const response = await AsyncStorage.getItem('items');
    if (response) saveItems= JSON.parse(response);
    saveItems.push(listItem)
    await AsyncStorage.setItem('items', JSON.stringify(saveItems))
    navigation.navigate('AppList')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Item para compra</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          onChangeText={handleDescripitionChange}
          placeholder='O que está faltando em casa?'
          clearButtonMode='always' />

        <TextInput style={styles.input}
          onChangeText={handleQuantityChange}
          placeholder='Digite a quantidade'
          keyboardType={'numeric'}
          clearButtonMode='always' />
        <TouchableOpacity style={styles.button}
          onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>

      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00d9d3',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 20
  },
  // inputContainer: {
  //   flex: 1,
  //   marginTop: 30,
  //   width: '90%',
  //   padding: 20,
  //   borderTopLeftRadius: 10,
  //   borderTopRightRadius: 10,
  //   alignItems: 'stretch',
  //   backgroundColor: '#fff',
  // },
  input: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'stretch'
  },
  button: {
    marginTop: 10,
    height: 60,
    backgroundColor: '#0000002e',
    borderRadius: 10,
    paddingHorizontal: 24,
    fontSize: 16,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    shadowOpacity: 20,
    shadowColor: '#ccc'
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold'
  }

});
