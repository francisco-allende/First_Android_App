import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

export default function HomeScreen(props) {

    const { navigation } = props; //un buen truco es un console.log de la prop para ver que tiene

    const goToSettings = () =>{
        navigation.navigate("Settings")
    }

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.text}>HomeScreen</Text>
        <Button onPress={goToSettings} title='Ir a ajustes' />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      color: 'white',
      fontSize: 24,
    },
  });