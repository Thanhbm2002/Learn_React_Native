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
import AppNavigation from './components/navigations/app.navigation'
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context'

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

  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </SafeAreaView>
   
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

