import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import React, { use, useState } from 'react';
import Header from './components/header';
import TodoCard from './components/TodoCard';
import Button from './components/Button';
import Addtodo from './components/Addtodo';

export interface TodoData {
  title: string;
  iscompleted: boolean;
  
}

const Home = () => {
  const [open,setOpen] = useState(false);
  const [todo,setTodo]= useState("");
  const [data,setData] = useState<TodoData[]>([]);
  
  const onSubmitTodo = () => {
   if(!todo) {
    Alert.alert("Warning!","Please enter your Todo");
   }
   let finalData:TodoData = {
    id: Date.now(),
    title:todo,
    iscompleted:false,
    
   };
   setData([...data, finalData]);
   setTodo("");
   setOpen(false);
   
  };
  const handleDelete = (todoToDelete : TodoData) => {
  setData(data.filter((item) => item.id !== todoToDelete.id));
};
let finalData: TodoData = {
  id: Date.now(), 
  title: todo,
  iscompleted: false,
};
type TodoData = {
  id: number;
  title: string;
  iscompleted: boolean;
};


  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.todocontainer}>
        <FlatList data={data}
        contentContainerStyle={{ gap: 10}}
        ListEmptyComponent={() => <Text style = {styles.nodatafound}>No Tasks Left</Text>}
         renderItem={({item}) =>{
          return( <TodoCard title={item.title} iscompleted={item.iscompleted} onDelete={() => handleDelete(item)}/>

        );
        }}/>
      
      
      </View>
      <Addtodo isActive={open} onClose={() => setOpen(false)}value={todo} onChangetext={(e)=>setTodo(e)}
        onPressSubmit={onSubmitTodo}/>
      <Button onPress={() => setOpen (true)}/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor:"white",
    flex:1,
  },
  todocontainer: {
    padding: 20,
    gap:10,
  },
  nodatafound: {
    fontSize:16,
    textAlign: "center",
    color:"grey",
    marginTop:200,
  },
});
export default Home;