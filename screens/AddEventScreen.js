import React, { useState, useContext } from 'react';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView, ScrollView, FlatList } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import * as DocumentPicker from 'expo-document-picker';
import { EventContext } from '../Backend/EventContext';
import axios from 'axios';

const AddEventScreen = () => {
  const { addEvent } = useContext(EventContext);

  const [selectedOption, setSelectedOption] = useState([]);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [idCount,setIdCount] = useState(1);
  const [eventData, setEventData] = useState({
    eventName: '',
    condunctedBy: '',
    eventStartDate: '',
    eventEndDate: '',
    startingTime: '',
    endingTime: '',
    enterVenue: '',
    viewedBy: '',
    enterLink: ' ',
    enterCaption: ' ',
    description: ' ',
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
  const serverUrl = "http://localhost:3000/noticedata";
  const header = {
    "Content-Type": "application/json"
  }
  const handleAddEvent = () => {
    addEvent(eventData);
    // navigation.navigate('ViewNotice');
    // setEventData({ ...eventData, id: 3 })
    console.log(eventData);
      // eventData.append(idCount)
      // eventData = [...eventData, {"id": 3}]
      axios.post(serverUrl,eventData,header).catch(error => console.log(error));
    // console.log(eventData);
    // Reset notice data and other fields
    setEventData({
      eventName: '',
      condunctedBy: '',
      eventStartDate: '',
      eventEndDate: '',
      startingTime: '',
      endingTime: '',
      enterVenue: '',
      viewedBy: '',
      enterLink: ' ',
      enterCaption: ' ',
      description: ' ',
    });
    setUploadedFile(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* <FlatList> */}
      <ScrollView>
        <Text style={styles.title}>Add Event</Text>

        <TextInput
          style={styles.input}
          placeholder="Event Name"
          value={eventData.eventName}
          onChangeText={(text) =>
            setEventData({ ...eventData, eventName: text })
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
            setEventData({ ...eventData, conductedBy: item.value })
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
            setEventData({ ...eventData, eventStartDate: item.value })
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
            setEventData({ ...eventData, eventEndDate: item.value })
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
            setEventData({ ...eventData, startingTime: item.value })
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
            setEventData({ ...eventData, endingTime: item.value })
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
            setEventData({ ...eventData, viewedBy: item.value })
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
            setEventData({ ...eventData, enterLink: item.value })
          }
        />


        <TextInput
          style={styles.input}
          placeholder="Enter Link"
          value={eventData.enterCaption}
          onChangeText={(text) =>
            setEventData({ ...eventData, enterCaption: text })
          }
        />

        <TextInput
          style={styles.input}
          placeholder="Enter Caption"
          value={eventData.description}
          onChangeText={(text) =>
            setEventData({ ...eventData, description: text })
          }
        />


        {/* Rest of the options and input fields... */}

        {/* Add Description */}
        <Text style={styles.label}>Description:</Text>
        <TextInput
          style={styles.input}
          multiline
          value={eventData.description}
          onChangeText={(text) =>
            setEventData({ ...eventData, description: text })
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
        <Button title="Add Event" onPress={handleAddEvent} />
      </ScrollView>
      {/* </FlatList> */}
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
    zIndex: 5000,
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
