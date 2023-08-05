import React  from 'react'
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, ScrollView  } from 'react-native'


const helloWorld = () => {
  return (
    <View style={styles.TextArea}>
        <Text style={styles.text}>Hello, World!</Text>
    </View>
  )
}

export default helloWorld


const styles = StyleSheet.create({
    TextArea:{
        height:100,
        width:100,
       backgroundColor:"#a2d2ff",
       justifyContent:"center",
       alignItems:'center'
    },
    text:{
        fontSize:14,
    }
})

// Hello, World!

// When using JSX React needs to be in scope. This means you have to import it.
// import React from "react";

// Unlike working with HTML, the building blocks of our UI are not global. Therefore we need to
// import them.
// import { View, Text } from "react-native";

// TIP: A component is simply a function from which we return JSX.
// const App = () => {}

// TIP: Components can nest and have children. <View><Text></Text></View>

// TIP: Styling happens via the style prop. That style, in it's most basic form, is simply an
// object. style={{ ... }}

// We need to export App/Component so it's rendered on the screen. To work in this example app you
// need to use export default. Dont' worry about this right now, we'll talk about it later.
// export default App;
