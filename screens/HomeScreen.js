/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  
} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { Avatar, Image } from "react-native-elements";
import { get_songs, set_artist } from "../store/redux/actions/artist.actions";
import Artist from "../models/Artist";

const HomeScreen = () => {
  const avatar =
    "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg";
  const dispatch = useDispatch();
  const { artist, isLoading } = useSelector((state) => state.artist);
  const songs = artist.songs;
  React.useEffect(() => {
    //dispatch(get_songs({ user: artist.name, top: 5 }));
    dispatch(set_artist(new Artist("John Mayer")));
  }, []);

  const seeSong = () => {};

  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        {/* <Avatar
          rounded
          source={{
            uri: avatar,
          }}
          containerStyle={{
            marginTop: 10,
            alignSelf: 'flex-end',
            marginRight: 0,
          }}
        /> */}
        <View>
          <View style={styles.statistics_container}>
            <Text style={styles.statistics}>403 Listeners</Text>
            <Text style={styles.statistics}>654 Streams</Text>
            <Text style={styles.statistics}>157 Followers</Text>
          </View>
          <Text style={styles.days}> LAST 7 DAYS</Text>

          <View style={styles.lineStyle} />

          <Text style={styles.people}>0 people listening now</Text>
        </View>
        <View />
      </View>
      {/*nuevo*/}

      <View style={styles.container1}>
        <Text style={styles.topSong}>Your top songs</Text>
        <Text style={styles.days1}>LAST 7 DAYS</Text>
      </View>
      {isLoading ? (
        <View style={[styles.container2, styles.horizontal]}>
          <ActivityIndicator size="large" color="#eeeeee" />
        </View>
      ) : (
        songs.map((song, index) => (
          <TouchableOpacity style={styles.container3} key={index}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Image
                source={{
                  uri: song.image_url,
                }}
                style={
                  index === 0
                    ? { width: 89, height: 89 }
                    : { width: 70, height: 70 }
                }
              />
              <View
                style={
                  index === 0
                    ? { marginTop: -25, marginLeft: 10 }
                    : { marginTop: -13, flex: 1, marginLeft: 10 }
                }
              >
                <Text style={styles.imageText}>0{index + 1}</Text>
                <Text style={styles.imageText}>{song.song_name}</Text>
                <Text style={styles.imageStreams}>
                  {song.total_plays_number} streams
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))
      )}
      <View style={{ marginLeft: 15, marginBottom: 24, marginTop: 12 }}></View>

      <View style={styles.container1}>
        <Text style={styles.topSong}>Your top playlist</Text>
        <Text style={styles.days1}>LAST 7 DAYS</Text>
      </View>
      {isLoading ? (
        <View style={[styles.container2, styles.horizontal]}>
          <ActivityIndicator size="large" color="#eeeeee" />
        </View>
      ) : (
        songs.map((song, index) => (
          <TouchableOpacity style={styles.container3} key={index}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                marginTop: 5,
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Image
                source={{
                  uri: song.image_url,
                }}
                style={
                  index === 0
                    ? { width: 89, height: 89 }
                    : { width: 70, height: 70 }
                }
              />
              <View
                style={
                  index === 0
                    ? { marginTop: -25, marginLeft: 10 }
                    : { marginTop: -13, flex: 1, marginLeft: 10 }
                }
              >
                <Text style={styles.imageText}>0{index + 1}</Text>
                <Text style={styles.imageText}>{song.song_name}</Text>
                <Text style={styles.imageStreams}>
                  {song.total_plays_number} streams
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))
      )}
      <View style={{ marginLeft: 15, marginBottom: 24, marginTop: 12 }}>
        {/* <Text>
      <Text style={styles.imageStreams}>See</Text>
      <MaterialCommunityIcons name="chevron-right" color="#535353" size={18} />
      </Text> */}
      </View>
      <View style={styles.container1}>
        <Text style={styles.topSong}>New for you</Text>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#17181a",
  },
  container: {
    flex: 1,
    backgroundColor: "#273347",
    alignItems: "flex-start",
    justifyContent: "space-between",
    padding: 25,
    marginBottom: 24,
  },
  statistics_container: {
    marginTop: 62,
    marginBottom: 24,
  },

  statistics: {
    color: "#eeeeee",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 3,
  },
  days: {
    color: "#7F8086",
    marginBottom: 24,
  },
  people: {
    color: "#eeeeee",
    fontSize: 14,
    marginBottom: 16,
  },
  lineStyle: {
    backgroundColor: "#6C6C6C",
    height: 2,
    width: 365,
    marginBottom: 14,
  },
  container1: {
    flex: 1,
    padding: 20,
    paddingTop: 10,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  topSong: {
    color: "#eeeeee",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  days1: {
    color: "#7F8086",
  },
  container2: {
    flex: 1,
    justifyContent: "center",
  },
  imageText: {
    fontSize: 16,
    color: "#eeeeee",
  },
  imageStreams: {
    fontSize: 13,
    color: "#7F8086",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  container3: {
    flex: 1,
    padding: 20,
    paddingTop: 10,
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
});
