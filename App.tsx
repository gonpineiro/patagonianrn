import React from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';

import { DefaultButton } from './src/components';

import { colors } from './src/utils/theme';
import { DEVICE_WIDTH } from './src/utils/dimensions';

const showAlert = () => {
  Alert.alert('Hola');
};

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Hola Mundo!!</Text>
      <Text style={styles.subtitle}>https://academy.patagonian.it/</Text>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
        resizeMode="contain"
      />
      <DefaultButton
        //additionalStyle={styles.button}
        color={colors.mainOrange}
        onPress={showAlert}
        msg={'hola'}
        textSize={30}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: colors.veryLightBlue,
    flex: 1,
    width: '100%',
  },
  title: {
    color: colors.mainOrange,
    fontSize: 50,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: 100,
    marginBottom: 100,
  },
  image: {
    minHeight: 100,
    width: DEVICE_WIDTH * 0.5,
    marginTop: 100,
  },
  subtitle: {
    color: 'white',
    fontSize: 25,
  },
  button: {
    backgroundColor: 'green',
    width: 50,
  },
});

export default App;
