import React, { useState, useEffect } from 'react';

import { useColorScheme } from 'react-native';

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
