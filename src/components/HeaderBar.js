import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

const HeaderBar = () => {
     
    return (
        <View >                
        <Icon  name="user-circle" size={30} color="darkblue"/>        
    </View>);
}
 
const styles = StyleSheet.create({    
    
    headerBar: {
        flex: 1,
    marginTop: 8,
    color : 'red',
    backgroundColor: "aliceblue",     
    },
    headerText : {
        fontWeight:'bold',
        color : 'red'
    },
    headerProfileIcon : {
        alignSelf: 'flex-end',
    }
});

export default HeaderBar;