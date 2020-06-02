/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import ButtonDropDown from './SubComponents/ButtonDropDown';
import {Image} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {get_songs} from './../../store/redux/actions/artist.actions';

const SongsScreen = ({navigation}) => {
  const dispatch = useDispatch();

  //  console.log({navigation});
  const {artist, isLoading} = useSelector(state => state.artist);
  //  console.log('artist en song', artist);
  const [time1, settime1] = useState('Ultimos 28 dias');
  const time = timeSelected => {
    settime1(timeSelected);
    console.log(timeSelected);
  };
  //  React.useEffect(() => {
  //    dispatch(get_songs({user: artist.name, top: 5}));
  //  }, [dispatch]);
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
        <View style={[styles.container2, styles.horizontal]}>
          <ActivityIndicator size="large" color="#eeeeee" />
        </View>
      ) : (
        artist.map((song, index) => (
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

const styles = StyleSheet.create({
  container2: {
    flex: 1,
    justifyContent: 'center',
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
});
