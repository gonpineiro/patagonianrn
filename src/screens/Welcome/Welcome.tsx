import React from 'react';
import { View } from 'react-native';

import { DefaultButton, Separator, Typography } from '../../components';
import styles from './styles';

// @ts-ignore
const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <Typography size={20} variant="medium">
        Welcome !!!!
      </Typography>
      <Separator width={50} />
      <DefaultButton
        text="Comenzar !!!!"
        textSize={16}
        onPress={() => navigation.navigate('Experimental')}
      />
    </View>
  );
};

export default WelcomeScreen;
