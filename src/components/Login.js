import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';

import * as GoogleSignIn from 'expo-google-sign-in';
import epxService from '../api/EpxService';
import Icon from 'react-native-vector-icons/Zocial';

const Login = ({ setLoggedIn, setUserInfo, setAuthToken, appSettings }) => {
    //Dummy user to escape the login flow if dev flag is enabled in SearchScreen
    const dummyUserForDev = { user: { email: "ranjithraj.d@gmail.com", "firstName": "Ranjith Raj" } };

    const createEpxUserToken = async user => {
        const params = JSON.stringify({
            "email": user.email,
            "username": user.firstName
        });
        try {
            const response = await epxService.post(`/user/token/oauth`, params, {
                "headers": {
                    "content-type": "application/json",
                    "authKey": appSettings.authKey

                }
            });
            setAuthToken(response.data);

        } catch (err) {
            console.log("search api", err);
            setErrorMessage('Something went wrong');
        }
    };


    const signIn = () => {
        return async () => {
            try {
                if (!appSettings.isDevMode) {
                    await GoogleSignIn.askForPlayServicesAsync();
                    const { type, user } = await GoogleSignIn.signInAsync();
                    if (type === 'success') {
                        setLoggedIn(true);
                        setUserInfo({ user });
                        createEpxUserToken({ user });
                    }
                } else {
                    //Dummy data for dev                    
                    setLoggedIn(true)
                    setUserInfo(dummyUserForDev);
                    createEpxUserToken(dummyUserForDev);
                }

            } catch ({ message }) {
                alert('login: Error:' + message);
            }
        };
    }

    // const syncUserWithStateAsync = async () => {
    //     const user = await GoogleSignIn.signInSilentlyAsync();
    //     setState(true, { user });
    // };
    return (
        <View style={styles.container}>         
            <View style={styles.topBox}>
                <View style={styles.signin}>
                <TouchableOpacity onPress={signIn()} style={styles.signin}>
                    <Icon style={styles.googleSignIn} name="google" size={iconStyleProperties.google.singinLogoSize} color={iconStyleProperties.google.singinLogoColor}/>
                    <Text style={styles.signinText}>Sign in with Google</Text>                    
                </TouchableOpacity>    
                </View>
            </View>
        </View>);
}
const iconStyleProperties = {
    google : {
        singinLogoSize : 25,
        singinLogoColor : 'white'
    }
}
const styles = StyleSheet.create({    
    googleSignIn : {
        padding : 2
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    topBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headline: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 0,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
    },
    signin :{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: "#dd4b39",
        marginLeft : 30,
        marginRight : 30,
        padding : 5,
        borderRadius : 5
    },
    signinText :{
        color : 'white',  
        marginTop : 5,      
        fontSize: 18,
    }

});

export default Login;