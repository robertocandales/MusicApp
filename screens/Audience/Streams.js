/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Chart from './SubComponents/Chart';
import CircularChart from './SubComponents/CircularChart';
import ListenerAlsoLike from './SubComponents/ListenerAlsoLike';

const Streams = () => {

  const data = [
    {
      name: 'Your Profile Catalog',
      porcentaje: '4%',
    },
    {
      name: 'Listeners Own Playlist and Library',
      porcentaje: '70%',
    },
    {
      name: 'Top 10 Mexico',
      porcentaje: '20%',
    },
    {
      name: 'Code Playlist',
      porcentaje: '60%',
    },
    {
      name: 'Techno Fest',
      porcentaje: '20%',
    },
    {
      name: 'Metal Undeground',
      porcentaje: '15%',
    },
    {
      name: 'Rock 70, 80 and 90',
      porcentaje: '90%',
    },
  ];
  

  const { artist } = useSelector(state => state.artist);
  const { demographics } = artist;

  return (
    <View>
      <View style={styles.container1}>
        <Chart />
      </View>
      <View style={{marginTop: 20}}>
        <Text style={{color: '#eeeeee', fontSize: 20}}>Sources of Streams</Text>
        <Text style={{color: '#535353', fontSize: 15}}>Last 28 days</Text>
      </View>
      {data.map((datos, index) => (
        <View key={index}>
          <View style={styles.container2}>
            <View>
              <Text style={{color: '#eeeeee', fontSize: 15}}>{datos.name}</Text>
            </View>
            <Text style={{color: '#eeeeee', fontSize: 15}}>
              {datos.porcentaje}
            </Text>
          </View>
          <View
            style={{
              height: 10,
              width: datos.porcentaje,
              backgroundColor: 'red',
              borderColor: 'red',
              borderWidth: 0.1,
              borderRadius: 5,
            }}
          />
        </View>
      ))}
      <View style={{marginTop: 20}}>
        <Text style={{color: '#eeeeee', fontSize: 20}}>Their Gender</Text>
        <Text style={{color: '#535353', fontSize: 15}}>Last 28 days</Text>
      </View>
      { demographics.total_male
          ?
          <CircularChart gender_data={demographics.get_gender_percentages()} names={['Male', 'Female']}/>
          :
          <View style={[styles.container2, styles.horizontal]}>
            <ActivityIndicator size='large' color='#eeeeee' />
          </View>
      }
      <View style={{marginTop: 20}}>
        <Text style={{color: '#eeeeee', fontSize: 20}}>Their Ages</Text>
        <Text style={{color: '#535353', fontSize: 15}}>Last 28 days</Text>
      </View>
      {demographics.get_ages_total_percentages().map((age, index) => (
        <View key={index}>
          <View style={styles.container2}>
            <View>
              <Text style={{color: '#eeeeee', fontSize: 15}}>{age.name}</Text>
            </View>
            <Text style={{color: '#eeeeee', fontSize: 15}}>
              {age.percentage} %
            </Text>
          </View>
          <View
            style={{
              height: 10,
              width: age.percentage + '%',
              backgroundColor: 'red',
              borderColor: 'red',
              borderWidth: 0.1,
              borderRadius: 5,
            }}
          />
        </View>
      ))}

      <ListenerAlsoLike />
    </View>
  );
};

export default Streams;

const styles = StyleSheet.create({
  container1: {
    marginLeft: -30,
  },
  container2: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 10,

    justifyContent: 'space-between',
    marginTop: 10,
  },
  progressBar: {
    height: 10,
    width: '100%',
    backgroundColor: 'red',
    borderColor: 'red',
    borderWidth: 0.1,
    borderRadius: 1,
  },
});
