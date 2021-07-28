import React from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';
import { colors } from '../../utils/theme';

import styles, { buttonTextColors } from './styles';

interface Props {
  additionalStyle?: ViewStyle;
  msg: string;
  onPress: () => void;
  textSize: number;
  variant?: 'primary' | 'secondary';
}

const DefaultButton = ({ additionalStyle, onPress, msg, textSize, variant = 'primary' }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.mainContainer, styles[variant], additionalStyle]}
    >
      <Text style={{ fontSize: textSize, color: buttonTextColors[variant] || colors.white }}>
        {msg}
      </Text>
    </TouchableOpacity>
  );
};

export default DefaultButton;
