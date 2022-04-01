import React, { useState, useEffect } from 'react';

import { useColorScheme } from 'react-native';

import { APP_PACKAGE, CLIENT_ID } from './Config';

// External libraries
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import base64 from 'react-native-base64';
import { authorize, refresh } from 'react-native-app-auth';
import axios from 'axios';

// Theme
import { AuthContext, ThemeContext } from './components/Context';
import { MainTheme } from './theme/MainTheme';

// Screens
import SplashScreen from './screens/SplashScreen';

// Create the stack navigator
const Stack = createNativeStackNavigator();

const config = {
  redirectUrl: APP_PACKAGE + "://oauth2redirect/reddit",
  clientId: CLIENT_ID,
  clientSecret: '',
  scopes: [
    'identity',
    'edit',
    'flair',
    'history',
    'modconfig',
    'modflair',
    'modlog',
    'modposts',
    'modwiki',
    'mysubreddits',
    'privatemessages',
    'read',
    'report',
    'save',
    'submit',
    'subscribe',
    'vote',
    'wikiedit',
    'wikiread',
  ],
  serviceConfiguration: {
    authorizationEndpoint: 'https://www.reddit.com/api/v1/authorize.compact',
    tokenEndpoint: 'https://www.reddit.com/api/v1/access_token',
  },
  customHeaders: {
    token: {
      Authorization: 'Basic ' + base64.encode(CLIENT_ID),
    },
  },
  additionalParameters: {
    duration: 'permanent',
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

  const [accessToken, setAccessToken] = useState(null);

  useEffect(() => {
    async function getUser() {
      const result = await authorize(config);

      console.log(result);

      const result2 = await refresh(config, {
        refreshToken: result.refreshToken,
      });

      console.log(result2);

      const options = {
        method: 'GET',
        url: 'https://oauth.reddit.com/api/v1/me',
        headers: {
          Authorization: "Bearer " + result2.accessToken
        },
      };

      axios.request(options).then(function (res) {
        console.log(res.data)
      }).catch(function (error) {
        console.error(error);
      });

      return result;
    }
    getUser();
  }, []);

  // Draw the application stack
  return (
    <ThemeContext.Provider value={appTheme}>
      <AuthContext.Provider value={accessToken}>
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
