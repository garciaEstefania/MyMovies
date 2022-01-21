import React, { useEffect, useState } from "react";
import { Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from "@react-navigation/stack";
import { StackParamList } from "../../navigation/AppNavigator";
import styles from "./styles/style";
import Api from '../../api';

type loginScreenNavigationType = StackNavigationProp<StackParamList, "Login">

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    
    const navigation = useNavigation<loginScreenNavigationType>();

    useEffect(() => {
        console.log(showPassword)
    }, [showPassword])

    const signIn = async () => {
        try {
            const response = await Api(email, password);
            if (response?.token) {
                const token = await AsyncStorage.setItem('@token', JSON.stringify(response));
                navigation.navigate("Home")
            } else{
                Alert.alert('Oops something went wrong...', `${response?.error}`)
            }
        } catch (e) {
            throw e;
        }  
    };

    return(
        <KeyboardAvoidingView style={{ flex: 1 }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.mainContainer}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Welcome</Text>
                        <Text style={styles.title}>to MyMovies</Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            placeholder="Email Address"
                            placeholderTextColor='lightgray'
                            style={styles.input}
                            onChangeText={text => setEmail(text)}
                            autoCapitalize={'none'}
                            value={email}
                            blurOnSubmit={false}
                            returnKeyType='next'
                        />
                    </View>
                    <View style={styles.inputPassContainer}>
                        <TextInput
                            placeholder="Password"
                            placeholderTextColor='lightgray'
                            //style={styles.input}
                            onChangeText={text => setPassword( text )}
                            autoCapitalize={'none'}
                            value={password}
                            secureTextEntry={showPassword ? false : true}
                        />
                        <TouchableOpacity onPress={() => showPassword ? setShowPassword(false) : setShowPassword(true)}>
                            <Text>Show</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity
                            onPress={()=>signIn()}
                            style={styles.btnSignIn}
                        >
                            <Text style={styles.btnText}>Sign In</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

export default Login;