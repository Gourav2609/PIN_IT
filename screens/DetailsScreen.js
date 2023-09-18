// DetailScreen.js

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet , Image } from 'react-native';

const DetailScreen = ({ navigation }) => {
  return (
    
    <View style={styles.container}>
      <View style={styles.pinDiv}><Image source={require('../assets/logo.png')} style={styles.pinImage} /></View>
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
  headerShown: false,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  box: {
    width: '80%',
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 10,
    flex:3,
    // elevation: 5,
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
    backgroundColor: '#635BFF',
  },
  studentButton: {
    backgroundColor: '#635BFF',
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  pinDiv:{
    // backgroundColor: '#000',
    display:'flex',
    flex:2,
    justifyContent:'center'

  },
  pinImage:{
      padding:10,
  }
});

export default DetailScreen;
