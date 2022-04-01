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
            justifyContent: 'flex-end',
          }}>
          <PizzaLogo style={{ color: appTheme.colorScheme.accentColor }} width={180} height={180} />
          <Text style={[appTheme.style.title2, { fontSize: 75, marginTop: 10 }]}>Pizza</Text>
          <Text style={[appTheme.style.title2, { fontSize: 40 }]}>for Reddit</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SplashScreen;
