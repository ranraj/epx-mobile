import React from 'react';
import { View, Image, Text, StyleSheet, Button } from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const ChapterDetail = ({ chapter }) => {
  //TODO : Move this logic to Backend
  console.log(chapter.content);

  return (
    <>
      <View style={styles.container}>

        <Text style={styles.name}>{chapter.name}</Text>
        {
          chapter.content ?
          <YoutubePlayer style={styles.player}
            height={200}
            play={false}
            videoId={chapter.content.youTubeVideoId}
          />
          :
          <Text>No Video content available</Text>
        }
        <Text style={styles.title}>{chapter.title}</Text>
        <Button style={styles.button} title="Try Test"></Button>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    flex: 1,
    margin: 8,
    borderWidth: 1,
  },
  player: {
    borderRadius: 4
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  name: {
    fontWeight: 'bold'
  },
  title: {
    margin: 5
  },
  button: {
    margin: 5
  }

});

export default ChapterDetail;
