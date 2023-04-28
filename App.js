import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import NavigationStack from './src/navigation/NavigationStack'; //lo importamos y añadimos dentro del container
import NavigationTab from './src/navigation/NavigationTab';
import NavigationDrawer from './src/navigation/NavigationDrawer';

export default function App() {
  return (
    <NavigationContainer>
    <NavigationDrawer/>
    {/*
      <NavigationTab/>
      <NavigationStack />
      */}
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

