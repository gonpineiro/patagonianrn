import React from 'react';
import { Modal, Text, View } from 'react-native';

import { DefaultButton } from '../index';

import styles from './styles';

interface Props {
  isModalVisible: boolean;
  hideModal: () => void;
}

const DefaultModal = ({ isModalVisible, hideModal }: Props) => {
  return (
    <Modal animationType="fade" transparent visible={isModalVisible}>
      <View style={styles.mainContainer}>
        <View style={styles.viewContainer}>
          <Text style={styles.text}>Hola, esto es un Modal!</Text>
          <DefaultButton onPress={hideModal} msg={'Ok'} additionalStyle={styles.button} />
        </View>
      </View>
    </Modal>
  );
};

export default DefaultModal;
