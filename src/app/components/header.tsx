import { View, Text, StyleSheet, StatusBar, TouchableOpacity } from 'react-native';
import React from 'react';
import Feather from '@expo/vector-icons/Feather';

const Header = () => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={"green"} barStyle={"light-content"}/>
      <Text style={styles.title}>My To-do</Text>
      
    </View>
  );
};


const styles = StyleSheet.create({
container: {
    backgroundColor: "green",
    height: 100,
    justifyContent:"center",
    alignItems: 'center',
},
title: {
    textAlign:"center",
    fontSize: 30,
    fontWeight:"bold",
    color:"white",

},

});
export default Header;
