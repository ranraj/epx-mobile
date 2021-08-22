import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';

import SearchScreen from './SearchScreen';
import ResultsShowScreen from './ResultsShowScreen';

/**
 * Message screen
 * @returns 
 */
const MessageScreen = () => {
   return (
     <View style={styles.constainer}>
      <Text>Message not available for your account</Text>
     </View>
   );
};

 
const styles = StyleSheet.create({
  constainer : {
    margin : 10
  }
});
export default MessageScreen;
