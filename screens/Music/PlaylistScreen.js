/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import ButtonDropDown from './SubComponents/ButtonDropDown';
import { StyleSheet, Text, View, TouchableOpacity, ActivityIndicator } from 'react-native';
import { Image } from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useSelector } from 'react-redux';

const PlaylistScreen = () => {
  const { artist, isLoading } = useSelector((state) => state.artist);

  const [time1, settime1] = useState('Ultimos 28 dias');
  const time = (timeSelected) => {
    settime1(timeSelected);
  };
  const containerPar = {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
  };
  const containerImPar = {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: '#282828',
  };
  return (
    <View>
      <ButtonDropDown timeSelected={time} />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 30,
        }}>
        <Text style={{ fontSize: 16, color: '#535353' }}>{time1}</Text>
        <Text style={{ fontSize: 16, color: '#535353' }}>STREAMS</Text>
      </View>

      {isLoading ? (
        <View style={[styles.container3, styles.horizontal]}>
          <ActivityIndicator size='large' color='#eeeeee' />
        </View>
      ) : (
        artist.songs.map((song, index) => (
          <TouchableOpacity style={index % 2 ? containerPar : containerImPar} key={index}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <Image
                source={{
                  uri: song.image_url,
                }}
                style={{ width: 50, height: 50 }}
              />
              <View>
                <Text style={{ fontSize: 15, color: '#eeeeee', marginLeft: 10 }}>
                  {song.song_name}
                </Text>

                <Text style={{ fontSize: 15, color: '#eeeeee', marginLeft: 10 }}>{song.album}</Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <Text style={{ fontSize: 15, color: '#eeeeee', marginRight: 15 }}>
                {song.total_plays_number}
              </Text>
              <MaterialCommunityIcons name='chevron-right' color='#535353' size={30} />
            </View>
          </TouchableOpacity>
        ))
      )}
    </View>
  );
};

export default PlaylistScreen;

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  music: {
    color: '#eeeeee',
    fontSize: 20,
  },
  container3: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
