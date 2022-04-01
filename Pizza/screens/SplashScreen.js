import React, { useContext } from 'react';

import { StatusBar, View, SafeAreaView, ActivityIndicator } from 'react-native';

// Theme
import { ThemeContext } from '../components/Context';

// Assets
// import DianaLogo from '../src/assets/images/diana-logo.svg';

const SplashScreen = () => {
  const appTheme = useContext(ThemeContext);

  return (
    <SafeAreaView style={appTheme.style.mainContainer}>
      <StatusBar {...appTheme.satusBarProps} />
      <View style={appTheme.style.container}>
        <View
          style={{
            marginBottom: 50,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          
        </View>
        <ActivityIndicator size="large" color={appTheme.colorScheme.textColor} />
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
