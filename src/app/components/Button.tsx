import { StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const Button = ({onPress}:{onPress:any}) => {
  return (
    <TouchableOpacity 
    style={styles.button} 
    activeOpacity={0.8} 
    onPress={onPress}>
      <MaterialIcons name="add" style={styles.icon}/>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
button: {
    backgroundColor:"green",
    width: 70,
    height:70,
    borderRadius:80,
    justifyContent:"center",
    alignItems:"center",
    position:"absolute",
    bottom:35,
    right:24,
},
icon: {
    fontSize:30,
    color:"white",
},
})
export default Button;