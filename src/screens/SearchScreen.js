import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {

  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();



  const recommended = () => {
    return results.filter((item) => item.likedBy === null);
  };
  const mostLiked = () => {
    return results.filter((item) => item.likedBy != null);
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={recommended()}
          title="Recommended"
        />
        <ResultsList results={mostLiked()} title="Most liked" />

      </ScrollView>
    </>
  );

};

const styles = StyleSheet.create({});

export default SearchScreen;
