import React from 'react'
import { Text, View,Alert, TouchableOpacity} from 'react-native'


const Button =({text , onPress})=>{
 return( <TouchableOpacity style={{
    alignSelf:"center",
    padding:10,
    marginTop:10,
    marginBottom:20,
    backgroundColor:"#f28482",
   
  }}
  
  onPress={onPress}>
    <Text style={{
      textAlign:"center",
      color:"#FFFFFF"
    }}>{text}</Text>
  </TouchableOpacity>
 )
}

const customComponent = () => {
  return (
   <View>
    <TouchableOpacity style={{
      alignSelf:"center",
      padding:10,
      marginTop:10,
      marginBottom:20,
      backgroundColor:"#f28482",
     
    }} onPress={()=>alert("Hello!")}>
    <Text 
    style={{
      textAlign:"center",
      color:"#FFFFFF"
    }}>Say Hello</Text>
    </TouchableOpacity>
    <TouchableOpacity
    style={{
      alignSelf:"center",
      width:130,
      padding:10,
     backgroundColor:"#64dfdf",
    }} onPress={()=>alert("Goodbye!")}>
    <Text style={{
      textAlign:"center",
      color:"#FFFFFF"
    }}>Say goodbye</Text>
    </TouchableOpacity>

   <Button text="Hello" onPress={()=>{alert("hiii")}}></Button>
   <Button text="goodBye" onPress={()=>{alert("goodbye")}}></Button>

   </View>
  )
}

export default customComponent




