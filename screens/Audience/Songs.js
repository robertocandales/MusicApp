/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

const Songs = () => {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        <Text style={{fontSize: 20, color: '#eeeeee', marginTop: 15}}>
          Songs
        </Text>
      </View>
    </ScrollView>
  );
};

export default Songs;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#17181a',
  },
  container: {
    flex: 1,
    //flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
});
