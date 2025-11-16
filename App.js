import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import WelcomeScreen from './src/screens/WelcomeScreen';
import PermissionsScreen from './src/screens/PermissionsScreen';
import ContactsScreen from './src/screens/ContactsScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createStackNavigator();

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    checkFirstLaunch();
  }, []);

  const checkFirstLaunch = async () => {
    try {
      const hasLaunched = await AsyncStorage.getItem('hasLaunched');
      if (hasLaunched === null) {
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    } catch (error) {
      setIsFirstLaunch(true);
    }
  };

  if (isFirstLaunch === null) {
    return null; // Loading
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isFirstLaunch ? 'Welcome' : 'Home'}
        screenOptions={{
          headerStyle: {
            backgroundColor: '#ff0000',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen 
          name="Permissions" 
          component={PermissionsScreen}
          options={{ title: 'Setup Permissions' }}
        />
        <Stack.Screen 
          name="Contacts" 
          component={ContactsScreen}
          options={{ title: 'Emergency Contacts' }}
        />
        <Stack.Screen 
          name="Settings" 
          component={SettingsScreen}
          options={{ title: 'Alert Settings' }}
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen}
          options={{ title: 'Emergency SOS', headerLeft: null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
