import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from './components/review/home'
import DetailScreen from './components/review/detail'
import AboutScreen from './components/review/about'
import { useFonts } from 'expo-font'; 
import * as SplashScreen from 'expo-splash-screen'; 
import { useEffect } from 'react';
import { OPENSANS_REGULAR } from "././utils/const";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator} from '@react-navigation/drawer';


SplashScreen.preventAutoHideAsync();

const App = () => {
  const [loaded, error] = useFonts({
    [OPENSANS_REGULAR]: require('./assets/fonts/Open_Sans/OpenSans-Regular.ttf'),
  });
 
  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);
 
  if (!loaded && !error) {
    return null;
  }


  const Stack = createNativeStackNavigator<RootStackParamList>();
  const Drawer = createDrawerNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
        options={{title: 'Trang chủ'}} 
        />
        <Stack.Screen name="Details" component={DetailScreen}
        options={{title: 'Chi tiết'}}  />
      </Stack.Navigator> */}
      
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen}
        options={{title: 'Trang chủ'}} 
        />
        <Drawer.Screen name="Details" component={DetailScreen}
        options={{title: 'Chi tiết'}}  />
        <Drawer.Screen name="About" component={AboutScreen}
        options={{title: 'Thông tin'}}  />
      </Drawer.Navigator>
      
    </NavigationContainer>

  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
 });

