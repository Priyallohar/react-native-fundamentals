import React, { useEffect, useState } from "react";
import { View, Text ,Button } from "react-native";

import { listener, listener2 } from "../support/component-lifecycle";

export default () => {
  const [updateCount, setUpdateCount] = useState(0);
  const [listenerName , setListenerName] = useState("cat")

useEffect(()=>{
  setUpdateCount(0)
  const unsubscribe = listener2(listenerName,()=>{
    setUpdateCount((currentCount)=>currentCount+1)
  })

  return()=>{
    unsubscribe
  }
},[listenerName])

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>The listener has updated {updateCount} time(s).</Text>
      <Text>Current listening to {listenerName} listener</Text>
      <Button title="Change listener Name"
      onPress={()=>{
        setListenerName(name =>{
          if(name==="cat"){
            return"dog"
          } else{
            return "cat"
          }
        })
      }}>

      </Button>
    </View>
  );
};
