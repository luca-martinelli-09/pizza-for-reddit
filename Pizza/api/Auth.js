import { APP_PACKAGE, CLIENT_ID, USER_AGENT } from '../Config';

// External libraries
import base64 from 'react-native-base64';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { authorize, refresh } from 'react-native-app-auth';

const LOADING = 'LOADING';
const ERROR = 'ERROR';
const RETRIEVE_TOKEN = 'RETRIEVE_TOKEN';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

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
      'User-Agent': USER_AGENT,
    },
  },
  additionalParameters: {
    duration: 'permanent',
  },
};

const signIn = async (getToken = false) => {
  let result;
  try {
    if (getToken) {
      const refreshToken = await AsyncStorage.getItem('refreshToken');

      if (!refreshToken) {
        return null;
      }

      result = await refresh(config, {
        refreshToken: refreshToken,
      });
    } else {
      result = await authorize(config);
    }
  } catch (error) {
    console.error(error);
    throw error;
  }

  await AsyncStorage.setItem('refreshToken', result.refreshToken);

  const options = {
    method: 'GET',
    url: 'https://oauth.reddit.com/api/v1/me',
    headers: {
      Authorization: "Bearer " + result.accessToken,
      'User-Agent': USER_AGENT,
    },
  };

  let me;
  try {
    const getMe = await axios.request(options);

    if (getMe.status == 200) {
      me = getMe.data;
    } else {
      return null;
    }
  } catch (error) {
    console.error(error);
    throw error;
  }

  return {
    accessToken: result.accessToken,
    refreshToken: result.refreshToken,
    me: me,
  };
};

const signOut = async () => {
  try {
    await AsyncStorage.removeItem('refreshToken');
  } catch (e) { }
};

const loginReducer = (prevState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...prevState,
        isLoading: true,
        error: null,
      }
    case ERROR:
      return {
        ...prevState,
        isLoading: false,
        error: action.error,
      }
    case RETRIEVE_TOKEN:
      return {
        ...prevState,
        isLoading: false,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        me: action.me,
        error: null,
      };
    case LOGIN:
      return {
        ...prevState,
        isLoading: false,
        accessToken: action.accessToken,
        refreshToken: action.refreshToken,
        me: action.me,
        error: null,
      };
    case LOGOUT:
      return {
        ...prevState,
        isLoading: false,
        accessToken: null,
        refreshToken: null,
        me: null,
        error: null,
      };
  }
};

export {
  LOADING,
  ERROR,
  RETRIEVE_TOKEN,
  LOGIN,
  LOGOUT,
  loginReducer,
  signIn,
  signOut,
};