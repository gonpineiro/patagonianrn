import React from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';

import styles from './styles';

interface Props {
  additionalStyle?: ViewStyle;
  color?: string;
  msg: string;
  onPress: () => void;
  textSize: number;
}

const DefaultButton = ({ additionalStyle, color, onPress, msg, textSize }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.mainContainer, additionalStyle, { backgroundColor: color }]}
    >
      <Text style={{ fontSize: textSize }}>{msg}</Text>
    </TouchableOpacity>
  );
};

DefaultButton.defaultProps = {
  additionalStyle: {},
  msg: 'Press me',
};

export default DefaultButton;
