import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';

const Addtodo = ({isActive, onClose,value, onChangetext, onPressSubmit}:{isActive:boolean,onClose:any,value:string,onChangetext:(item:string)=>void; onPressSubmit:()=> void;}) => {
  return (
    <Modal isVisible={isActive} 
    style={styles.Modal} 
    onBackButtonPress={onClose} 
    onBackdropPress={onClose}>
      <View style = {styles.container}>
        <Text style={styles.title}> Add Todo</Text>
        <TextInput style={styles.inputcontainer}
        placeholder='Enter Your Todo'
        value={value}
        onChangeText={onChangetext}

        />
        <TouchableOpacity style ={styles.button} activeOpacity={0.8} onPress = {onPressSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create ({
Modal:{
margin:0,
justifyContent:"flex-end",
},
container: {
    padding:20,
    backgroundColor:"white",
    borderTopEndRadius:20,
    borderTopStartRadius:20,
    gap:20,
},
title:{
    fontSize:20,
    color:"black",
    fontWeight:"bold",

},
inputcontainer:{
    borderWidth:1,
    paddingHorizontal: 20,
    paddingVertical:15,
    borderRadius:10,
    fontSize:16,
    color:"black",
    borderColor:"black",
},
button: {
backgroundColor:"green",
padding:20,
borderRadius: 10,
justifyContent: "center",
alignItems:"center",
},
buttonText: {
    textAlign:"center",
    fontSize:16,
    fontWeight:"600",
    color:"white",
    textTransform:"uppercase",
},
})
export default Addtodo;