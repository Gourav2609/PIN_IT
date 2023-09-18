// StudentLoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet , TouchableOpacity } from 'react-native';
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
          placeholder="abc@aitpune.edu.in"
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
        <TouchableOpacity
          style={[styles.button, styles.adminButton]}
          onPress={handleSignIn}
        >
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  formContainer: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '80%',
    justifyContent: 'center',
  },
  title: {
    display:'flex',
    // backgroundColor:'#5689',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    // justifyContent:'center',
    // alignContent:'center',
    // alignItems:'center',
    textAlign:'center',
  },
  input: {
    width: '100%',
    height:50,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: '#635BFF',
  },
  buttonText:{
    color:'#fff',
    fontSize:20,
  }
});

export default StudentLoginScreen;



