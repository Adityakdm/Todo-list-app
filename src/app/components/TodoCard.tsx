import AntDesign from '@expo/vector-icons/AntDesign';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TodoData } from '..';

type Props = {
  title: string;
  iscompleted: boolean;
  onDelete: () => void; 
};
const TodoCard = ({title,iscompleted, onDelete }:TodoData) => {
    const [isActive,setisActive] = useState(iscompleted);
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8} onPress={()=> setisActive(!isActive)}>
        <View style={styles.todocontainer}>
          <AntDesign name={isActive?"checkcircle" : "checkcircleo"} size={24} color={isActive ? "lightgrey" :"black"} />
          
            
             
<View style={{
      flexDirection: 'row', 
      justifyContent: 'space-between', 
      alignItems:"center", 
      padding: 10, 
      backgroundColor: '', 
      borderRadius: 10,
      
    }}> 
    

      
      <TouchableOpacity onPress={onDelete} style={styles.deleteContainer}>
        <Text style={{ color: 'red', fontWeight: 'bold' }}>🗑️</Text>
      </TouchableOpacity>
    </View>
    </View>
            <Text style={[isActive ? styles.inactivetitles :styles.title]}>
        {title}</Text>
          </TouchableOpacity>
            
  );
};
 const styles = StyleSheet.create({
    container: {
        backgroundColor:"grey",
        padding: 20,
        flexDirection:"row",
        justifyContent: "center",
        borderRadius: 8,
    },
    todocontainer: {
        flexDirection:"row",
        alignItems:"center",
        gap:15,

    },
    title: {
        fontSize:15,
        color:"black",
        fontWeight:"500",
        flex:1,
        textAlign:"center",
        
    },
    inactivetitles: {
        fontSize:18,
        fontWeight:"300",
        color:"lightgrey",
    },
    deleteContainer:{
      marginRight:"auto",
      
    },
})




export default TodoCard;