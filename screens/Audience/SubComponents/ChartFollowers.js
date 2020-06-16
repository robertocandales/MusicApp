/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const ChartF = () => {
  return (
    <View>
      <LineChart
        data={{
          labels: ['JAN 09', '','', 'JAN 23','','', 'FEB 03'],
          datasets: [
            {
              data: [22,23,24,25,26,27,28],
            },
          ],
        }}
        height={200}
        width={Dimensions.get('window').width} // from react-native
        //yAxisLabel="$"
        yAxisSuffix='K'
        yAxisInterval={7} // optional, defaults to 1
        xAxisInterval={'7'}
        segments = {2}
        fromZero true
        to
        yLabelsOffset={7}
        chartConfig={{
          //  backgroundColor: 'white',
          propsForBackgroundLines:  {
            strokeWidth: 2,
            strokeDasharray: "" // solid background lines with no dashes

          },
          backgroundGradientFrom: '#17181a',
          backgroundGradientTo: '#17181a',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 0) => `#454E76`,
          labelColor: (opacity = 0) => `#7F8086`,
          //  withDots: 0,
          withInnerLines: 1,
          withVerticalLabels: true,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '0',
            strokeWidth: '2',
            stroke: '#17181a',
          },
          propsForLabels: {
            fontSize: 15,
          },
        }}
        
        style={{
          borderRadius: 16,
          fontSize: 20,
          marginVertical: 9,
          color: '#7F8086'

        }}
      />
    </View>
  );
};

export default ChartF;

const styles = StyleSheet.create({});
