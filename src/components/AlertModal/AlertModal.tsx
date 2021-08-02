import React from 'react';
import { Modal, Text, View } from 'react-native';

import DefaultButton from '../DefaultButton';

import styles from './styles';

interface Props {
  visible: boolean;
  onPressPrimaryButton: () => void;
  title: string;
  primaryButtonText: string;
}

/* Agrear variantes con un diccionario */
/* Perfeccionar un titulo y una descripcion */

const DefaultModal = ({ visible, onPressPrimaryButton, title, primaryButtonText }: Props) => {
  return (
    <Modal animationType="fade" transparent visible={visible}>
      <View style={styles.mainContainer}>
        <View style={styles.innerAlert}>
          <Text style={styles.text}>{title}</Text>
          <DefaultButton
            onPress={onPressPrimaryButton}
            text={primaryButtonText}
            additionalStyle={styles.button}
          />
        </View>
      </View>
    </Modal>
  );
};

export default DefaultModal;
