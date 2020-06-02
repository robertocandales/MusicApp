/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {Image} from 'react-native-elements';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ListenerAlsoLike = () => {
  const data = [
    {
      photo:
        'https://upload.wikimedia.org/wikipedia/commons/c/cf/Mozart-small.jpg',
      name: 'Wolfgang Amadeus Mozart',
    },
    {
      photo:
        'https://invdes.com.mx/wp-content/uploads/2020/02/15-02-20-galileo.jpg',
      name: 'Galileo Galilei',
    },
    {
      photo:
        'https://francis.naukas.com/files/2009/05/dibujo20090527_max_planck_1901.jpg',
      name: 'Max Planck',
    },
    {
      photo:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSxf5nG4WKUM5pLzqyKGSZ5TfA04zufzE3TK2W1bLB3G0uXQnCx&usqp=CAU',
      name: 'Adolf Hitler',
    },
    {
      photo: 'https://www.ecured.cu/images/8/8c/Rodrigo_D%C3%ADaz_de_Vivar.JPG',
      name: 'Rodrigo Díaz de Vivar',
    },
  ];
  return (
    <View>
      <View style={{marginTop: 20, marginBottom: 20}}>
        <Text style={{color: '#eeeeee', fontSize: 20}}>
          Listeners also like
        </Text>
      </View>

      {data.map((like, index) => (
        <TouchableOpacity key={index} style={{marginTop: 10, marginBottom: 10}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
            }}>
            <Image
              source={{
                uri: like.photo,
              }}
              style={{width: 50, height: 50, borderRadius: 50}}
            />

            <Text style={{fontSize: 15, color: '#eeeeee', marginLeft: 10}}>
              {like.name}
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <MaterialCommunityIcons
                name="arrow-top-right"
                color="#535353"
                size={30}
              />
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default ListenerAlsoLike;

const styles = StyleSheet.create({});
