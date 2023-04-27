import React from "react"; //obligatorio
import { View, StyleSheet, Text, TextInput, Button } from "react-native"; //componentes a utilizar

//Nombre del componente si o si en mayusc
export default function Login(){
    return(
        <View style={styles.container}>
            <TextInput style={styles.text} placeholder="Email"></TextInput>
            <TextInput style={styles.text} placeholder="Contraseña"></TextInput>
            <Button title="Enviar" onPress={()=>console.log('enviado')}></Button>
        </View>
    );
}

//estilos para mis componentes
const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
    },
    text:{
      color: 'black',
      fontSize: 15,
    },
  });