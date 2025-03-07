import React from 'react'
import { TouchableOpacity } from 'react-native';

const Button = ({ text, onPress, buttonStyle = {} }) => (
    <TouchableOpacity
      onPress={onPress}
      style={{
        backgroundColor: "#ff637c",
        alignSelf: "center",
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginVertical: 15,
        ...buttonStyle,
      }}
    >
      <Text style={{ color: "#fff" }}>{text}</Text>
    </TouchableOpacity>
  );

  export default Button