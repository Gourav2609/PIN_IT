import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../Backend/FirebaseConfig';
// import { navigation } from "react-navigation";


function AddNoticeScreen() {
  // const navigation = useNavigation();

  const [uploadedFile, setUploadedFile] = useState(null);
  const [noticeData, setNoticeData] = useState({
    noticeName: '',
    noticeID: '',
    authorizedBy: '',
    concernedFaculty: '',
    noticeDate: '',
    issuedFor: '',
    viewedBy: '',
    description: '',
  });

  const handleFileUpload = async () => {
    const file = await DocumentPicker.getDocumentAsync();
    if (file.type === 'success') {
      setUploadedFile(file);
    }
  };
  // const toViewNoice = () =>{
  //     navigation.navigate('ViewNotice');
  // }

  const handleAddNotice = async () => {
    try {
      // Add notice to Firestore
      await addDoc(collection(db, 'notices'), noticeData);
      // Reset notice data and other fields
      setNoticeData({
        noticeName: '',
        noticeID: '',
        authorizedBy: '',
        concernedFaculty: '',
        noticeDate: '',
        issuedFor: '',
        viewedBy: '',
        description: '',
      });
      // toViewNoice();
      setUploadedFile(null);
      console.log('Data was successfully sent');
      // navigation.navigate('ViewNotice')
    } catch (error) {
      console.error('Error adding notice to Firestore:', error);
      // Handle the error as per your application's requirements
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Text style={styles.title}>Add Notice</Text>

        <TextInput
          style={styles.input}
          placeholder="Notice Name"
          value={noticeData.noticeName}
          onChangeText={(text) => setNoticeData({ ...noticeData, noticeName: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="Notice ID"
          value={noticeData.noticeID}
          onChangeText={(text) => setNoticeData({ ...noticeData, noticeID: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="Authorized By"
          value={noticeData.authorizedBy}
          onChangeText={(text) => setNoticeData({ ...noticeData, authorizedBy: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="Concerned Faculty"
          value={noticeData.concernedFaculty}
          onChangeText={(text) => setNoticeData({ ...noticeData, concernedFaculty: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="Notice Date"
          value={noticeData.noticeDate}
          onChangeText={(text) => setNoticeData({ ...noticeData, noticeDate: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="Issued For"
          value={noticeData.issuedFor}
          onChangeText={(text) => setNoticeData({ ...noticeData, issuedFor: text })}
        />

        <TextInput
          style={styles.input}
          placeholder="Viewed By"
          value={noticeData.viewedBy}
          onChangeText={(text) => setNoticeData({ ...noticeData, viewedBy: text })}
        />

        {/* Rest of the input fields and components */}
        
        {/* Add Description */}
        <Text style={styles.label}>Description:</Text>
        <TextInput
          style={styles.input}
          multiline
          value={noticeData.description}
          onChangeText={(text) => setNoticeData({ ...noticeData, description: text })}
        />

        {/* Upload Document */}
        <Text style={styles.label}>Upload Document:</Text>
        <Button title="Upload File" onPress={handleFileUpload} />

        {/* Uploaded File Display */}
        {uploadedFile && (
          <View style={styles.uploadedFileContainer}>
            <Text style={styles.uploadedFileText}>Uploaded File:</Text>
            <View style={styles.uploadedFileNameContainer}>
              <Text style={styles.uploadedFileName}>{uploadedFile.name}</Text>
            </View>
          </View>
        )}

        {/* Add Notice Button */}
        <Button title="Add Notice" onPress={handleAddNotice} />
      </ScrollView>
    </SafeAreaView>
  );
}

// Styles...
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
  },
  dropdownContainer: {
    height: 40,
    marginBottom: 20,
  },
  dropdown: {
    backgroundColor: '#fafafa',
  },
  dropdownItem: {
    justifyContent: 'flex-start',
  },
  dropdownMenu: {
    backgroundColor: '#fafafa',
    zIndex:5000,
  },
  uploadedFileContainer: {
    marginTop: 20,
    backgroundColor: '#4CAF50',
    padding: 10,
    borderRadius: 5,
  },
  uploadedFileText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#ffffff',
  },
  uploadedFileNameContainer: {
    backgroundColor: '#ffffff',
    padding: 5,
    borderRadius: 5,
  },
  uploadedFileName: {
    fontSize: 14,
    color: '#000000',
  },
});


export default AddNoticeScreen;
