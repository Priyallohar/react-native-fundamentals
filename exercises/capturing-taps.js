import React from 'react'
import { Alert, Button } from 'react-native'
import { View } from 'react-native-web'

const buttonclickHandlerr = ()=>{
   Alert.alert("Alert","hello!")
}

const capturingTaps = () => {
  return (
    <View>
   <Button title='Button 1' onPress={buttonclickHandlerr}></Button>
   <Button title='Button 2' onPress={()=>alert("hello 2")}></Button>
   </View>
  )
}

// Capturing User Taps

// TIP: Button is a component exposed by React Native. You'll import it the same way you did View
// and Text previously.

export default capturingTaps