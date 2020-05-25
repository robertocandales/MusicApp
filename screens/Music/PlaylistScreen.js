/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import ButtonDropDown from './SubComponents/ButtonDropDown';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Image} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PlaylistScreen = () => {
  const songs = [
    {
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTZ6AxZMqSqTNHLquYh4EC73QLcQ-ZbO2ZZaPD3J4o11sXq0AV&usqp=CAU',
      name: 'Rhapsody Hungarian',
      song: 'Cancion 12',
      views: '7m',
    },
    {
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Liszt-1870.jpg/220px-Liszt-1870.jpg',
      name: 'Rhapsody Hungarian',
      song: 'Cancion 21',
      views: '5m',
    },
    {
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQU1vBpqTr0-PVK7PUXwlIJBHPOz54l8xVpbLglWFBDYh13Hg82&usqp=CAU',
      name: 'nocturne in c sharp minor',
      song: 'Cancion 1',
      views: '2m',
    },
    {
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTZ6AxZMqSqTNHLquYh4EC73QLcQ-ZbO2ZZaPD3J4o11sXq0AV&usqp=CAU',
      name: 'Rhapsody Hungarian',
      song: 'Cancion 2',
      views: '7m',
    },
    {
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Liszt-1870.jpg/220px-Liszt-1870.jpg',
      name: 'Rhapsody Hungarian',
      song: 'Cancion 3',
      views: '5m',
    },
    {
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQU1vBpqTr0-PVK7PUXwlIJBHPOz54l8xVpbLglWFBDYh13Hg82&usqp=CAU',
      name: 'nocturne in c sharp minor',
      song: 'Cancion 72',
      views: '2m',
    },
    {
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTZ6AxZMqSqTNHLquYh4EC73QLcQ-ZbO2ZZaPD3J4o11sXq0AV&usqp=CAU',
      name: 'Rhapsody Hungarian',
      song: 'Cancion 2',
      views: '7m',
    },
    {
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Liszt-1870.jpg/220px-Liszt-1870.jpg',
      name: 'Rhapsody Hungarian',
      song: 'Cancion 456',
      views: '5m',
    },
    {
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQU1vBpqTr0-PVK7PUXwlIJBHPOz54l8xVpbLglWFBDYh13Hg82&usqp=CAU',
      name: 'nocturne in c sharp minor',
      song: 'Cancion 11',
      views: '2m',
    },
  ];

  const [time1, settime1] = React.useState('Ultimos 28 dias');
  const time = timeSelected => {
    settime1(timeSelected);
    console.log(timeSelected);
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
        <Text style={{fontSize: 16, color: '#535353'}}>{time1}</Text>
        <Text style={{fontSize: 16, color: '#535353'}}>STREAMS</Text>
      </View>

      {songs.map((song, index) => (
        <TouchableOpacity
          style={index % 2 ? containerPar : containerImPar}
          key={index}>
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
            <View>
              <Text style={{fontSize: 15, color: '#eeeeee', marginLeft: 10}}>
                {song.name}
              </Text>

              <Text style={{fontSize: 15, color: '#eeeeee', marginLeft: 10}}>
                {song.song}
              </Text>
            </View>
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
});
