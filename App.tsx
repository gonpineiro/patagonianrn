/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { colors } from './src/utils/theme';
import { DEVICE_HEIGHT, DEVICE_WIDTH } from './src/utils/dimensions';

const App = () => {
  console.log('DEVICE_HEIGHT', DEVICE_HEIGHT);
  console.log('DEVICE_WIDTH', DEVICE_WIDTH);

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Texto</Text>
      <Text>Subtitulo</Text>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.veryLightBlue,
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    color: colors.mainOrange,
    fontSize: 50,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 10,
  },
  image: {
    minHeight: 100,
    width: DEVICE_WIDTH * 0.5,
  },
});

export default App;
