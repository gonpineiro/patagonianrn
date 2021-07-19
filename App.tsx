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
import { StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Texto</Text>
      <Text>Subtitulo</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: 'center',
    backgroundColor: '#ABCDEF',
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  title: {
    color: 'coral',
    fontSize: 50,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 10,
  },
});

export default App;
