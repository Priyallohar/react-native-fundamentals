import React from 'react'
import { View , Text, StyleSheet } from 'react-native'

const Square=({text , backgroundColor})=>(
   <View style={[styles.square,{backgroundColor:backgroundColor||"#a2d2ff"}]}>
        <Text>{text}</Text>
    </View>
)

const styling = () => {
  return (
    <View style = {styles.mainContainer}>

    {/* <View style={styles.square}> 
    <Text>Square 1</Text>
    </View>
    <View style={[styles.square,{backgroundColor:"#2a9d8f"}]}> 
    <Text>Square 2</Text>
    </View>
    <View style={[styles.square,{backgroundColor:"#f4a261"}]}> 
    <Text>Square 3</Text>
    </View> */}
    <Square text = "Square 1" />
    <Square text = "Square 2" backgroundColor="#2a9d8f"/>
    <Square text = "Square 3" backgroundColor="#f4a261"/>
    </View>
  )
}

const styles = StyleSheet.create(
    {
        mainContainer:{
            flex:1,
            flexDirection:"row",
            justifyContent:'space-around',
            alignItems:"center"
        },
        square:{
            height:100,
            width:100,
           backgroundColor:"#a2d2ff",
           justifyContent:"center",
           alignItems:'center'
        }
    }
)

export default styling
