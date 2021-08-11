import React from 'react';
import { View } from 'react-native';

import { Typography } from '../../components';
import styles from './styles';

// @ts-ignore
const HistoryScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Typography size={20} variant="medium">
        HistoryScreen !!!!
      </Typography>
    </View>
  );
};

export default HistoryScreen;
