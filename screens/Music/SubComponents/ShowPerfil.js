/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Image} from 'react-native-elements';
import Chart from './../../Audience/SubComponents/Chart';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ShowPerfil = ({route, navigation}) => {
  //  console.log({navigation});
  const {photo, name, views} = route.params;
  console.log(name);

  const data = [
    {
      time: 'Last 24 hours',
      streams: '100',
      saves: '1',
    },
    {
      time: 'Last 48 hours',
      streams: '200',
      saves: '10',
    },
    {
      time: 'Last 7 days',
      streams: '500',
      saves: '100',
    },
    {
      time: 'Last month',
      streams: '1000',
      saves: '245',
    },
  ];
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
          <MaterialCommunityIcons
            name="chevron-left"
            color="#eeeeee"
            size={40}
          />
        </TouchableOpacity>
        <MaterialCommunityIcons
          name="dots-horizontal"
          color="#eeeeee"
          size={30}
        />
      </View>
      <View style={styles.container1}>
        <Image
          source={{
            uri: photo,
          }}
          style={{width: 150, height: 150}}
        />
        <Text style={{fontSize: 20, color: '#eeeeee', marginTop: 15}}>
          {name}
        </Text>
        <Text style={{fontSize: 15, color: '#eeeeee', marginTop: 1}}>
          {views} streams
        </Text>
        <Text style={{fontSize: 15, color: '#535353', marginTop: 1}}>
          All Times
        </Text>
      </View>
      <Chart />
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
          <Text style={{fontSize: 15, color: '#eeeeee', marginLeft: 10}} />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 15, color: '#eeeeee', marginRight: 105}}>
            Streams
          </Text>
          <Text style={{fontSize: 15, color: '#eeeeee', marginRight: 15}}>
            Saves
          </Text>
        </View>
      </View>
      {data.map((dat, index) => (
        <View style={index % 2 ? containerPar : containerImPar} key={index}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 15, color: '#eeeeee', marginLeft: 10}}>
              {dat.time}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <Text
              style={{
                flex: 1,
                fontSize: 15,
                color: '#eeeeee',
                marginRight: 35,
                alignItems: 'flex-end',
              }}>
              {dat.streams}
            </Text>
            <Text style={{fontSize: 15, color: '#eeeeee', marginRight: 15}}>
              {dat.time}
            </Text>
          </View>
        </View>
      ))}
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
});
