/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import ButtonDropDown from './SubComponents/ButtonDropDown';
import {Image} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SongsScreen = ({navigation}) => {
  //  console.log({navigation});

  const songs = [
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
        'https://11sticgrupo2.files.wordpress.com/2013/06/wolfgang_amadeus_mozart.jpg?w=584',
      name: 'Mozart – Eine kleine Nachtmusik',
      views: '7m',
    },
    {
      photo:
        'https://resizer.xlsemanal.com/resizer/resizer.php?imagen=https://www.xlsemanal.com/wp-content/uploads/sites/3/2020/01/descomponiendo-a-beethoven-hasta-su-ultimo-pelo-2.jpg&nuevoancho=480&nuevoalto=480&crop=1',
      name: 'Für Elise',
      views: '5m',
    },
    {
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/9/9b/GiacomoPuccini.jpg',
      name: 'O mio babbino caro from Gianni Schicchi',
      views: '20m',
    },
    {
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3iDZC-Gnc6u7hdMmkoSGOtKQO6CRsoSQ7MLtZyUs9Kv0IMWGg&usqp=CAU',
      name: ' Toccata and Fugue in D minor',
      views: '17m',
    },
    {
      photo: 'https://i.ytimg.com/vi/sO7zsGzTnDM/hqdefault.jpg',
      name: 'The Four Seasons',
      views: '51m',
    },
    {
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRd8DfU-55zNPy_-zwuzaZ4qcd_0_MfWz4rQ-2q2D32TRWxjlbl&usqp=CAU',
      name: 'In the Hall of the Mountain King’ from Peer Gynt Suite',
      views: '10m',
    },
  ];
  const [time1, settime1] = useState('Ultimos 28 dias');
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
          key={index}
          onPress={() =>
            navigation.navigate('ShowPerfil', {
              index: index,
              photo: song.photo,
              name: song.name,
              views: song.views,
            })
          }>
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

//const styles = StyleSheet.create({
//  container2: {
//    flex: 1,
//    flexDirection: 'row',
//    justifyContent: 'space-between',
//    alignItems: 'center',
//    marginTop: 10,
//    marginBottom: 10,
//  },
//  music: {
//    color: '#eeeeee',
//    fontSize: 20,
//  },
//});
