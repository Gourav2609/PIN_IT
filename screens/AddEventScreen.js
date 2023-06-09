import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet,SafeAreaView,ScrollView, FlatList } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import * as DocumentPicker from 'expo-document-picker';
import { NoticeContext } from '../Backend/NoticeContext';

const AddEventScreen = () => {
  const { addNotice } = useContext(NoticeContext);

  const [selectedOption, setSelectedOption] = useState([]);
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

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleFileUpload = async () => {
    const file = await DocumentPicker.getDocumentAsync();
    if (file.type === 'success') {
      setUploadedFile(file);
    }
  };

  const handleAddEvent = () => {
    addNotice(noticeData);
    // navigation.navigate('ViewNotice');
    console.log(noticeData);
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
    setUploadedFile(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList>
      <Text style={styles.title}>Add Event</Text>

<TextInput
  style={styles.input}
  placeholder="Event Name"
  value={noticeData.noticeName}
  onChangeText={(text) =>
    setNoticeData({ ...noticeData, noticeName: text })
  }
/>

<DropDownPicker
  items={[
    { label: 'All HODS', value: 'all_hods' },
    { label: 'Director', value: 'director' },
  ]}
  defaultValue={selectedOption}
  placeholder="Conducted By"
  containerStyle={styles.dropdownContainer}
  style={styles.dropdown}
  itemStyle={styles.dropdownItem}
  dropDownStyle={styles.dropdownMenu}
  onChangeItem={(item) =>
    setNoticeData({ ...noticeData, concernedFaculty: item.value })
  }
/>
<DropDownPicker
  items={[
    { label: 'All HODS', value: 'all_hods' },
    { label: 'Director', value: 'director' },
  ]}
  defaultValue={selectedOption}
  placeholder="Event Start Date"
  containerStyle={styles.dropdownContainer}
  style={styles.dropdown}
  itemStyle={styles.dropdownItem}
  dropDownStyle={styles.dropdownMenu}
  onChangeItem={(item) =>
    setNoticeData({ ...noticeData, noticeDate: item.value })
  }
/>

<DropDownPicker
  items={[
    { label: 'All HODS', value: 'all_hods' },
    { label: 'Director', value: 'director' },
  ]}
  defaultValue={selectedOption}
  placeholder="Event End Date"
  containerStyle={styles.dropdownContainer}
  style={styles.dropdown}
  itemStyle={styles.dropdownItem}
  dropDownStyle={styles.dropdownMenu}
  onChangeItem={(item) =>
    setNoticeData({ ...noticeData, issuedFor: item.value })
  }
/>
<DropDownPicker
  items={[
    { label: 'All HODS', value: 'all_hods' },
    { label: 'Director', value: 'director' },
  ]}
  defaultValue={selectedOption}
  placeholder="Starting Time"
  containerStyle={styles.dropdownContainer}
  style={styles.dropdown}
  itemStyle={styles.dropdownItem}
  dropDownStyle={styles.dropdownMenu}
  onChangeItem={(item) =>
    setNoticeData({ ...noticeData, viewedBy: item.value })
  }
/>
<DropDownPicker
  items={[
    { label: 'All HODS', value: 'all_hods' },
    { label: 'Director', value: 'director' },
  ]}
  defaultValue={selectedOption}
  placeholder="Ending Time"
  containerStyle={styles.dropdownContainer}
  style={styles.dropdown}
  itemStyle={styles.dropdownItem}
  dropDownStyle={styles.dropdownMenu}
  onChangeItem={(item) =>
    setNoticeData({ ...noticeData, viewedBy: item.value })
  }
/>
<DropDownPicker
  items={[
    { label: 'All HODS', value: 'all_hods' },
    { label: 'Director', value: 'director' },
  ]}
  defaultValue={selectedOption}
  placeholder="Enter Venue"
  containerStyle={styles.dropdownContainer}
  style={styles.dropdown}
  itemStyle={styles.dropdownItem}
  dropDownStyle={styles.dropdownMenu}
  onChangeItem={(item) =>
    setNoticeData({ ...noticeData, viewedBy: item.value })
  }
/>
<DropDownPicker
  items={[
    { label: 'All HODS', value: 'all_hods' },
    { label: 'Director', value: 'director' },
  ]}
  defaultValue={selectedOption}
  placeholder="Viewed By"
  containerStyle={styles.dropdownContainer}
  style={styles.dropdown}
  itemStyle={styles.dropdownItem}
  dropDownStyle={styles.dropdownMenu}
  onChangeItem={(item) =>
    setNoticeData({ ...noticeData, viewedBy: item.value })
  }
/>


<TextInput
  style={styles.input}
  placeholder="Enter Link"
  value={noticeData.noticeName}
  onChangeText={(text) =>
    setNoticeData({ ...noticeData, noticeName: text })
  }
/>

<TextInput
  style={styles.input}
  placeholder="Enter Caption"
  value={noticeData.noticeName}
  onChangeText={(text) =>
    setNoticeData({ ...noticeData, noticeName: text })
  }
/>  


{/* Rest of the options and input fields... */}

{/* Add Description */}
<Text style={styles.label}>Description:</Text>
<TextInput
  style={styles.input}
  multiline
  value={noticeData.description}
  onChangeText={(text) =>
    setNoticeData({ ...noticeData, description: text })
  }
/>

{/* Upload Document */}
<Text style={styles.label}>Upload Photo:</Text>
<Button title="Upload File" onPress={handleFileUpload} />

{/* Uploaded File Display */}
{uploadedFile && (
  <View style={styles.uploadedFileContainer}>
    <Text style={styles.uploadedFileText}>Uploaded Photo</Text>
    <View style={styles.uploadedFileNameContainer}>
      <Text style={styles.uploadedFileName}>{uploadedFile.name}</Text>
    </View>
  </View>
)}

{/* Add Notice Button */}
<Button title="Add Notice" onPress={handleAddEvent} />
      </FlatList>
    </SafeAreaView>
  );
};

// Styles...
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // height:600px,
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


export default AddEventScreen;
