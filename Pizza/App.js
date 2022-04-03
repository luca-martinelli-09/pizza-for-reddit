import React, { useEffect, useReducer } from 'react';
import { useColorScheme } from 'react-native';

import {
  LOADING,
  ERROR,
  RETRIEVE_TOKEN,
  LOGOUT,
  LOGIN,
  loginReducer,
  initialLoginState,
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
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

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

  const [loginState, setLoginState] = useReducer(
    loginReducer,
    initialLoginState,
  );

  const authContext = React.useMemo(() => ({
    loginState: loginState,
    signIn: async (useRefreshToken = false) => {
      let responseData;
      try {
        responseData = await signIn(useRefreshToken);
      } catch (error) {
        setLoginState({ type: ERROR, error: error });
        return;
      }

      if (responseData != null) {
        setLoginState({
          type: useRefreshToken ? RETRIEVE_TOKEN : LOGIN,
          accessToken: responseData.accessToken,
          refreshToken: responseData.refreshToken,
          me: responseData.me,
        });

        return true;
      } else {
        setLoginState({ type: LOGOUT });
      }

      return false;
    },
    signOut: async () => {
      await signOut();
      setLoginState({ type: LOGOUT });
    },
  }));

  useEffect(() => {
    function autoSignIn() {
      authContext.signIn(true)
    };
    autoSignIn();
  }, []);

  // Draw the application stack
  return (
    <ThemeContext.Provider value={appTheme}>
      <AuthContext.Provider value={authContext}>
        <SafeAreaProvider>
          <NavigationContainer theme={NavigatorTheme}>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
              {
                authContext.loginState.isLoading ?
                  <Stack.Screen name="SplashScreen" component={SplashScreen} />
                  :
                  authContext.loginState.me ?
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />
                    :
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
              }
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </AuthContext.Provider>
    </ThemeContext.Provider>
  );
};

export default App;
