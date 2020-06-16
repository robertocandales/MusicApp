/* eslint-disable react-native/no-inline-styles */
import React from "react";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const Chart = () => {
  return (
    <View>
      <Text
        style={{
          color: "#EEEEEE",
          marginLeft: 18,
          fontSize: 16,
          fontWeight: "bold",
          marginBottom: 16,
        }}
      >
        {" "}
        Streams{" "}
      </Text>
      <LineChart
        data={{
          labels: ["JAN 09", "", "", "JAN 23", "", "", "FEB 03"],
          datasets: [
            {
              data: [39, 18, 35, 30, 35, 20, 25],
            },
          ],
        }}
        labelColor= '#7F8086'
        height={200}
        width={Dimensions.get("window").width} // from react-native
        //yAxisLabel="$"
        yAxisSuffix="k"
        fromZero
        yAxisInterval={7} // optional, defaults to 1
        chartConfig={{
          //  backgroundColor: 'white',
          backgroundGradientFrom: "#17181a",
          backgroundGradientTo: "#17181a",
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 0) => `rgba(90,118,164, ${opacity})`,
          labelColor: (opacity = 0) => `rgba(127, 128, 134, ${opacity})`,
          //  withDots: 0,
          withInnerLines: 1,
          withVerticalLabels: true,
          style: {
            borderRadius: 12,
          },
          propsForDots: {
            r: "0",
            strokeWidth: "0",
            stroke: "#17181a",
          },
          propsForBackgroundLines: {
            strokeWidth: 0
          },
          propsForLabels: {
            fontSize: 15,
            color: '#7F8086'
          },
        }}
        bezier
        style={{
          borderRadius: 115,
          fontSize: 20,

          //  marginLeft: -15,
        }}
      />
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({});
