// DetailScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const DetailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <TouchableOpacity
          style={[styles.button, styles.adminButton]}
          onPress={() => navigation.navigate('AdminLogin')}
        >
          <Text style={styles.buttonText}>Admin</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.studentButton]}
          onPress={() => navigation.navigate('StudentLogin')}
        >
          <Text style={styles.buttonText}>Student</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

DetailScreen.navigationOptions = {
  headerShown: true,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcb103',
  },
  box: {
    width: '80%',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  button: {
    width: '100%',
    height: 60,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  adminButton: {
    backgroundColor: '#fcb103',
  },
  studentButton: {
    backgroundColor: '#fcb103',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
});

export default DetailScreen;
