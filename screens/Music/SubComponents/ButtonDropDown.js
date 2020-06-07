/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, View, Picker, Platform } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

//import { Picker } from '@react-native-community/picker';
import Icon from 'react-native-vector-icons/FontAwesome';
const ButtonDropDown = (props) => {
  const options = ['Ultimos 28 dias', 'Last Week', 'This Week', 'Last month'];
  const [selectedValue, setSelectedValue] = React.useState('prueba');
  const time = (itemValue, itemIndex) => {
    props.timeSelected(itemValue);
    //console.log(itemValue);
    setSelectedValue(itemValue);
  };

  return (
    <View>
      <View style={styles.container}>
        <Icon
          name='sort-down'
          size={25}
          color='#eeeeee'
          style={[{ right: 18, top: 8, position: 'absolute', opacity: 0.5 }]}
        />
        {/*<Picker
          selectedValue={selectedValue}
          style={styles.picker}
          //  activeItemTextStyle={[{fontSize: 28, fontWeight: 'bold'}]}
          onValueChange={time}
          itemStyle={[{ color: '#eeeeee', backgroundColor: '#403d3f' }]}
          itemTextStyle={[{ color: '#eeeeee' }]}>
          {options.map((item, index) => {
            return <Picker.Item label={item} value={item} key={index} />;
          })}
        </Picker>*/}
        <RNPickerSelect
          selectedValue={selectedValue}
          style={{ ...pickerSelectStyles }}
          onValueChange={time}
          placeholder={{
            label: 'Select time...',
            value: null,
          }}
          itemStyle={[{ color: '#eeeeee', backgroundColor: '#403d3f' }]}
          itemTextStyle={[{ color: '#eeeeee' }]}
          items={[
            { label: 'Ultimos 28 dias', value: 'Ultimos 28 dias' },
            { label: 'Last Week', value: 'Last Week' },
            { label: 'Last two Week', value: 'Last  two Week' },
          ]}
        />
      </View>
    </View>
  );
};

export default ButtonDropDown;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    borderColor: '#eeeeee',
    //borderBottomWidth: 1,
    //borderLeftWidth: 1,
    //borderRightWidth: 1,
    //borderTopWidth: 1,
    backgroundColor: '#403d3f',
    marginBottom: 30,
  },
  picker: {
    height: 50,
    width: 350,
    color: '#eeeeee',
    opacity: 0.5,
    fontSize: 20,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingTop: 13,
    paddingHorizontal: 10,
    paddingBottom: 12,
    borderColor: 'gray',
    borderRadius: 4,
    backgroundColor: '#403d3f',
    color: 'black',
  },
});
