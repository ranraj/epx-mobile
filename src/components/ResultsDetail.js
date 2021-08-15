import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import SVGIcon from '../components/SVGIcon';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <View style={styles.svg}>
        <SVGIcon iconTitle={result.name}></SVGIcon>
      </View>
      <View styles={styles.infocontainer}>
        <Text style={styles.name}>{result.name}</Text>
        <Text style={styles.likes}>
          {result.rating != null ? result.rating : 0} Stars, {result.likedBy != null ? result.likedBy.length : 0} Likes
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
    borderWidth: 1,
    borderColor: "#ccccff",
    backgroundColor: '#e6e6e6',  
    padding: 1,
    borderRadius: 15
  },
  svg: {
    height: 150,
    width: 150,
    margin: 30
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold',
    margin : 10
  },
  likes:{
    marginLeft : 10
  },
  infocontainer:{
    margin : 10,
    marginBottom : 10,
    padding : 10,
    borderWidth: 1,
    borderColor: 'red'
  }
});

export default ResultsDetail;
