import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, TextInput } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<String>("");
  const [age, setAge] = useState<number>();
  return (
    <View style={styles.container}>
      <View>
      <Text style={{ fontSize: 60, fontWeight: "600"}}>Name: {name} </Text>
      <TextInput
        multiline
        autoCapitalize={"words"}
        style={{
          borderColor: "green",
          borderWidth: 1,
          width:200,
          padding:10}}
        onChangeText={(value) => setName(value)} />
      </View>
      
      <View>
      <Text style={{ fontSize: 60, fontWeight: "600"}}>Age: {age} </Text>
      <TextInput
        multiline
        style={{
          borderColor: "green",
          borderWidth: 1,
          width:200,
          padding:10}}
        onChangeText={(value) => setAge(+value)}
        keyboardType='numeric'
        maxLength={2}
      />
      </View>

      <Text style={{ fontSize: 60, fontWeight: "600"}}> count = {count}</Text>
      <Button title='Increase' onPress={() => setCount(count +1)}/>
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
