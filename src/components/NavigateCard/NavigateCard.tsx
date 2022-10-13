import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination } from '../../redux/slices/navSlice';
import { useNavigation } from '@react-navigation/native';

import { Icon } from '@rneui/base';
import NavFavourites from '../NavFavourites/NavFavourites';

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          <GooglePlacesAutocomplete 
            styles={toInputBoxStyles}
            placeholder='Para onde?'
            nearbyPlacesAPI='GooglePlacesSearch'
            debounce={400}
            fetchDetails={true}
            enablePoweredByContainer={false}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description
                })
              )
              navigation.navigate('RideOptionsCard')
            }}
            query={{
              key: GOOGLE_MAPS_API_KEY,
              language: 'pt',
            }}
          />
        </View>
        <NavFavourites />
      </View>

      <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
        <TouchableOpacity 
          onPress={() => navigation.navigate('RideOptionsCard')}
          style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
        >
          <Icon name='car' type='font-awesome' color='white' size={16}/>
          <Text style={tw`text-white text-center`}>Viagens</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
          <Icon name='fast-food-outline' type='ionicon' color='black' size={16}/>
          <Text style={tw`text-center`}>Lanches</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard;

const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: '#DDDDDF',
    borderRadius: 0,
    fontSize: 18,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0
  }
});