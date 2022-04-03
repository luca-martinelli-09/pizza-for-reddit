import React, { useContext, useState } from 'react';

import { StatusBar, View, SafeAreaView, Text, Dimensions, ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

// Theme
import { ThemeContext, AuthContext } from '../components/Context';

// Components
import { Button } from '../components/Button';
import { localizedStrings } from '../components/Strings';

// Assets
import PizzaLogo from '../src/assets/images/pizza-logo.svg';
import Pizza from '../src/assets/images/pizza.svg';

const LoginScreen = () => {
  const appTheme = useContext(ThemeContext);
  const { signIn, loginState } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(false);

  const screenWidth = Dimensions.get('screen').width;
  const pizzaSize = screenWidth * 1.5;

  const logIn = async () => {
    setIsLoading(true);
    const canLogin = await signIn();

    if (!canLogin) {
      setIsLoading(false);
    }
  }

  return (
    <SafeAreaView style={appTheme.style.mainContainer}>
      <LinearGradient
        start={{ x: 1, y: 0 }}
        end={{ x: 0, y: 1 }}
        locations={[0, 0.5, 1]}
        colors={['#FFA800', '#ff4500', '#FB133A']}
        style={appTheme.style.container}
      >
        <StatusBar barStyle={'light-content'} translucent={true} backgroundColor={'transparent'} />
        <View style={{
          flex: 1,
          alignItems: 'center',
          marginTop: 150
        }}>
          <PizzaLogo style={{ color: appTheme.colorScheme.textColor }} width={120} height={120} />
          <Text style={[appTheme.style.title1, { marginTop: appTheme.metrics.marginSpacer }]}>{localizedStrings.appName}</Text>
          <Text style={[appTheme.style.title2, { fontSize: 30 }]}>{localizedStrings.appSubName}</Text>
        </View>
        <Pizza style={{
          position: 'absolute',
          color: '#fff',
          bottom: -pizzaSize / 3,
          right: -pizzaSize / 2.5,
          opacity: 0.4
        }} width={pizzaSize} height={pizzaSize} />
        {
          !isLoading ?
            <>
              {
                loginState.error ?
                  <Text style={[
                    appTheme.style.paragraph,
                    {
                      fontSize: 15,
                      color: '#fff',
                      textAlign: 'center',
                      marginBottom: appTheme.metrics.marginSpacer
                    }]}>{localizedStrings.logInError}</Text> : <></>
              }
              <Button
                icon="logo-reddit"
                onPress={() => logIn()}
                title={localizedStrings.signIn}
                style={{
                  backgroundColor: '#fff',
                  color: appTheme.colorScheme.accentColor
                }}
              />
            </>
            :
            <ActivityIndicator color={'#fff'} size='large'></ActivityIndicator>
        }
      </LinearGradient>
    </SafeAreaView>
  );
};

export default LoginScreen;
