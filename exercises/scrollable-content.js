import React from "react";
import { View, Text, StyleSheet,ScrollView } from "react-native";

const styles = StyleSheet.create({
  container: { backgroundColor: "#fff" },
  box: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
});

const Square = ({ text, bgColor = "#7ce0f9" }) => (
  <View style={[styles.box, { backgroundColor: bgColor }]}>
    <Text>{text}</Text>
  </View>
);

 const arr = [10,11,12,13,14,15,16,17,18,19]
export default () => {
 return ( <View style={styles.container}>
  <ScrollView>
  <Square text = "Square 1"></Square>
  <Square text = "Square 2"></Square>
  <Square text = "Square 3"></Square>
  <Square text = "Square 4"></Square>
  <Square text = "Square 5"></Square>
  <Square text = "Square 6"></Square>
  <Square text = "Square 7"></Square>
  <Square text = "Square 8"></Square>
  <Square text = "Square 9"></Square>
  {arr.map(item=>(
    <Square key = {item}text={`Square ${item}`}></Square>
  ))}
  </ScrollView>

  </View>)
};
