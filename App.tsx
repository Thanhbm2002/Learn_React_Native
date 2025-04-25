import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Header</Text>
        <Text style={styles.parent}>Parent
        <Text style={styles.child}>Child</Text></Text>
      </View>
      <Text style={styles.hello1}>Hello World
      </Text>
      <Text>Hello World 2</Text>
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
  hello1: {
    color: "red",
    fontSize: 60,
    borderColor: "green",
    borderWidth: 1,
    padding: 10
  },
  header: {
    fontSize:30,
    fontWeight: "600"
  },
  parent: {
    fontSize: 50,
    color: "green",
  },
  child: {
    fontSize: 50,
    color: "magenta"
  }

});
