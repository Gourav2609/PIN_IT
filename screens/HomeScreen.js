// HomeScreen.js

import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const HomeScreen = ({ navigation }) => {
  HomeScreen.navigationOptions = {
    headerShown: false,
  };

  setTimeout(() => {

    navigation.navigate('Details');
  }
  , 2500);



  return (
    <View style={styles.container}>
      <View style={styles.square}>
        <Image source={require('../assets/Pin-it.png')} style={styles.pinImage} />
        <Text style={styles.title}>
          <Text style={styles.titlePart1}>Pin</Text>{' '}
          <Text style={styles.titlePart2}>It</Text>
        </Text>
        {/* <Button
          title="Go to Login"
          onPress={() => navigation.navigate('Details')}
          style={styles.button}
        /> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor: '#fcb103',
  },
  square: {
    width: '80%',
    // backgroundColor: '#ffffff',
    alignItems: 'center',
    padding: 20,
    borderRadius: 10,
    // elevation: 5,
  },
  pinImage: {
    width: 70,
    height: 70,
    marginBottom: 10,
  },
  title: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  titlePart1: {
    color: '#30313d',
  },
  titlePart2: {
    color: '#30313d',
  },
  button: {
    backgroundColor: '#ff0000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
    height:20,
  },
});

export default HomeScreen;
