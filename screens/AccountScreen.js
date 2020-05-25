/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';

const AccountScreen = () => {
  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        <Text style={{fontSize: 20, color: '#eeeeee', marginTop: 15}}>
          Accaount
        </Text>
      </View>
    </ScrollView>
  );
};

export default AccountScreen;

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
