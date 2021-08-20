import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';
import Login from '../components/Login';
import Logout from '../components/Logout';


const EPX_API_KEY= "<EPX_API_KEY>";

const SearchScreen = () => {

  const dev = false; //Enable this flag to bypass the google auth
  const appSettings = { isDevMode:dev,authKey: EPX_API_KEY}
  const [term, setTerm] = useState('');

  const [loggedIn, setLoggedIn] = useState(false);
  const [authToken, setAuthToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const [searchApi, results, errorMessage] = useResults(loggedIn, userInfo,authToken);

  const recommended = () => {
    return results.filter((item) => item.likedBy === null);
  };
  const mostLiked = () => {
    return results.filter((item) => item.likedBy != null);
  };

  const setLoginStatus = (loggedInState, user) => {
    setLoggedIn(loggedInState);
    setUserInfo(user);     
  }

  if (loggedIn) {
    return (
      <>
        <View>
          <SearchBar
            term={term}
            onTermChange={setTerm}
            onTermSubmit={() => searchApi(term)}
          >
          </SearchBar>
          <Logout setState={setLoginStatus} isDev={dev}></Logout>
        </View>

        {dev ? <Text styles={styles.resultCountText}>Devmode</Text> : null}

        {results ? <Text styles={styles.resultCountText}>Found {results.length} results</Text> : null}

        <ScrollView>
          <ResultsList
            results={recommended()}
            title="Recommended"
          />
          <ResultsList results={mostLiked()} title="Most liked" />
        </ScrollView>
      </>
    );
  } else {
    return <Login setLoggedIn={setLoggedIn} setUserInfo={setUserInfo} setAuthToken={setAuthToken}
    appSettings={appSettings}></Login>;
  }
};

const styles = StyleSheet.create({
  resultCountText: {
    margin: 10,
  }
});

export default SearchScreen;
