/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Button} from 'react-native';
import ButtonDropDown from './SubComponents/ButtonDropDown';
import {Image} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useSelector} from 'react-redux';

const SongsScreen = ({navigation}) => {
  //  console.log({navigation});
  const {artist, isLoading} = useSelector(state => state.artist);
  //  console.log(artist);

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

      {isLoading ? (
        <Text>Loadding</Text>
      ) : (
        artist.songs.map((song, index) => (
          <TouchableOpacity
            style={index % 2 ? containerPar : containerImPar}
            key={index}
            onPress={() =>
              navigation.navigate('ShowPerfil', {
                index: index,
                photo: song.image_url,
                name: song.song_name,
                views: song.total_plays_number,
                time: time1,
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
                  uri: song.image_url,
                }}
                style={{width: 50, height: 50}}
              />

              <Text style={{fontSize: 15, color: '#eeeeee', marginLeft: 10}}>
                {song.song_name}
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
                {song.total_plays_number}
              </Text>
              <MaterialCommunityIcons
                name="chevron-right"
                color="#535353"
                size={30}
              />
            </View>
          </TouchableOpacity>
        ))
      )}
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
