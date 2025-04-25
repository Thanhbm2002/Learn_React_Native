import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [name, setName] = useState<string>("Try me");
  const [test, setTest] = useState({
    name: 'ten',
    age: 25
  });
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 60, fontWeight: "600"}}>{name}</Text>
      <Text style={{ fontSize: 60, fontWeight: "600"}}>{test.name} {test.age}</Text>
      <Text style={{ fontSize: 60, fontWeight: "600"}}>{JSON.stringify(test)}</Text>
      <Text style={{ fontSize: 60, fontWeight: "600"}}> count = {count}</Text>
      <View>
       <Button title='Increase' onPress={() => setCount(count +1)}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
