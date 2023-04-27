import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './src/components/Login';
import Saludar from './src/components/Saludar';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text style={styles.text}>👾 Mi primera app de android 👾</Text>
        <Login/>
        <Saludar firstname="Andres" lastname="Malechor"/>
        <Saludar firstname="Carlos" lastname="Navarro"/>  
        <Saludar firstname="Pepin" lastname="Goycochea"/>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    color: 'white',
    fontSize: 24,
  },
});
