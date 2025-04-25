import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, ScrollView, TextInput } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const[students, setStudents] = useState([
    {id: 1, name: "Thanh1", age: 18},
    {id: 2, name: "Thanh2", age: 19},
    {id: 3, name: "Thanh3", age: 20},
    {id: 4, name: "Thanh4", age: 21},
    {id: 5, name: "Thanh5", age: 22},
    {id: 6, name: "Thanh6", age: 23},
    {id: 7, name: "Thanh7", age: 24},
    {id: 8, name: "Thanh8", age: 25},
    {id: 9, name: "Thanh9", age: 26},
    {id: 10, name: "Thanh10", age: 27},
    {id: 11, name: "Thanh1", age: 18},
    {id: 12, name: "Thanh2", age: 19},
    {id: 13, name: "Thanh3", age: 20},
    {id: 14, name: "Thanh4", age: 21},
    {id: 15, name: "Thanh5", age: 22},
    {id: 16, name: "Thanh6", age: 23},
    {id: 17, name: "Thanh7", age: 24},
    {id: 18, name: "Thanh8", age: 25},
    {id: 19, name: "Thanh9", age: 26},
    {id: 20, name: "Thanh10", age: 27}
  ])
  return (
    <ScrollView style={styles.container}>
      <Text style={{ fontSize: 60}}>Hello World</Text>
      <View>
        {students.map(item => {
          return (
            <View  key={item.id} style={{
              backgroundColor: "pink",
              marginBottom: 30,
              padding: 15}}>
              <Text>{item.name}</Text>
            </View> 
          )
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

});
