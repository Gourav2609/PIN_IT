// StudentLoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import {getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";

const StudentLoginScreen = ({navigation}) => {
  const [username, setRegistrationNumber] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = () => {
          const auth = getAuth();
          signInWithEmailAndPassword(auth, username ,password).then((response)=>
          {
          navigation.navigate('ViewNotice');
          console.log('successfully logged in');
          // sessionStorage.setItem('Auth Token', response._tokenResponse.refreshToken);
          }).catch((error)=>{
              const errorCode = error.code;
              const errorMessage = error.message;
              alert('user does not exist');
              console.log(error);
          })
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Student Login</Text>
        <TextInput
          style={styles.input}
          placeholder="Registration Number"
          value={username}
          onChangeText={setRegistrationNumber}
          keyboardType="text"
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          // secureTextEntry
        />
        <Button title="Sign In" onPress={handleSignIn} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fcb103',
  },
  formContainer: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});

export default StudentLoginScreen;



