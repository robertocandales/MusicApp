/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const CircularChart = (props) => {
  const { gender_data, names } = props;

  return (
    <View style={styles.container1}>
      <AnimatedCircularProgress
        size={250}
        width={15}
        fill={parseInt(gender_data.male, 10)}
        tintColor="#464D87"
        backgroundColor="#49759C">
        {fill => (
          <View>
            <Text style={{color: '#49759C', fontSize: 22, fontWeight: 'bold', marginLeft: 10}}>
              {gender_data.male}% {names[0]}
            </Text>
            <Text style={{color: '#464D87', fontSize: 22 ,fontWeight: 'bold', marginLeft: 1}}>
              {gender_data.female}% {names[1]}
            </Text>
          </View>
        )}
      </AnimatedCircularProgress>
    </View>
  );
};

export default CircularChart;

const styles = StyleSheet.create({
  container1: {
    marginTop: 20,
    marginBottom: 20,

    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    //marginLeft: -30,
  },
});
