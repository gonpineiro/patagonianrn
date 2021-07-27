import React from 'react';
import { Text, TouchableOpacity, ViewStyle } from 'react-native';
import { colors } from '../../utils/theme';

import styles from './styles';

interface Props {
  additionalStyle?: ViewStyle;
  color?: string;
  msg: string;
  onPress: () => void;
  textSize: number;
  variant?: 'primary' | 'secondary';
}
/* Primary: backgroundColor orange text white */
/* Primary: backgroundColor white text orange */
const DefaultButton = ({ additionalStyle, onPress, msg, textSize, variant }: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.mainContainer,
        additionalStyle,
        { backgroundColor: variant === 'primary' ? colors.mainOrange : colors.mainWhite },
      ]}
    >
      <Text
        style={{
          fontSize: textSize,
          color: variant === 'primary' ? colors.mainWhite : colors.mainOrange,
        }}
      >
        {msg}
      </Text>
    </TouchableOpacity>
  );
};

DefaultButton.defaultProps = {
  additionalStyle: {},
  color: colors.mainOrange,
  msg: 'Press me',
  textSize: 14,
  variant: 'primary',
};

export default DefaultButton;
