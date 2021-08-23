import React from 'react';
import { View } from 'react-native';

import { DefaultButton, Typography } from '../../components';
import styles from './styles';

import { goToScreen } from '../../navigation/controls';

const goToExperimentalScreen = () => {
  goToScreen('Experimental');
};

const HomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Typography size={20} variant="medium">
        Welcome !!!!
      </Typography>
      <DefaultButton text="Go to Experimental Screen" onPress={goToExperimentalScreen} />
    </View>
  );
};

export default HomeScreen;
