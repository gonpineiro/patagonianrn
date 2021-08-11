import React from 'react';
import { View } from 'react-native';

import { DefaultButton, Separator, Typography } from '../../components';
import styles from './styles';

import { resetNavigation } from '../../navigation/controls';

// @ts-ignore
const HistoryScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Typography size={20} variant="medium">
        HistoryScreen !!!!
      </Typography>
      <Separator width={50} />
      <DefaultButton text="Log Out" onPress={resetNavigation} />
    </View>
  );
};

export default HistoryScreen;
