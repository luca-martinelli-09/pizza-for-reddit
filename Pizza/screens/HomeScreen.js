import React, { useContext } from 'react';

import { StatusBar, View } from 'react-native';

// Components
import { Button } from '../components/Button';
import { Avatar } from '../components/Avatar';

// Theme
import { ThemeContext, AuthContext } from '../components/Context';

const HomeScreen = () => {
  const appTheme = useContext(ThemeContext);
  const { loginState, signOut } = useContext(AuthContext);

  const me = loginState.me;

  return (
    <View style={appTheme.style.mainContainer}>
      <StatusBar {...appTheme.satusBarProps} />
      <View style={appTheme.style.container}>
        <Avatar online={me.in_chat} uri={me.icon_img.replace(/&amp;/g, '&')} size={[256, 256]} />
        <View
          style={{
            marginBottom: 50,
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
        </View>
        <Button icon='log-out-outline' onPress={() => signOut()} title="Esci" />
      </View>
    </View>
  );
};

export default HomeScreen;
