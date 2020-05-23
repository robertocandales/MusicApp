/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Avatar, Image} from 'react-native-elements';
import SongsScreen from './SongsScreen';
import PlaylistScreen from './PlaylistScreen';

const MusicScreen = () => {
  const [enableComponent, setEnableComponent] = React.useState(true);
  const songs = () => {
    setEnableComponent(true);
  };
  const playlists = () => {
    setEnableComponent(false);
  };
  const styleButtomEnable = {
    color: '#eeeeee',
    fontSize: 20,
    marginRight: 25,
    borderColor: '#eeeeee',
    borderBottomWidth: 1,
  };
  const styleButtomDesable = {
    color: '#eeeeee',
    fontSize: 20,
    marginRight: 25,
  };

  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.music}>Music</Text>
        <Avatar
          rounded
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
          containerStyle={
            {
              //alignSelf: 'flex-end',
              //marginRight: 15,
            }
          }
        />
      </View>
      <View>
        <View style={styles.container1}>
          <TouchableOpacity onPress={songs}>
            <Text
              style={enableComponent ? styleButtomEnable : styleButtomDesable}>
              Songs
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={playlists}>
            <Text
              style={enableComponent ? styleButtomDesable : styleButtomEnable}>
              Playlist
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{padding: 20, marginTop: -10}}>
        {enableComponent ? <SongsScreen /> : <PlaylistScreen />}
      </View>
    </ScrollView>
  );
};

export default MusicScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#17181a',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 20,
  },
  music: {
    color: '#eeeeee',
    fontSize: 30,
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',

    padding: 20,
  },
});
