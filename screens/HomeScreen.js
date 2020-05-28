/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Avatar, Image} from 'react-native-elements';
import {SET_ARTIST, SET_ARTIST_NAME} from '../store/redux/actions/types';
import {get_songs} from '../store/redux/actions/artist.actions';

const HomeScreen = () => {
  const dispatch = useDispatch();
  let {artist, isLoading} = useSelector(state => state.artist);
  //  console.log(artist);
  console.log(isLoading);
  const {songs} = artist;
  //  console.log(songs);

  const seeSong = () => {};
  const urlDynamicStyle = {flex: 1, flexDirection: 'row', marginTop: 15};

  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        <Avatar
          rounded
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
          containerStyle={{
            alignSelf: 'flex-end',
            marginRight: 15,
          }}
        />

        <Text style={styles.listener}>403 Listener</Text>
        <Text style={styles.streams}>654 Streams</Text>
        <Text style={styles.followers}>157 Followers</Text>
        <Text style={styles.days}>LAST 7 DAYS</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.line} />
        </View>
        <Text style={styles.people}>... 0 people listening now</Text>
      </View>
      <View />
      {/*nuevo*/}
      <View style={styles.container1}>
        <Text style={styles.topSong}>Your top playlist</Text>
        <Text style={styles.days1}>LAST 7 DAYS</Text>
      </View>
      {isLoading ? (
        <Text>Loadding</Text>
      ) : (
        songs.map((song, index) => (
          <TouchableOpacity style={styles.container1} key={index}>
            <View>
              <View style={{flex: 1, flexDirection: 'row', marginTop: 5}}>
                <Image
                  source={{
                    uri: song.image_url,
                  }}
                  style={
                    index === 0
                      ? {width: 120, height: 120}
                      : {width: 120 - 10 * index, height: -10 * index}
                  }
                />
                <View style={{marginLeft: 10}}>
                  <Text style={{fontSize: 20, color: '#eeeeee'}}>
                    {song.artists}
                  </Text>
                  <Text style={{fontSize: 18, color: '#eeeeee'}}>
                    {song.song_name}
                  </Text>
                  <Text style={{fontSize: 16, color: '#eeeeee'}}>
                    {song.album}
                  </Text>
                  <Text style={{fontSize: 14, color: '#eeeeee'}}>
                    {song.total_plays_number} Streams
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))
      )}
      <View style={styles.container1}>
        <Text style={styles.topSong}>New for you</Text>
      </View>
      {isLoading ? (
        <Text>Loadding</Text>
      ) : (
        songs.map((song, index) => (
          <TouchableOpacity style={styles.container1} key={index}>
            <View>
              <View style={{flex: 1, flexDirection: 'row', marginTop: 5}}>
                <Image
                  source={{
                    uri: song.image_url,
                  }}
                  style={
                    index === 0
                      ? {width: 120, height: 120}
                      : {width: 120 - 10 * index, height: -10 * index}
                  }
                />
                <View style={{marginLeft: 10}}>
                  <Text style={{fontSize: 20, color: '#eeeeee'}}>
                    {song.artists}
                  </Text>
                  <Text style={{fontSize: 18, color: '#eeeeee'}}>
                    {song.song_name}
                  </Text>
                  <Text style={{fontSize: 16, color: '#eeeeee'}}>
                    {song.album}
                  </Text>
                  <Text style={{fontSize: 14, color: '#eeeeee'}}>
                    {song.total_plays_number} Streams
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))
      )}
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#17181a',
  },
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#273347',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 20,
  },
  listener: {
    paddingTop: 10,
    color: '#eeeeee',
    fontSize: 30,
  },
  streams: {
    paddingTop: 10,
    color: '#eeeeee',
    fontSize: 30,
  },
  followers: {
    paddingTop: 10,
    color: '#eeeeee',
    fontSize: 30,
  },
  days: {
    paddingTop: 10,
    color: '#eeeeee',
  },
  people: {
    paddingTop: 10,
    color: '#eeeeee',
    fontSize: 15,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#eeeeee',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  container1: {
    flex: 1,
    padding: 20,

    paddingTop: 10,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  topSong: {
    color: '#eeeeee',
    fontSize: 20,
  },
  days1: {
    paddingTop: 10,
    color: '#535353',
  },
});
