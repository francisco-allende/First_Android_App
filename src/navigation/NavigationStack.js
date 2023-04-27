import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';

//Configuramos el Navegation Stack a partir de nuestra constante navigator, la cual al ser componente se puede hacer etiqueta y utilizar sus propiedades Navigator y Screen
const Stack = createNativeStackNavigator();

//El armado es similar a Angular y su routeo, donde el va el path y el componente a renderizar
export default function NavigationStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen}></Stack.Screen>
      <Stack.Screen name="Settings" component={SettingsScreen}></Stack.Screen>
    </Stack.Navigator>
  )
}