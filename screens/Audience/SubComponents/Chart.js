/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const Chart = () => {
  return (
    <View>
      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [20, 45, 30, 60, 40, 50, 40],
            },
          ],
        }}
        height={200}
        width={Dimensions.get('window').width} // from react-native
        //yAxisLabel="$"
        yAxisSuffix='k'
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          //  backgroundColor: 'white',
          backgroundGradientFrom: '#17181a',
          backgroundGradientTo: '#17181a',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 0) => `rgba(238,238,238, ${opacity})`,
          labelColor: (opacity = 0) => `rgba(238,238,238, ${opacity})`,
          //  withDots: 0,
          withInnerLines: 0,
          withVerticalLabels: true,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '0',
            strokeWidth: '0',
            stroke: '#17181a',
          },
          propsForLabels: {
            fontSize: 15,
          },
        }}
        bezier
        style={{
          borderRadius: 16,
          fontSize: 20,

          //  marginLeft: -15,
        }}
      />
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({});
