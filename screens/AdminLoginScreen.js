// AdminLoginScreen.js

import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet , ActivityIndicator } from 'react-native';
import {getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebaseConfig from '../Backend/FirebaseConfig';
import { initializeApp } from 'firebase/app';
import { LogBox } from 'react-native';

const AdminLoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [activity,setActivity] = useState(false);


  
  const handleLogin = () => {
    setActivity(true);
    const auth = getAuth();
               signInWithEmailAndPassword(auth, username ,password).then((response)=>
               {
                
                navigation.navigate('AdminDashboard');
                console.log('successfully logged in');
               }).catch((error)=>{
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    alert(errorMessage);
                    console.log(error);
               })
               
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Admin Login</Text>
      <TextInput
        style={styles.input}
        placeholder="abc@aitpune.edu.in"
        onChangeText={(text) => setUsername(text)}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>LOGIN</Text>
      </TouchableOpacity>
      {activity ? <ActivityIndicator color="#0000ff" /> : null}
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '70%',
    height: 50,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    width:'70%',
    alignContent:'center',
    justifyContent:'center',
    backgroundColor: '#635BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    height:50,
    // borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign:'center',
  },
});

export default AdminLoginScreen;
