import React from 'react'
import { Text, View } from 'react-native'
import { ContadorScreen } from './ContadorScreen'

export const HolaMundoScreens = () => {
  return (
    <View style={{
        flex:1,
        backgroundColor: "blue",
        justifyContent: "center"
      }}>
        <Text style={{
          fontSize: 45,
          textAlign: "center"
        }}>Save</Text>
      </View>
  )
}
/*--capturar conteo y la hora 
  --ver fecha y hora dentro del ContadorScreen
  --Mostrar los ultimos 3 registros ingresados 
  --Al precionar SAVE guardar debe hacer inser a la base 
  --Colocar el logo de psmt */