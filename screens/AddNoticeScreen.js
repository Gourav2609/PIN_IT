import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { collection, addDoc } from 'firebase/firestore';
import { db , storage } from '../Backend/FirebaseConfig';
import Spinner from 'react-native-loading-spinner-overlay';
import { Toast } from 'react-native-toast-message/lib/src/Toast';


let cu = 0;

function AddNoticeScreen() {
  // const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [noticeData, setNoticeData] = useState({
    id: cu,
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


  const handleAddNotice = async () => {
    cu++;
    console.log(cu);
    try {
      // Add notice to Firestore
      setLoading(true);
      // let downloadUrl = null;
      // if (uploadedFile) {
      //   const response = await fetch(uploadedFile.uri);
      //   const blob = await response.blob();
      //   const fileName = `notices/${Date.now()}-${uploadedFile.name}`;
      //   const storageRef = storage.ref().child(fileName);
      //   await storageRef.put(blob);
      //   downloadUrl = await storageRef.getDownloadURL();
      // }
      await addDoc(collection(db, 'notices'), noticeData );
      // Reset notice data and other fields
      setNoticeData({
        id: cu,
        noticeName: '',
        noticeID: '',
        authorizedBy: '',
        concernedFaculty: '',
        noticeDate: '',
        issuedFor: '',
        viewedBy: '',
        description: '',
      });
      setUploadedFile(null);
      setToastMessage('Notice was successfully created');
      // setShowToast(true);

      console.log('Data was successfully sent');
    } catch (error) {
      console.error('Error adding notice to Firestore:', error);
      // Handle the error as per your application's requirements
    } finally {
      setLoading(false);
      showToastMessage;
    }
  };


  const showToastMessage = (message) => {
    setToastMessage(message);
    setShowToast(true);
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

        <Spinner
            visible={loading}
            textContent={'Creating Notice...'}
            textStyle={styles.spinnerText} />

        <Toast
          visible={showToast}
          position="bottom"
          autoHide={true}
          autoHideDuration={3000}
          onHidden={() => setShowToast(false)}
        />


      </ScrollView>
    </SafeAreaView>
  );
}

// Styles...
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor : '#fff',
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
  spinnerText : {
    color: '#FFF',
  },
  toastContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    backgroundColor: '#333',
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#000000',
  },
  toastText: {
    color: '#fff',
    textAlign: 'center',
  },
});


export default AddNoticeScreen;
