import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator, BottomTabBar } from 'react-navigation-tabs';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import SearchScreen from '../screens/SearchScreen';
import MessageScreen from '../screens/MessageScreen';
import Icon from 'react-native-vector-icons/AntDesign';
import SearchBar from '../components/SearchBar';

const TabBarComponent = (props) => <BottomTabBar {...props} />;

/**
 * Core landing Page
 * Maintains the login and user state
 * @returns 
 */
const HomeScreen = () => {
  const [searchApi, results, errorMessage] = useResults('');
  return (
    <>      
      <ScrollView>
        <ResultsList
          results={results}
          title="Trending"
        />        
      </ScrollView>
    </>
  );
};

const tabScreens = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null,
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name="home" size={30} color="darkblue" />;
        },
      }
    },
    Search: {
      screen: SearchScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name="search1" size={30} color="darkblue" />;
        },
      }
    },
    Message: {
      screen: MessageScreen,
      navigationOptions: {
        tabBarIcon: ({ focused, tintColor }) => {
          return <Icon name="message1" size={30} color="darkblue" />;
        },     
    }
    }
  },
  {
    initialRouteName: 'Home',
    tabBarComponent: (props) => (
      <TabBarComponent {...props} style={styles.tabBarComponent} />
    ),
  }
);

const styles = StyleSheet.create({
  tabBarComponent: {
    borderTopColor: '#605F60',
    //backgroundColor: '#808080',    
    margin: 3,
    padding:5
  }
});
export default createAppContainer(tabScreens);
