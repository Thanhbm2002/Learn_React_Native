import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, Button, ScrollView, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

interface IToDo {
  id: number;
  name: string
}

export default function App() {

  const[toDo, setToDo] = useState("");
  const[listToDo, setListToDo] = useState<IToDo[]>([]);

  function randomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min +1) + min);
  }

  const handleAddToDo =() => {
    setListToDo([...listToDo, 
      {id:randomInt(2,10000), name: toDo }
    ]);
    setToDo("")
  }

  const deleteToDo = (id: number) =>{
    const newToDo = listToDo.filter(item => item.id !== id)
    setListToDo(newToDo)
  }

  return (
    <View style={styles.container}>
      {/* header*/}

      <Text style={styles.header}>To-do App</Text>

      {/* form  */}
      <View>
        <TextInput style={styles.toDoInput}
          value={toDo}
          onChangeText={(value) => setToDo(value)}
        />
        <Button title='Add To-do'
          onPress={handleAddToDo}
        />
      </View>
  
      {/* list  */}
      <View style={styles.body}>
        <FlatList 
        data={listToDo}
        renderItem={({item}) =>{
          return (
            <Pressable onPress={() => deleteToDo(item.id)}>
              <Text style={styles.todoItem}>{item.name}</Text>
            </Pressable>
          )
        }}

        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "cyan",
    paddingHorizontal: 20,
    textAlign: "center",
    fontSize: 50, 
  },
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  toDoInput: {
    borderWidth: 1,
    borderColor:"gray",
    padding: 5,
    margin: 15,
  },
  body: {
    paddingHorizontal: 10,
    marginBottom:20,
  },
  todoItem: {
    fontSize: 20,
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
  },
});

