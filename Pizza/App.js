import React, { useEffect, useReducer } from 'react';
import { useColorScheme } from 'react-native';

import {
  LOADING,
  ERROR,
  RETRIEVE_TOKEN,
  LOGOUT,
  LOGIN,
  loginReducer,
  signIn,
  signOut
} from './api/Auth';

// External libraries
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Theme
import { AuthContext, ThemeContext } from './components/Context';
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

  const initialLoginState = {
    isLoading: true,
    accessToken: null,
    refreshToken: null,
    me: null,
    error: null,
  };

  const [loginState, setLoginState] = useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(() => ({
    loginState: loginState,
    autoSignIn: async () => {
      setLoginState({ type: LOADING });

      let responseData;
      try {
        responseData = await signIn(true);
      } catch (error) {
        setLoginState({ type: ERROR, error: error });
        return;
      }

      if (responseData != null) {
        setLoginState({
          type: RETRIEVE_TOKEN,
          accessToken: responseData.accessToken,
          refreshToken: responseData.refreshToken,
          me: responseData.me,
        });
      } else {
        setLoginState({
          type: LOGOUT,
        });
      }
    },
    signIn: async () => {
      let responseData;
      try {
        responseData = await signIn();
      } catch (error) {
        setLoginState({ type: ERROR, error: error });
        return;
      }

      if (responseData != null) {
        setLoginState({
          type: LOGIN,
          accessToken: responseData.accessToken,
          refreshToken: responseData.refreshToken,
          me: responseData.me,
        });

        return true;
      }

      return false;
    },
    signOut: async () => {
      await signOut();
      setLoginState({ type: LOGOUT });
    },
  }));

  useEffect(() => authContext.autoSignIn(), []);

  // Draw the application stack
  return (
    <ThemeContext.Provider value={appTheme}>
      <AuthContext.Provider value={authContext}>
        <SafeAreaProvider>
          <NavigationContainer theme={NavigatorTheme}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              <Stack.Screen name="SplashScreen" component={SplashScreen} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
