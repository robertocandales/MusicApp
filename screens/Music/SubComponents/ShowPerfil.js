/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from "react";

import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { Image } from "react-native-elements";
import Chart from "./../../Audience/SubComponents/Chart";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useDispatch, useSelector } from "react-redux";
import { demographicAction } from "./../../../store/redux/actions/demographicAction";
import { song_demographic_action } from "../../../store/redux/actions/demographicAction";

const ShowPerfil = ({ route, navigation }) => {
  const streasmAndSaves = [
    {
      time: "Last 24 hours",
      streams: 59,
      saves: "-  ",
    },
    {
      time: "Last 7 days",
      streams: 337,
      saves: 19,
    },
    {
      time: "Last 28 days",
      streams: "1.3k",
      saves: 44,
    },
  ];
  const data = [
    {
      name: "Your Profile Catalog",
      porcentaje: "4%",
    },
    {
      name: "Listeners own playlist and library",
      porcentaje: "13%",
    },
    {
      name: "Other listener's playlists",
      porcentaje: "75%",
    },
    {
      name: "Claro música algorighmic playlist",
      porcentaje: "8%",
    },
    {
      name: "Claro música editorial playlist",
      porcentaje: "20%",
    },
    {
      name: "Other",
      porcentaje: "0%",
    },
  ];
  const { artist } = useSelector((state) => state.artist);
  const { isLoading } = useSelector((state) => state.demographic);
  console.log(isLoading);

  //let { demographics } = artist;
  //  console.log(artist);
  const dispatch = useDispatch();

  const { photo, name, views, time, song } = route.params;
  console.log("song", song);
  let { demographics } = song;
  //  console.log('demographics',demographics);
  //  console.log('demographics.data.length',demographics.data.length)
  useEffect(() => {
    if (!song.demographics.data.length) console.log("useeffect en coso");
    //dispatch(demographicAction({ user: artist.name , song: song.name }));
    dispatch(
      song_demographic_action({ user: artist.name, song: song.song_name }, song)
    );
  }, []);

  const containerPar = {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //marginTop: 5,
    //marginBottom: 5,
  };
  const containerImPar = {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //marginTop: 5,
    //marginBottom: 5,
    backgroundColor: "#282828",
  };
  return (
    <ScrollView style={styles.main}>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate("Music")}>
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
          style={{ width: 104, height: 104 }}
        />
        <Text style={{ fontSize: 22, color: "#eeeeee", marginTop: 16 }}>
          {name}
        </Text>
        <Text style={{ fontSize: 16, color: "#eeeeee" }}>{views} streams</Text>
        <Text style={{ fontSize: 15, color: "#7F8086", marginTop: 4 }}>
          {time}
        </Text>
      </View>
      <View style={styles.container3}>
        <Chart />
      </View>
      
      <Text
        style={{
          fontSize: 20,
          color: "#eeeeee",
          fontWeight: 'bold',
          marginLeft: 10,
          marginTop: 20,
          marginBottom: -20,
        }}
      >
        Total for this song
      </Text>
      <View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 15, color: "#eeeeee", marginLeft: 10 }}>
            {" "}
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            justifyContent: "flex-end",
            alignItems: "center",
            padding: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              flex: 1,
              fontSize: 15,
              color: "#eeeeee",
            }}
          ></Text>
          <Text
            style={{
              textAlign: "right",
              flex: 1,
              fontSize: 11,
              color: "#7F8086",
            }}
          >
            STREAMS
          </Text>
          <Text
            style={{
              textAlign: "right",
              flex: 1,
              fontSize: 11,
              color: "#7F8086",
            }}
          >
            SAVES
          </Text>
        </View>
        {isLoading || demographics.data.length === 0 ? (
          <View style={[styles.container2, styles.horizontal]}>
            <ActivityIndicator size="large" color="#eeeeee" />
          </View>
        ) : (
          streasmAndSaves.map((data, index) => (
            <View style={index % 2 ? containerPar : containerImPar} key={index}>
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "flex-end",
                  alignItems: "center",
                  textAlign: "center",
                  padding: 10,
                }}
              >
                <Text
                  style={{
                    textAlign: "left",
                    flex: 1,
                    fontSize: 15,
                    color: "#eeeeee",
                  }}
                >
                  {data.time}
                </Text>
                <Text
                  style={{
                    textAlign: "right",
                    flex: 1,
                    fontSize: 15,
                    color: "#eeeeee",
                  }}
                >
                  {data.streams}
                </Text>
                <Text
                  style={{
                    textAlign: "right",
                    flex: 1,
                    fontSize: 15,
                    color: "#eeeeee",
                  }}
                >
                  {data.saves}
                </Text>
              </View>
            </View>
          ))
        )}
      </View>

      <View style={{padding: 4}}>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              color: "#eeeeee",
              fontSize: 20,
              fontWeight: "bold",
              marginBottom: 4,
            }}
          >
            Sources of Streams
          </Text>
          <Text style={{ color: "#535353", fontSize: 15, marginBottom: 16}}>LAST 28 DAYS</Text>
        </View>
        <View>
          {data.map((datos, index) => (
            <View key={index}>
              <View style={styles.container2}>
                <View>
                  <Text style={{ color: "#eeeeee", fontSize: 15, marginBottom: 8 }}>
                    {datos.name}
                  </Text>
                </View>
                <Text style={{ color: "#eeeeee", fontSize: 15 }}>
                  {datos.porcentaje}
                </Text>
              </View>
              <View
                style={{
                  height: 10,
                  width: datos.porcentaje,
                  backgroundColor: "#981C15",
                  borderColor: "#981C15",
                  borderWidth: 7.3,
                  marginVertical: 8
                }}
              />
            </View>
          ))}
        </View>
      </View>
    

      <View style={styles.container}>
        <View style={{ marginTop: 8 }}>
          <Text
            style={{
              color: "#eeeeee",
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 16,
            }}
          >
            Top countries for this song
          </Text>
          <Text style={{ color: "#535353", fontSize: 15, marginBottom: 13 }}>
            {time}
          </Text>
        </View>
      </View>
      {isLoading || demographics.data.length === 0 ? (
        <View style={[styles.container2, styles.horizontal]}>
          <ActivityIndicator size="large" color="#eeeeee" />
        </View>
      ) : (
        demographics.data.map((dat, index) => (
          <View style={index % 2 ? containerPar : containerImPar} key={index}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                padding: 10,
              }}
            >
              <Text style={{ fontSize: 15, color: "#eeeeee", marginLeft: 10 }}>
                {index + 1}
              </Text>
              <Text
                style={{
                  flex: 1,
                  fontSize: 15,
                  color: "#eeeeee",
                  marginLeft: 25,
                  alignItems: "flex-end",
                }}
              >
                {dat.country}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15, color: "#eeeeee", marginRight: 15 }}>
                {dat.total_plays}
              </Text>
            </View>
          </View>
        ))
      )}
      <View style={styles.container}>
        <View style={{ marginTop: 20 }}>
          <Text
            style={{
              color: "#eeeeee",
              fontSize: 18,
              fontWeight: "bold",
              marginBottom: 15,
            }}
          >
            Top cities for this song
          </Text>
          <Text style={{ color: "#535353", fontSize: 15, marginBottom: 13 }}>
            {time}
          </Text>
        </View>
      </View>
      {isLoading || demographics.data.length === 0 ? (
        <View style={[styles.container2, styles.horizontal]}>
          <ActivityIndicator size="large" color="#eeeeee" />
        </View>
      ) : (
        demographics.get_top_cities().map((item, index) => (
          <View style={index % 2 ? containerPar : containerImPar} key={index}>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-start",
                alignItems: "center",
                padding: 10,
              }}
            >
              <Text style={{ fontSize: 15, color: "#eeeeee", marginLeft: 10 }}>
                {index + 1}
              </Text>
              <Text
                style={{
                  flex: 1,
                  fontSize: 15,
                  color: "#eeeeee",
                  marginLeft: 25,
                  alignItems: "flex-start",
                }}
              >
                {item.city}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 15, color: "#eeeeee", marginRight: 15 }}>
                {item.total_plays}
              </Text>
            </View>
          </View>
        ))
      )}

      <View style={{ marginTop: 40 }}></View>
    </ScrollView>
  );
};

export default ShowPerfil;

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#17181a",
    padding: 8,
  },
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    marginTop: 20,
  },
  container1: {
    flex: 1,
    alignItems: "center",
    marginBottom: 59,
    textAlign: "center",
  },
  container3: {
    flex: 1,
    alignItems: "flex-start",
    marginLeft: -15,
    //paddingLeft: 10,
    //paddingRight: 10,

    textAlign: "center",
  },
  container2: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
