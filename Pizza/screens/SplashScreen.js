import React, { useContext } from 'react';

import { StatusBar, View, SafeAreaView, Text } from 'react-native';

// Theme
import { ThemeContext } from '../components/Context';

// Assets
import PizzaLogo from '../src/assets/images/pizza-logo.svg';

const SplashScreen = () => {
  const appTheme = useContext(ThemeContext);

  return (
    <SafeAreaView style={appTheme.style.mainContainer}>
      <StatusBar {...appTheme.satusBarProps} />
      <View style={appTheme.style.container}>
        <View
          style={{
            marginBottom: 20,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View style={{
            backgroundColor: appTheme.colorScheme.accentColor,
            padding: 20,
            borderRadius: 200
          }}>
            <PizzaLogo style={{ color: '#fff' }} width={55} height={55} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
