import React from 'react';
import { View, Image, Text,Button, StyleSheet } from 'react-native';
import * as GoogleSignIn from 'expo-google-sign-in';

const Logout = ({setState,isDev}) => {    
    const signOut = () => {
        return async () => {
            try {
                if(!isDev){
                    await GoogleSignIn.signOutAsync();
                }
                setState(false,null);
            } catch (error) {
                console.error(error);
            }
        };
    }
    return (<Button style={styles.logoutBtn} onPress={signOut()} title="Logout"></Button>);
}
const styles = StyleSheet.create({
    logoutBtn: {
        flex: 1,
        width: 10
    }   
});

export default Logout;