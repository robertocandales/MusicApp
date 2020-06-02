/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AnimatedCircularProgress} from 'react-native-circular-progress';

const CircularChart = () => {
  const male = {
    name: 'Male',
    porcentaje: '65',
  };
  const female = {
    name: 'Female',
    porcentaje: '35',
  };
  console.log(parseInt('100', 10));

  return (
    <View style={styles.container1}>
      <AnimatedCircularProgress
        size={200}
        width={10}
        fill={parseInt(male.porcentaje, 10)}
        tintColor="#00e0ff"
        backgroundColor="#3d5875">
        {fill => (
          <View>
            <Text style={{color: '#00e0ff', fontSize: 20}}>
              {male.porcentaje}% {male.name}
            </Text>
            <Text style={{color: '#3d5875', fontSize: 20}}>
              {female.porcentaje}% {female.name}
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
