import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, MapScreen } from "../screens";

const Stack = createNativeStackNavigator();

export type RootStackParamsList = {
  HomeScreen: undefined,
  MapScreen: undefined,
};

const Routes = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='HomeScreen' 
          component={HomeScreen} 
          options={{headerShown: false }}
        />
        <Stack.Screen 
          name='MapScreen' 
          component={MapScreen} 
          options={{headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes;