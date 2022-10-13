import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import tw from 'twrnc';
import { Map, NavigateCard, RideOptionsCard } from '../../components';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamsList } from '../../Router';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type mapScreenProp = NativeStackNavigationProp<RootStackParamsList, "MapScreen">

const MapScreen = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation<mapScreenProp>();

  return (
    <View>
      <TouchableOpacity 
        onPress={() => navigation.navigate('HomeScreen')}
        style={tw`bg-gray-100 absolute top-12 left-4 z-50 p-3 rounded-full shadow-lg`}
      >
        <Icon name='menu' />
      </TouchableOpacity> 
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen 
            name='NavigateCard'
            component={NavigateCard}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen 
            name='RideOptionsCard'
            component={RideOptionsCard}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen;