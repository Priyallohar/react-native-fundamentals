// Using State and Props

// useState is a hook that is a named export from React.
import React, {useState} from "react";
import { Text, Button, View } from "react-native";

export default () => {
  const [presscount, setPressCount] = useState(0)
  
  return (
    <View style={{ alignItems: "center", marginTop: 20 }}>
      <Text>You've pressed the button: {presscount} time(s)</Text>
      <Button title="Press me" onPress={()=>setPressCount(presscount+1)} />
      <Button title={`Press ${presscount} times `} onPress={()=>setPressCount(presscount+1)} />
    </View>
  );
};
