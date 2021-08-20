import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import epxService from '../api/EpxService';
import ChapterDetail from '../components/ChapterDetail';

const ResultsShowScreen = ({ navigation }) => {
  const [courseResult, setCourseResult] = useState("");
  const [chapterResult, setChapterResult] = useState(null);
  const id = navigation.getParam('id');

  //Remve this Extra call
  const getCourseResult = async id => {
    const response = await epxService.get(`/course/${id}`);    
    setCourseResult(response.data);
  };

  const getChaptersResult = async id => {
    const response = await epxService.get(`/course/${id}/chapters`);        
    setChapterResult(response.data);
  };
  useEffect(() => {
    getCourseResult(id);
  }, []);
  useEffect(() => {
    getChaptersResult(id);
  }, []);

  if (!chapterResult) {
    return null;
  }
  

  return (
    <View styles={styles.container}>
      <Text>{courseResult.name}</Text>
      <FlatList
        data={chapterResult}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          return (
            <ChapterDetail chapter={item}></ChapterDetail>
          )
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10        
  },
  chapterText: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  image: {
    height: 200,
    width: 300
  }
});

export default ResultsShowScreen;
