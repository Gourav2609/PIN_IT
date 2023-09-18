import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';

const ContactUs = () => {
  const initialContacts = [
    { club: 'Techboard', name: 'Vansh Vatsal', phone: '7620310340' },
    { club: 'Techboard', name: 'Anushna Panwar', phone: '9971081972' },
    { club: 'Coding Cell', name: 'Nooka Praveen', phone: '9390639860' },
    { club: 'I&E Cell', name: 'Samik Choudhury', phone: '7586972680' },
    { club: 'I&E Cell', name: 'Tanu Sharma', phone: '8171970843' },
    { club: 'Cycling Club', name: 'Rhitvik Deodhar', phone: '7248957217' },
    { club: 'Cycling Club', name: 'Hemant Kumar Gurjar', phone: '9001972446' },
    { club: 'GDSC', name: 'Samik Choudhury', phone: '7586972680' },
    { club: 'CEAR', name: 'Kapil Kharita', phone: '9057244977' },
    { club: 'CEAR', name: 'Priyanka Nikam', phone: '7385435015' },
    { club: 'Cultural Board', name: 'Hemank Singh', phone: '9993390750' },
    { club: 'Cultural Board', name: 'Sayanya Mondal', phone: '6297790409' },
    { club: 'DDQ', name: 'Eshaan Kapoor', phone: '9468796996' },
    { club: 'DDQ', name: 'Swapnendu Chakrabarti', phone: '8334876601' },
    { club: 'EV Cell', name: 'Suraj Singh', phone: '8684868158' },
    { club: 'EV Cell', name: 'Vivek Patel', phone: '7355550423' },
    { club: 'Fine Arts Club', name: 'Aditya Kumar Verma', phone: '7347524376' },
    { club: 'Fine Arts Club', name: 'Amita Singh', phone: '7355714414' },
    { club: 'GDXR Club', name: 'Abhishek Thakur', phone: '' },
    { club: 'GDXR Club', name: 'Prakash Yogi', phone: '8107271711' },
    { club: 'ISDF Club', name: 'Tarun Mishra', phone: '' },
    { club: 'ISDF Club', name: 'Kamakshi Dixit', phone: '9149740466' },
    { club: 'PR Cell', name: 'Divyanshu Gupta', phone: '7340477079' },
    { club: 'PR Cell', name: 'Vikrant Kumar', phone: '6306024127' },
    { club: 'Magazine Board', name: 'Piyush Yadav', phone: '9466735758' },
    { club: 'Magazine Board', name: 'Deeksha Singh', phone: '9717693612' },
    { club: 'Maths Club', name: 'Saloni Kumari', phone: '9623466658' },
    { club: 'Maths Club', name: 'Fahad Farzan', phone: '8696394826' },
    { club: 'NSS Club', name: 'Sushmita Singh', phone: '8765382260' },
    { club: 'NSS Club', name: 'Ronak Dadich', phone: '9461844355' },
    { club: 'OSS Club', name: 'Vidushi Singh', phone: '8619211572' },
    { club: 'OSS Club', name: 'Anand Dwivedi', phone: '7518676910' },
    { club: 'Nature Club', name: 'Anurag Singh', phone: '6395020131' },
    { club: 'Nature Club', name: 'Nikhita Pal', phone: '6386684904' },
    { club: 'Quantum Club', name: 'Pooja', phone: '' },
    { club: 'Quantum Club', name: '', phone: '' },
    { club: 'Radio Club', name: 'Prince Yadav', phone: '7027313879' },
    { club: 'Radio Club', name: 'Monika Mahala', phone: '8529665463' },
    { club: 'SAE Club', name: 'Utkarsh Singh', phone: '8218478399' },
    { club: 'SAE Club', name: 'Arunima P', phone: '8870847457' },
    { club: 'Sports Club', name: 'Arajeet Pandey', phone: '8571943594' },
    { club: 'Sports Club', name: 'Hemasree Dasari', phone: '8978397390' },
    { club: 'Spiritual Club', name: 'Vikash Puniya', phone: '8630107496' },
    { club: 'Spiritual Club', name: 'Beauty Nirala', phone: '7070322708' },
    { club: 'R&D Cell', name: 'Dheeraj Patil', phone: '8956948460' },
    { club: 'R&D Cell', name: 'Amruta Patil', phone: '9130175222' },
    { club: 'NCC', name: 'Aniket Patil', phone: '9284897891' },
    { club: 'NCC', name: 'Pallavi Shirsath', phone: '8197761199' },
    { club: 'Student Council', name: 'Abhishek Kumar Meel', phone: '7014984585' },
    { club: 'Student Council', name: 'Isha Tyagi', phone: '8307360415' },
    { club: 'Student Council', name: 'Atul Singh', phone: '8840675165' },
    // Add more contacts for other clubs as needed
  ];

  const [contacts, setContacts] = useState(initialContacts);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedContact, setSelectedContact] = useState(null);

  const handleSearch = () => {
    const filteredContacts = initialContacts.filter((contact) => {
      const nameMatches = contact.name.toLowerCase().includes(searchQuery.toLowerCase());
      const clubMatches = contact.club && contact.club.toLowerCase().includes(searchQuery.toLowerCase());
      return nameMatches || clubMatches;
    });
    setContacts(filteredContacts);
  };

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.contactName}>{item.name}</Text>
      <Text style={styles.contactDetails}>Club: {item.club}</Text>
      <Text style={styles.contactDetails}>Phone: {item.phone}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact Details</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search by Name or Club"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
        onEndEditing={handleSearch}
      />
      <FlatList
        data={contacts}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 8,
    marginBottom: 16,
    backgroundColor :'#fff',
  },
  card: {
    backgroundColor: '#635BFF',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
  },
  contactName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color:'#fff',
  },
  contactDetails:{
    color:'#d9d9d9',
  }
});

export default ContactUs;
