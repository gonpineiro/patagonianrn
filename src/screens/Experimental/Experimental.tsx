import React, { useState } from 'react';
import { Image, SafeAreaView, ScrollView, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

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
          <Separator width={50} />
          <MaterialIcon name="search" size={50} color="#fff" />
          <Image
            source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
            style={styles.image}
            resizeMode="contain"
          />
          <Separator width={50} />
          <DefaultButton
            onPress={showModal}
            text={'Show Modal'}
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
