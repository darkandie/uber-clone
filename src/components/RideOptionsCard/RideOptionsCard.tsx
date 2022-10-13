import { StyleSheet, Text, SafeAreaView, View, TouchableOpacity, FlatList, Image } from 'react-native';
import tw from 'twrnc';
import React, { useState } from 'react';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../../redux/slices/navSlice';

const data = [
  {
    id: '1',
    title: 'Uber X',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',
  },
  {
    id: '2',
    title: 'Uber XL',
    multiplier: 1.5,
    image: 'https://links.papareact.com/5w8',
  },
  {
    id: '3',
    title: 'Uber Lux',
    multiplier: 1.75,
    image: 'https://links.papareact.com/7pf',
  }
]

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  console.log(travelTimeInformation)

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity 
          style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
          onPress={() => navigation.navigate('NavigateCard')}
        >
          <Icon name='chevron-left' type='fontawesome'/>
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>
          Selecionar veiculo - {travelTimeInformation?.distance?.text}
        </Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item: { id, title, multiplier, image }, item}) => (
          <TouchableOpacity
            onPress={() => setSelected(item)}
            style={tw`flex-row items-center justify-between px-10 ${id === selected?.id && 'bg-gray-200'}`}
          >
            <Image
              style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
              }}
              source={{ uri: image }}
            />
            <View style={tw`-ml-6`}>
              <Text style={tw`text-xl font-semibold`}>{title}</Text>
              <Text>{travelTimeInformation?.duration.text}</Text>
            </View>
            <Text style={tw`text-xl`}>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              }).format(
                (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier /100)
              )}
            </Text>
          </TouchableOpacity>
        )}
      />

      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity disabled={!selected} style={tw`bg-black py-2 m-1 ${!selected && 'bg-gray-300'}`}>
          <Text style={tw`text-center text-white text-xl`}>Escolha: {selected?.title}</Text>
        </TouchableOpacity>
      </View>
      
    </SafeAreaView>
  )
}

export default RideOptionsCard;

const styles = StyleSheet.create({});