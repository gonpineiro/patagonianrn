import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Alert, FlatList, View } from 'react-native';
import { useNetInfo } from '@react-native-community/netinfo';

import { DefaultButton, Header, Typography } from '../../components';
import styles from './styles';

import { getAllBooks } from '../../services';
import { goToScreen } from '../../navigation/controls';
import { colors } from '../../utils/theme';

const goToExperimentalScreen = () => {
  goToScreen('Experimental');
};

const ListItem = ({ title }: { title: string }) => (
  <View style={{ height: 30, justifyContent: 'center', marginHorizontal: 20, width: '96%' }}>
    <Typography>{title}</Typography>
  </View>
);

const renderFlatList = ({ item }: any) => <ListItem title={item.title} />;

const HomeScreen = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  const netInfo = useNetInfo();

  console.log(netInfo.isConnected?.toString());

  const getBooksData = () => {
    setLoading(true);
    const dis = async () => {
      try {
        const { success, data } = await getAllBooks();
        if (success) {
          setBooks(data);
        } else {
          Alert.alert('Error getting books on Home Screen');
        }
      } catch (error) {
        console.log('Error getting books on Home Screen', error);
        Alert.alert('Error getting books on Home Screen');
      } finally {
        setLoading(false);
      }
    };
    dis();
  };

  useEffect(() => {
    getBooksData();
  }, []);

  console.log('Inside HomeScreen');
  if (!netInfo.isConnected?.toString()) {
    return (
      <View style={styles.mainContainer}>
        <Typography>No tienes internet</Typography>
      </View>
    );
  }

  return (
    <>
      <Header showBackButton={false} title="Home" />
      {loading ? (
        <View style={styles.mainContainer}>
          <ActivityIndicator size="large" color={colors.mainOrange} />
        </View>
      ) : (
        <View style={styles.mainContainer}>
          <DefaultButton text="Go To Experimental Screen" onPress={goToExperimentalScreen} />
          <FlatList
            refreshing={loading}
            onRefresh={() => getBooksData()}
            data={books}
            renderItem={renderFlatList}
            style={styles.flatList}
          />
        </View>
      )}
    </>
  );
};

export default HomeScreen;
