import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login  from './screens';
import Signup from './screens';
import Welcome from './screens';

const Stack = createNativeStackNavigator();
function App(){
  return (
    <NavigationContainer>
      <Stack.Navigator
       intialRouteName="Welcome"
      >
       <Stack.Screen
       name="Welcome"
       component={Welcome}
       options={{
        headerShown:false
       }}
       />
        <Stack.Screen
       name="Login"
       component={Login}
       options={{
        headerShown:false
       }}
       />
        <Stack.Screen
       name="Signup"
       component={Signup}
       options={{
        headerShown:false
       }}
       />

        
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;