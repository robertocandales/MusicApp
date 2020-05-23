/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Avatar, Image} from 'react-native-elements';

const HomeScreen = () => {
  const seeSong = () => {};
  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        <Avatar
          rounded
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
          }}
          containerStyle={{
            alignSelf: 'flex-end',
            marginRight: 15,
          }}
        />

        <Text style={styles.listener}>403 Listener</Text>
        <Text style={styles.streams}>654 Streams</Text>
        <Text style={styles.followers}>157 Followers</Text>
        <Text style={styles.days}>LAST 7 DAYS</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={styles.line} />
        </View>
        <Text style={styles.people}>... 0 people listening now</Text>
      </View>

      <View />
      <View style={styles.container1}>
        <Text style={styles.topSong}>Your top songs</Text>
        <Text style={styles.days1}>LAST 7 DAYS</Text>
        <View>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 15}}>
            <Image
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPdy0QM980qConLIwShaAhxENLEQ97RBxHwfOWb_hXzY390OPt&usqp=CAU',
              }}
              style={{width: 120, height: 120}}
            />
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 20, color: '#eeeeee'}}>01</Text>
              <Text style={{fontSize: 20, color: '#eeeeee'}}>Tomorrowland</Text>
              <Text style={{fontSize: 15, color: '#eeeeee'}}>337 Streams</Text>
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 15}}>
            <Image
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvtFdEpd3Tj_h0N6A-Rs4uvRrOPzKGu4CYm6cq8UOEby3_GBAe&usqp=CAU',
              }}
              style={{width: 100, height: 100}}
            />
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 20, color: '#eeeeee'}}>02</Text>
              <Text style={{fontSize: 20, color: '#eeeeee'}}>
                By the moment
              </Text>
              <Text style={{fontSize: 15, color: '#eeeeee'}}>637 Streams</Text>
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 15}}>
            <Image
              source={{
                uri: 'https://i.ytimg.com/vi/nNe4RUHpLWI/maxresdefault.jpg',
              }}
              style={{width: 80, height: 80}}
            />
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 20, color: '#eeeeee'}}>03</Text>
              <Text style={{fontSize: 20, color: '#eeeeee'}}>Europe Fest</Text>
              <Text style={{fontSize: 15, color: '#eeeeee'}}>37 Streams</Text>
            </View>
          </View>
          <TouchableOpacity onPress={seeSong}>
            <Text style={{color: '#eeeeee', marginBottom: 30}}>SEE SONGS</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.container1}>
        <Text style={styles.topSong}>Your top playlist</Text>
        <Text style={styles.days1}>LAST 7 DAYS</Text>
        <View>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 15}}>
            <Image
              source={{
                uri:
                  'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTZ6AxZMqSqTNHLquYh4EC73QLcQ-ZbO2ZZaPD3J4o11sXq0AV&usqp=CAU',
              }}
              style={{width: 120, height: 120}}
            />
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 20, color: '#eeeeee'}}>01</Text>
              <Text style={{fontSize: 20, color: '#eeeeee'}}>
                Ultra 4k Miami
              </Text>
              <Text style={{fontSize: 15, color: '#eeeeee'}}>337 Streams</Text>
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 15}}>
            <Image
              source={{
                uri:
                  'https://static.iris.net.co/arcadia/upload/images/2020/4/27/81463_1.jpg',
              }}
              style={{width: 100, height: 100}}
            />
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 20, color: '#eeeeee'}}>02</Text>
              <Text style={{fontSize: 20, color: '#eeeeee'}}>
                By the moment
              </Text>
              <Text style={{fontSize: 15, color: '#eeeeee'}}>637 Streams</Text>
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              marginTop: 15,
              marginBottom: 15,
            }}>
            <Image
              source={{
                uri:
                  'https://pm1.narvii.com/6207/cc7c7301b9d58d70a812a12f008ed158575462dd_hq.jpg',
              }}
              style={{width: 80, height: 80}}
            />
            <View style={{marginLeft: 10}}>
              <Text style={{fontSize: 20, color: '#eeeeee'}}>03</Text>
              <Text style={{fontSize: 20, color: '#eeeeee'}}>Canserbero</Text>
              <Text style={{fontSize: 15, color: '#eeeeee'}}>3796 Streams</Text>
            </View>
          </View>
          <TouchableOpacity onPress={seeSong}>
            <Text style={{color: '#eeeeee', marginBottom: 30}}>
              SEE PLAYLIST
            </Text>
          </TouchableOpacity>
        </View>
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
    backgroundColor: '#17181a',
  },
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#273347',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 20,
  },
  listener: {
    paddingTop: 10,
    color: '#eeeeee',
    fontSize: 30,
  },
  streams: {
    paddingTop: 10,
    color: '#eeeeee',
    fontSize: 30,
  },
  followers: {
    paddingTop: 10,
    color: '#eeeeee',
    fontSize: 30,
  },
  days: {
    paddingTop: 10,
    color: '#eeeeee',
  },
  people: {
    paddingTop: 10,
    color: '#eeeeee',
    fontSize: 15,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#eeeeee',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
  },
  container1: {
    flex: 1,
    padding: 20,

    paddingTop: 10,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  topSong: {
    color: '#eeeeee',
    fontSize: 20,
  },
  days1: {
    paddingTop: 10,
    color: '#535353',
  },
});
