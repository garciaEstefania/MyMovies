import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Login from '../screens/Auth/login';
import Home from '../screens/home';
import Search from '../screens/search';

export type StackParamList = {
    Home: undefined;
    Login: undefined;
    Search: {searchText: string};
};

const Stack = createStackNavigator<StackParamList>();

const AppNavigator = () => {

    const [token, setToken] = useState(null);

    useEffect(() => {
        const getToken = async () => {
            try {
                const value: string | null = await AsyncStorage.getItem('@token');
                if ((value) !== null) {
                    console.log('stored token: ', JSON.parse(value).token);
                    setToken(JSON.parse(value)?.token)
                }
            } catch (e) {
                throw e;
            }
        }
        getToken();
    }, [token])

    if (token) {
        return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Search" component={Search} />
            </Stack.Navigator>
        </NavigationContainer>
        )
    } else{
        return (
            <NavigationContainer>
                <Stack.Navigator initialRouteName={"Login"} screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="Search" component={Search} />
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
export default AppNavigator;