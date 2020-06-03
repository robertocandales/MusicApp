/* eslint-disable react-native/no-inline-styles */

import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {SET_ARTIST, SET_ARTIST_NAME} from '../store/redux/actions/types';
import {get_songs, set_artist} from '../store/redux/actions/artist.actions';
import Autocomplete from 'react-native-autocomplete-input';
import Artist from "../models/Artist";
//import Artist from '../models/Artist';

const AccountScreen = () => {
  const artists = [
    new Artist('Hans Zimmer'),
    new Artist('Justin bieber'),
    new Artist('Sebastian Yatra'),
    new Artist('Canserbero'),
    new Artist('Hillsong'),
    new Artist('Alicia Keys'),
    new Artist('Rammstein'),
    new Artist('sia'),
    new Artist('Fisher'),
    new Artist('Tiesto'),
    new Artist('Metallica'),
    new Artist('Ludwig van Beethoven'),
    new Artist('Drake'),
    new Artist('Daft Punk'),
    new Artist('Linkin Park'),
  ];
  const dispatch = useDispatch();
  // test function... to see if we retrieve different artists data.
  //  function onClick(event) {
  //    const random_artist = artists[Math.floor(Math.random() * artists.length)];
  //    //dispatch({type: SET_ARTIST, payload: new Artist(random_artist)});
  //    dispatch(set_artist({user: random_artist, top: 5}));
  //    //dispatch(get_songs({user: random_artist, top: 5}));
  //  }

  //  let {artist} = useSelector(state => state.artist); // get the variable from the store
  //  let {songs} = artist;
  //  console.log('account artist', artist);
  const selectArtist = _artist => {
    dispatch(set_artist(_artist));
  };
  const containerPar = {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //marginTop: 5,
    //marginBottom: 5,
  };
  const containerImPar = {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    //marginTop: 5,
    //marginBottom: 5,
    backgroundColor: '#282828',
  };

  const [query, setQuery] = React.useState('');
  console.log(query);

  const comp = (a, b) => a.toLowerCase().trim() === b.toLowerCase().trim();
  return (
    <View style={styles.main}>
      <ScrollView>
        <View style={styles.container}>
          <Text style={{fontSize: 25, color: '#eeeeee', marginTop: 15}}>
            Account
            {/*{JSON.stringify(songs)}*/}
          </Text>
          <Text style={{fontSize: 20, color: '#eeeeee', marginTop: 15}}>
            Select your user
          </Text>

          {artists.map((artist1, index) => (
            <View style={index % 2 ? containerPar : containerImPar} key={index}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: 10,
                }}>
                <TouchableOpacity onPress={() => selectArtist(artist1)}>
                  <Text
                    style={{
                      fontSize: 20,
                      color: '#eeeeee',
                      marginTop: 0,
                    }}>
                    {artist1.name}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/*Autocomplete field maybe  be used to find user in the future*/}
      {/*<View style={styles.autocompleteContainer}>
        <Autocomplete
          //  data={data}
          data={data.length === 1 && comp(query, data[0]) ? [] : data}
          //  listStyle={{zIndex: 1, position: 'absolute'}}
          defaultValue={query}
          onChangeText={text => setQuery({query: text})}
          renderItem={({item, index}) => (
            <TouchableOpacity
              onPress={() => setQuery({query: item})}
              key={index}>
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
          //  hideResults={true}
          placeholder="Enter your User"
          autoCapitalize="none"
          autoCorrect={false}
          //  keyboardShouldPersistTaps="always"
        />
      </View>*/}
    </View>
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
  autocompleteContainer: {
    flex: 1,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
    zIndex: 1,
  },
});
