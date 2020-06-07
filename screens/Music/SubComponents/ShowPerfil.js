/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { Image } from 'react-native-elements';
import Chart from './../../Audience/SubComponents/Chart';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { demographicAction } from './../../../store/redux/actions/demographicAction';
import { song_demographic_action } from '../../../store/redux/actions/demographicAction';

const ShowPerfil = ({ route, navigation }) => {
  const { artist } = useSelector((state) => state.artist);
  const { isLoading } = useSelector((state) => state.demographic);
  //let { demographics } = artist;
  console.log(artist);
  const dispatch = useDispatch();

  const { photo, name, views, time, song } = route.params;

  let { demographics } = song;
  console.log(demographics.data);
  useEffect(() => {
    if (!song.demographics.data.length)
      //dispatch(demographicAction({ user: artist.name , song: song.name }));
      dispatch(song_demographic_action({ user: artist.name, song: song.song_name }, song));
  }, []);

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
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Music')}>
          <MaterialCommunityIcons name='chevron-left' color='#eeeeee' size={40} />
        </TouchableOpacity>
        <MaterialCommunityIcons name='dots-horizontal' color='#eeeeee' size={30} />
      </View>
      <View style={styles.container1}>
        <Image
          source={{
            uri: photo,
          }}
          style={{ width: 150, height: 150 }}
        />
        <Text style={{ fontSize: 20, color: '#eeeeee', marginTop: 15 }}>{name}</Text>
        <Text style={{ fontSize: 15, color: '#eeeeee', marginTop: 1 }}>{views} streams</Text>
        <Text style={{ fontSize: 15, color: '#535353', marginTop: 1 }}>{time}</Text>
      </View>
      <View style={styles.container3}>
        <Chart />
      </View>

      <Text
        style={{
          fontSize: 20,
          color: '#eeeeee',
          marginLeft: 10,
          marginTop: 20,
          marginBottom: -20,
        }}>
        Total for this song
      </Text>
      <View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 15, color: '#eeeeee', marginLeft: 10 }}> </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Text style={{ fontSize: 15, color: '#eeeeee', marginRight: 105 }}>Streams</Text>
          <Text style={{ fontSize: 15, color: '#eeeeee', marginRight: 15 }}>Saves</Text>
        </View>
      </View>

      <View style={styles.container}>
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: '#eeeeee', fontSize: 20 }}>Top country for this song</Text>
          <Text style={{ color: '#535353', fontSize: 15 }}>{time}</Text>
        </View>
      </View>
      
      {isLoading ? (
        <View style={[styles.container2, styles.horizontal]}>
          <ActivityIndicator size='large' color='#eeeeee' />
        </View>
      ) : (
        demographics.data.map((dat, index) => (
          <View style={index % 2 ? containerPar : containerImPar} key={index}>
          
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
              }}>
              <Text style={{ fontSize: 15, color: '#eeeeee', marginLeft: 10 }}>{index + 1}</Text>
              <Text
                style={{
                  flex: 1,
                  fontSize: 15,
                  color: '#eeeeee',
                  marginLeft: 25,
                  alignItems: 'flex-end',
                }}>
                {dat.country}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <Text style={{ fontSize: 15, color: '#eeeeee', marginRight: 15 }}>
                {dat.total_plays}
              </Text>
            </View>
          </View>
        ))
      )}

      <View style={styles.container}>
        <View style={{ marginTop: 20 }}>
          <Text style={{ color: '#eeeeee', fontSize: 20 }}>Top cities for this song</Text>
          <Text style={{ color: '#535353', fontSize: 15 }}>{time}</Text>
        </View>
      </View>
      {isLoading ? (
        <View style={[styles.container2, styles.horizontal]}>
          <ActivityIndicator size='large' color='#eeeeee' />
        </View>
      ) : (
        demographics.data.map((dat, i) =>
          dat.cities.map((item, index) => (
            <View style={index % 2 ? containerPar : containerImPar} key={index}>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignItems: 'center',
                }}>
                <Text style={{ fontSize: 15, color: '#eeeeee', marginLeft: 10 }}>{index + 1}</Text>
                <Text
                  style={{
                    flex: 1,
                    fontSize: 15,
                    color: '#eeeeee',
                    marginLeft: 25,
                    alignItems: 'flex-start',
                  }}>
                  {item.city}
                </Text>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}>
                <Text style={{ fontSize: 15, color: '#eeeeee', marginRight: 15 }}>
                  {item.total_plays}
                </Text>
              </View>
            </View>
          )),
        )
      )}
    </ScrollView>
  );
};

export default ShowPerfil;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#17181a',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,

    textAlign: 'center',
  },
  container3: {
    flex: 1,
    alignItems: 'flex-start',
    marginLeft: -15,
    //paddingLeft: 10,
    //paddingRight: 10,

    textAlign: 'center',
  },
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
