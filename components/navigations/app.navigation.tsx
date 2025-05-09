import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../review/home';
import DetailScreen from '../review/detail';
import AboutScreen from '../review/about';
import AppHeader from './app.header';

const HomeLayout = () => {
    const Stack = createNativeStackNavigator<RootStackParamList>();

    return (
        <Stack.Navigator
        
        >
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ header: () => <AppHeader /> }}
            />
            <Stack.Screen
                name="Details"
                component={DetailScreen}
                options={{ title: 'Chi tiết Review' }}
            />
        </Stack.Navigator>
    )
}
const AppNavigation = () => {
    const Drawer = createDrawerNavigator();
    return (
        <Drawer.Navigator
        >
            <Drawer.Screen name="Home1"
                options={{ title: 'Trang chủ', header: () => <></> }}
                component={HomeLayout} />
            <Drawer.Screen
                name="About" component={AboutScreen}
                options={{
                    title: 'Thông tin',
                    header: () => <AppHeader />
                }}
            />
        </Drawer.Navigator>
    )
}

export default AppNavigation;
