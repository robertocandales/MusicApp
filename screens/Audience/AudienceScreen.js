/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar } from 'react-native-elements';
import Songs from './Songs';
import Streams from './Streams';
import Followers from './Followers';

const AudienceScreen = () => {
  const [enableComponent, setEnableComponent] = React.useState(1);
  const songs = () => {
    setEnableComponent(1);
  };
  const playlists = () => {
    setEnableComponent(2);
  };
  const followers = () => {
    setEnableComponent(3);
  };

  const styleButtomEnable = {
    color: '#eeeeee',
    fontSize: 20,
    marginRight: 25,
    borderColor: '#eeeeee',
    borderBottomWidth: 1,
  };
  const styleButtomDesable = {
    color: '#eeeeee',
    fontSize: 20,
    marginRight: 25,
  };

  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.music}>Audience</Text>
        <Avatar
          rounded
          source={{
            uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
          containerStyle={
            {
              //alignSelf: 'flex-end',
              //marginRight: 15,
            }
          }
        />
      </View>
      <View style={{ padding: 20 }}>
        <Text style={{ color: '#eeeeee', fontSize: 20 }}>1.475 listener</Text>
        <Text style={{ color: '#535353', fontSize: 15 }}>Last 28 days</Text>
      </View>
      <View>
        <View style={styles.container1}>
          <TouchableOpacity onPress={songs}>
            <Text style={enableComponent === 1 ? styleButtomEnable : styleButtomDesable}>
              Songs
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={playlists}>
            <Text style={enableComponent === 2 ? styleButtomEnable : styleButtomDesable}>
              Streams
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={followers}>
            <Text style={enableComponent === 3 ? styleButtomEnable : styleButtomDesable}>
              Followers
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ padding: 20, marginTop: -10 }}>
        {enableComponent === 1 ? (
          <Songs />
        ) : enableComponent === 2 ? (
          <Streams />
        ) : enableComponent === 3 ? (
          <Followers />
        ) : null}
      </View>
    </ScrollView>
  );
};

export default AudienceScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#17181a',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 20,
    marginTop: 20,
  },
  music: {
    color: '#eeeeee',
    fontSize: 30,
  },
  container1: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
  },
});
