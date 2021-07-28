import React, { useState } from 'react';
import { Image, Modal, StyleSheet, Text, View } from 'react-native';

import { DefaultButton } from './src/components';

import { colors } from './src/utils/theme';
import { DEVICE_WIDTH } from './src/utils/dimensions';

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.title}>Hola Mundo!!</Text>
      <Text style={styles.subtitle}>https://academy.patagonian.it/</Text>
      <Image
        source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
        style={styles.image}
        resizeMode="contain"
      />
      <DefaultButton onPress={showModal} msg={'Mostrar Modal'} textSize={30} variant="secondary" />
      <Modal animationType="fade" transparent visible={isModalVisible}>
        <View
          style={{
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            flex: 1,
            justifyContent: 'center',
            width: '100%',
          }}
        >
          <View
            style={{
              alignItems: 'center',
              backgroundColor: colors.white,
              borderRadius: 13,
              justifyContent: 'center',
              paddingBottom: 20,
              paddingTop: 10,
              width: '65%',
            }}
          >
            <Text style={{ marginVertical: 20 }}>Hola, esto es un Modal!</Text>
            <DefaultButton onPress={hideModal} msg={'Ok'} additionalStyle={{ height: 40 }} />
          </View>
        </View>
      </Modal>
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
