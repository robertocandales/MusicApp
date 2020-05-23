/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import ButtonDropDown from './SubComponents/ButtonDropDown';
import {Image} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SongsScreen = () => {
  const songs = [
    {
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTZ6AxZMqSqTNHLquYh4EC73QLcQ-ZbO2ZZaPD3J4o11sXq0AV&usqp=CAU',
      name: 'Rhapsody Hungarian',
      views: '7m',
    },
    {
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Liszt-1870.jpg/220px-Liszt-1870.jpg',
      name: 'Rhapsody Hungarian',
      views: '5m',
    },
    {
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQU1vBpqTr0-PVK7PUXwlIJBHPOz54l8xVpbLglWFBDYh13Hg82&usqp=CAU',
      name: 'nocturne in c sharp minor',
      views: '2m',
    },
    {
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTZ6AxZMqSqTNHLquYh4EC73QLcQ-ZbO2ZZaPD3J4o11sXq0AV&usqp=CAU',
      name: 'Rhapsody Hungarian',
      views: '7m',
    },
    {
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Liszt-1870.jpg/220px-Liszt-1870.jpg',
      name: 'Rhapsody Hungarian',
      views: '5m',
    },
    {
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQU1vBpqTr0-PVK7PUXwlIJBHPOz54l8xVpbLglWFBDYh13Hg82&usqp=CAU',
      name: 'nocturne in c sharp minor',
      views: '2m',
    },
    {
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTZ6AxZMqSqTNHLquYh4EC73QLcQ-ZbO2ZZaPD3J4o11sXq0AV&usqp=CAU',
      name: 'Rhapsody Hungarian',
      views: '7m',
    },
    {
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Liszt-1870.jpg/220px-Liszt-1870.jpg',
      name: 'Rhapsody Hungarian',
      views: '5m',
    },
    {
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQU1vBpqTr0-PVK7PUXwlIJBHPOz54l8xVpbLglWFBDYh13Hg82&usqp=CAU',
      name: 'nocturne in c sharp minor',
      views: '2m',
    },
  ];
  //  const [songs, setsongs] = useState();
  return (
    <View>
      <ButtonDropDown />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: 30,
        }}>
        <Text style={{fontSize: 20, color: '#eeeeee'}}>1.3k</Text>
        <Text style={{fontSize: 20, color: '#eeeeee'}}>1.3k</Text>
      </View>

      {songs.map((song, index) => (
        <TouchableOpacity style={styles.container2} key={index}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: song.photo,
              }}
              style={{width: 50, height: 50}}
            />

            <Text style={{fontSize: 15, color: '#eeeeee', marginLeft: 10}}>
              {song.name}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 15, color: '#eeeeee', marginRight: 15}}>
              {song.views}
            </Text>
            <MaterialCommunityIcons
              name="chevron-right"
              color="#535353"
              size={30}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SongsScreen;

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
});
