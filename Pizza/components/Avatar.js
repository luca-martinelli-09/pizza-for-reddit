import React, { useContext } from 'react';

import { View, Image } from 'react-native';

// Theme
import { ThemeContext } from '../components/Context';

const Avatar = props => {
  const appTheme = useContext(ThemeContext);

  const imageWidth = 45;
  const imageHeight = imageWidth * props.size[1] / props.size[0];

  return (
    <View
      style={{
        position: 'relative',
        width: imageWidth + 5,
        height: imageWidth + 5,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        borderWidth: 2,
        borderColor: appTheme.colorScheme.accentColor,
      }}>
      <Image
        source={{
          uri: props.uri,
        }}
        style={{
          width: imageWidth,
          height: imageHeight,
          marginBottom: 2
        }}
      />
      {
        props.online ?
          <View style={{
            position: 'absolute',
            right: -2,
            bottom: -2,
            width: 15,
            height: 15,
            borderRadius: 15,
            borderColor: appTheme.colorScheme.backgroundColor,
            borderWidth: 3,
            backgroundColor: appTheme.colorScheme.onlineColor,
          }} /> : <></>
      }
    </View>
  );
};

export { Avatar };
