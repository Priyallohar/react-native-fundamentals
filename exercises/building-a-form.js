import React, { useState }  from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, ScrollView ,Alert } from 'react-native'
import { Button } from 'react-native'

const styles = StyleSheet.create({
    container:{
        margin:20,
    },
    text:{
        fontSize:18,
        fontWeight:Platform.OS==="ios"?"700":"normal",
        marginBottom:10,
    },
    inputbox:{
    Width:"100%",
    height:40,
    backgroundColor:"#D3D3D3",
    borderRadius:5,
    paddingLeft:10,
    },
})

const buildingForm = () => {
    const[enteredinput , setenteredinput ] = useState('')
  return (
   <View style={styles.container}>
    <Text style={styles.text}>What is your name?</Text>
    <TextInput style={styles.inputbox}
     placeholder='Your name' 
      placeholderTextColor="#696969"
       onChangeText={(text)=>setenteredinput(text)}
       value={enteredinput}>
        
       </TextInput>
    <Button title="Say Hello" 
    onPress={()=>{
        setenteredinput('');
        alert(`Hello,${enteredinput}!`)}}></Button>
   </View>
  )
}

export default buildingForm