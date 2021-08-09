import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, View } from 'react-native';
import { colors } from '../../utils/theme';
import styles from './styles';

import { DefaultButton, AlertModal, Typography, Separator } from '../../components';

const ExperimentalScreen = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <>
      <SafeAreaView style={styles.safeArea} />
      <ScrollView style={styles.ScrollView}>
        <View style={styles.mainContainer}>
          <Typography align="center" size={50} color={colors.mainOrange} variant={'bold'}>
            Hola Mundo!!
          </Typography>
          <Typography align="center" size={25} color={'white'} variant={'medium'}>
            https://academy.patagonian.it/
          </Typography>
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.image}
            resizeMode="contain"
          />
          <Separator width={50} />
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.image}
            resizeMode="contain"
          />
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.image}
            resizeMode="contain"
          />
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.image}
            resizeMode="contain"
          />
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.image}
            resizeMode="contain"
          />
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.image}
            resizeMode="contain"
          />
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.image}
            resizeMode="contain"
          />
          <DefaultButton
            onPress={showModal}
            text={'Mostrar Modal'}
            textSize={30}
            variant="secondary"
          />
          <AlertModal
            message={'Esto es un modal'}
            primaryButtonText={'Ok!'}
            secondaryButtonText={'Cancel!'}
            onPressPrimaryButton={hideModal}
            onPressSecondaryButton={hideModal}
            visible={isModalVisible}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default ExperimentalScreen;
