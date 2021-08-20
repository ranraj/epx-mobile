import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';
import * as GoogleSignIn from 'expo-google-sign-in';
import epxService from '../api/EpxService';

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
            <View style={styles.headline}>
                <Text >Please login using google account</Text>
            </View>
            <View style={styles.topBox}>
                <View>
                    <Button title="Google Sign" onPress={signIn()}></Button>
                </View>
            </View>
        </View>);
}
const styles = StyleSheet.create({
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

});

export default Login;