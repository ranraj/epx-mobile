import React from 'react';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen';
import HomeScreen from './src/screens/HomeScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';
import HeaderBar from './src/components/HeaderBar';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'EPX',
     
      headerStyle: {        
        elevation: 0,
        shadowOpacity: 0
      },
      headerTintColor: '#333333',
      headerTitleStyle: {
        fontWeight: 'bold',
        padding:5,
        margin:5
      },
      headerRight : () => <HeaderBar/>      
    },
  }
);
//StatusBar.setBackgroundColor("#fffff");
const styles = StyleSheet.create({
  StatusBar: {
    height: 20,
    backgroundColor: '#6a11cb'
  },
  resultCountText: {
    margin: 10,
  },
  headerBar: {

  }

});


export default createAppContainer(navigator);
