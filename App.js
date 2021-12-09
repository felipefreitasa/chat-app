import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './src/screens/LoginScreen';
import 'react-native-gesture-handler'
import RegisterScreen from './src/screens/RegisterScreen';
import HomeScreen from './src/screens/HomeScreen';
import AddChatScreen from './src/screens/AddChatScreen';
import ChatScreen from './src/screens/ChatScreen';
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs()

export default function App() {

  const Stack = createStackNavigator()

  const globalScreenOptions = {
    headerStyle: { backgroundColor: '#1e1d26', elevation: 0 },
    headerTitleStyle: { color: '#C7C6CD' },
    headerTintColor: '#C7C6CD',
    headerTitleAlign: 'left',
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="Home"
          component={HomeScreen}
        />

        <Stack.Screen
          name="AddChat"
          component={AddChatScreen}
        />

        <Stack.Screen
          name="Chat"
          component={ChatScreen}
          options={{
            headerStyle: {
              backgroundColor: '#1e1d26',
              elevation: 0
            }
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

