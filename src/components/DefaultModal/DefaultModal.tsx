import React from 'react';
import { Modal, Text, View } from 'react-native';

import DefaultButton from '../DefaultButton';

import styles from './styles';

interface Props {
  visible: boolean;
  onPressButton: () => void;
  title: string;
  description: string;
}

/* Agrear variantes con un diccionario */
/* Perfeccionar un titulo y una descripcion */

const DefaultModal = ({ visible, onPressButton, title, description }: Props) => {
  return (
    <Modal animationType="fade" transparent visible={visible}>
      <View style={styles.mainContainer}>
        <View style={styles.viewContainer}>
          <Text style={styles.text}>{title}</Text>
          <DefaultButton
            onPress={onPressButton}
            text={description}
            additionalStyle={styles.button}
          />
        </View>
      </View>
    </Modal>
  );
};

export default DefaultModal;
