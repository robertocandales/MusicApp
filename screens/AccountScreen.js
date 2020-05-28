/* eslint-disable react-native/no-inline-styles */

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {SET_ARTIST, SET_ARTIST_NAME} from '../store/redux/actions/types';
import {get_songs} from '../store/redux/actions/artist.actions';
import {Button} from 'react-native-elements';
import Artist from '../models/Artist';

const AccountScreen = () => {
  const artists = [
    'Justin bieber',
    'Sebastian Yatra',
    'Hillsong',
    'Alicia Keys',
  ];

  // test function... to see if we retrieve different artists data.
  function onClick(event) {
    const random_artist = artists[Math.floor(Math.random() * artists.length)];
    dispatch({type: SET_ARTIST, payload: new Artist(random_artist)});
    dispatch(get_songs({user: artist.name, top: 5}));
  }

  let {artist} = useSelector(state => state.artist); // get the variable from the store
  let {songs} = artist;
  console.log(artist);

  const dispatch = useDispatch(); // maybe it would be better to import the reference of this called function in all the places we want tp dispatch actions

  useEffect(() => {
    dispatch(get_songs({user: artist.name, top: 5}));
  }, []); // todo: I don't know why if I watch the artist variable, useEffect seems to executes itself twice..

  // todo: implement a button to see if the songs variable is reactive
  // todo: and then proves if I can detructuring the object on the initial state and so on....
  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        <Text style={{fontSize: 20, color: '#eeeeee', marginTop: 15}}>
          Account
          {JSON.stringify(songs)}
        </Text>

        <Button title={'Check'} onPress={onClick} />
      </View>
    </ScrollView>
  );
};

export default AccountScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#17181a',
  },
  container: {
    flex: 1,
    //flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
});
