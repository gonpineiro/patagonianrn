import React from 'react';
import { View } from 'react-native';
import { colors } from '../../utils/theme';
import { DEVICE_WIDTH } from '../../utils/dimensions';

interface Props {
  marginTop?: number;
  marginBottom?: number;
  color?: string;
  borderBottomWidth?: number;
  width?: number;
}

const getStyle = ({ borderBottomWidth, color, marginBottom, marginTop, width = 50 }: Props) => {
  return {
    borderBottomWidth,
    borderBottomColor: color,
    marginBottom,
    marginTop,
    width: DEVICE_WIDTH - width,
  };
};

const Separator = ({ marginTop, marginBottom, color, borderBottomWidth, width }: Props) => {
  const style = getStyle({ marginTop, marginBottom, color, borderBottomWidth, width });
  return <View style={style} />;
};

Separator.defaultProps = {
  marginTop: 20,
  marginBottom: 20,
  borderBottomWidth: 1,
  color: colors.white,
  width: DEVICE_WIDTH - 50,
};
export default Separator;
