import React from 'react';
import { View } from 'react-native';

import { DefaultButton, Separator, Typography } from '../../components';
import styles from './styles';

import { goToScreen, replaceRoute } from '../../navigation/controls';

// @ts-ignore
const WelcomeScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <Typography size={20} variant="medium">
        Welcome !!!!
      </Typography>
      <Separator width={50} />
      <DefaultButton text="Go to tabs" textSize={16} onPress={() => replaceRoute('TabNavigator')} />
      <DefaultButton
        text="Comenzar !!!!"
        textSize={16}
        onPress={() => goToScreen('Experimental')}
        variant="secondary"
      />
    </View>
  );
};

export default WelcomeScreen;
