import { View, Text, Button, StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'

export default function SettingsScreen(props) {

    const { navigation } = props; //un buen truco es un console.log de la prop para ver que tiene

    const goToPage = (pageName) =>{
        navigation.navigate(pageName)
    }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>SettingScreen</Text>
      <Button onPress={()=>goToPage("Home")} title='Ir al Home'/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'purple',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
      color: 'white',
      fontSize: 24,
    },
  });
