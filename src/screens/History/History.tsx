import React from 'react';
import { View } from 'react-native';

import { DefaultButton, Separator, Typography } from '../../components';
import styles from './styles';

import { goToScreen, resetNavigation } from '../../navigation/controls';

const HistoryScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Typography size={20} variant="medium">
        HistoryScreen !!!!
      </Typography>
      <Separator size={50} />
      <DefaultButton text="Go To Experimental Screen" onPress={() => goToScreen('Experimental')} />
      <Separator size={50} />
      <DefaultButton text="Log Out" variant="secondary" onPress={resetNavigation} />
    </View>
  );
};

export default HistoryScreen;
