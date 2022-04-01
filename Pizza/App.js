import React, { useState, useEffect } from 'react';

import { useColorScheme } from 'react-native';

import { CLIENT_ID } from './Config';

// External libraries
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Theme
import { ThemeContext } from './components/Context';
import { MainTheme } from './theme/MainTheme';

// Screens
import SplashScreen from './screens/SplashScreen';

// Create the stack navigator
const Stack = createNativeStackNavigator();

const config = {
  redirectUrl: 'com.lucamartinelli.pizza://oauth2redirect/reddit',
  clientId: 'fcafYt6_OhrlQEN6NTTyUQ',
  clientSecret: CLIENT_ID,
  scopes: ['identity', 'edit', 'subscribe', 'save', 'submit', 'read', 'modconfig', 'account', 'vote', 'flair', 'mysubreddits'],
  serviceConfiguration: {
    authorizationEndpoint: 'https://www.reddit.com/api/v1/authorize.compact',
    tokenEndpoint: 'https://www.reddit.com/api/v1/access_token',
  },
  customHeaders: {
    token: {
      Authorization: 'Basic ZmNhZll0Nl9PaHJsUUVONk5UVHlVUQ==',
    },
  },
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const appTheme = isDarkMode ? MainTheme.dark : MainTheme.light;

  const NavigatorTheme = {
    colors: {
      background: appTheme.colorScheme.backgroundColor,
    },
  };

  // Draw the application stack
  return (
    <ThemeContext.Provider value={appTheme}>
      <SafeAreaProvider>
        <NavigationContainer theme={NavigatorTheme}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeContext.Provider>
  );
};

export default App;
